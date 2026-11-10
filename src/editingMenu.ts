import {Check,CheckCheck,ChevronDown,Copy,Scissors,ClipboardPaste,RotateCcw,RotateCw,TextSelect} from 'lucide-react';
import type {MenuDefinition,MenuItem} from './ContextMenu';
export async function copyText(text:string,notify:(message:string)=>void){
 try{await navigator.clipboard.writeText(text);notify('Disalin ke clipboard');return true;}
 catch{notify('Clipboard tidak tersedia. Gunakan Ctrl+C untuk menyalin.');return false;}
}
function fieldName(element:HTMLElement){return element.getAttribute('aria-label')||element.closest('label')?.textContent?.trim()||(element.id?document.querySelector<HTMLLabelElement>('label[for="'+CSS.escape(element.id)+'"]')?.textContent:'')||element.getAttribute('placeholder')||'Teks';}
export function editingMenu(target:HTMLElement,notify:(message:string)=>void):MenuDefinition|null{
 const checkbox=target.closest<HTMLInputElement>('input[type="checkbox"]');
 if(checkbox)return{label:'Checklist - '+(checkbox.getAttribute('aria-label')||checkbox.closest('label')?.textContent?.trim()||'Tugas'),items:[{label:checkbox.checked?'Tandai belum selesai':'Tandai selesai',icon:CheckCheck,disabled:checkbox.disabled,action:()=>checkbox.click()}]};
 const select=target.closest<HTMLSelectElement>('select');
 if(select)return{label:'Pilihan - '+fieldName(select),items:Array.from(select.options).map(option=>({label:option.label,icon:option.selected?Check:ChevronDown,disabled:select.disabled||option.disabled,action:()=>{select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}));}}))};
 const field=target.closest<HTMLElement>('input:not([type="checkbox"]):not([type="button"]):not([type="submit"]),textarea,[contenteditable="true"]');
 if(!field)return null;
 const native=field instanceof HTMLInputElement||field instanceof HTMLTextAreaElement?field:null;
 const canEdit=native?!native.readOnly&&!native.disabled:true;
 const start=native?.selectionStart??0,end=native?.selectionEnd??0;
 const selection=window.getSelection();const range=!native&&selection?.rangeCount&&field.contains(selection.anchorNode)?selection.getRangeAt(0).cloneRange():null;
 const selected=native?native.value.slice(start,end):range?.toString()||'';
 function restore(){field!.focus({preventScroll:true});if(native){try{native.setSelectionRange(start,end);}catch{/* Some input types do not expose a text selection. */}}else if(range){const s=window.getSelection();s?.removeAllRanges();s?.addRange(range);}}
 function replace(text:string){restore();if(document.execCommand('insertText',false,text))return;if(native){const next=native.value.slice(0,start)+text+native.value.slice(end);const proto=native instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,'value')?.set?.call(native,next);native.dispatchEvent(new Event('input',{bubbles:true}));native.setSelectionRange(start+text.length,start+text.length);}else notify('Gunakan Ctrl+V untuk menempelkan teks.');}
 const items:MenuItem[]=[];
 if(canEdit)items.push({label:'Urungkan',icon:RotateCcw,hint:'Ctrl+Z',action:()=>{restore();document.execCommand('undo');}},{label:'Ulangi',icon:RotateCw,hint:'Ctrl+Y',action:()=>{restore();document.execCommand('redo');}});
 items.push({label:'Salin',icon:Copy,hint:'Ctrl+C',separator:canEdit,disabled:!selected,action:()=>{restore();void copyText(selected,notify);}});
 if(canEdit)items.push({label:'Potong',icon:Scissors,hint:'Ctrl+X',disabled:!selected,action:()=>{void copyText(selected,notify).then(ok=>{if(ok)replace('');});}},{label:'Tempel',icon:ClipboardPaste,hint:'Ctrl+V',action:()=>{void (async()=>{try{const text=await navigator.clipboard.readText();if(text)replace(text);else notify('Clipboard kosong.');}catch{restore();notify('Izin clipboard belum tersedia. Tekan Ctrl+V untuk menempel.');}})();}});
 items.push({label:'Pilih semua',icon:TextSelect,hint:'Ctrl+A',separator:true,action:()=>{field.focus({preventScroll:true});if(native)native.select();else{const r=document.createRange();r.selectNodeContents(field);const s=window.getSelection();s?.removeAllRanges();s?.addRange(r);}}});
 return{label:'Teks - '+fieldName(field),items};
}
