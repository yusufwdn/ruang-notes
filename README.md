# Ruang

UI aplikasi catatan kerja personal. React + TypeScript + Vite, tanpa backend dan tanpa font eksternal.

Lihat [progres dan to-do](TODO.md) untuk status fitur dan pekerjaan berikutnya.

## Jalankan

Butuh Node.js 22.12+ atau 24 dan npm.

```sh
npm install
npm run dev
```

Buka alamat yang dicetak Vite. Untuk build: `npm run build`. Untuk preview build: `npm run preview`.

## Yang bisa dicoba

- Dashboard fokus harian, checklist, dan tangkap ide cepat.
- Preferensi pengguna untuk memilih simpan otomatis (default) atau manual. Otomatis tidak menampilkan tombol create/update; manual menyediakan Buat Catatan / Simpan Perubahan dan Ctrl+S. Berlaku untuk editor dan catatan cepat.
- Draft manual terpisah dari catatan final, tersedia kembali saat pindah halaman atau refresh, dan ditampilkan di rak Draft di tab ini. Mengaktifkan otomatis dengan draft tertunda meminta konfirmasi untuk menyimpan semuanya.
- Area konten lebih lebar; editor memiliki panel ringkasan, daftar isi heading, catatan lain, serta pengingat singkat.
- Buat/edit catatan dengan heading, bold, italic, bullet, checklist, kutipan, serta menu `/` di baris kosong.
- Pencarian judul dan isi (`Ctrl+K`), favorit, ruang kerja, kartu/daftar, pengurutan.
- Mode fokus, tema terang/gelap, hapus/urungkan/pulihkan, ekspor catatan HTML dan cadangan JSON.
- Menu klik kanan custom di seluruh area aplikasi, termasuk navigasi, ruang kerja, catatan, tugas, tombol, editor, dan dialog. Judul konsisten seperti `Ruang Kerja - Pekerjaan` dan `Halaman - Hari Ini`. Tombol `⋯` tetap tersedia pada item navigasi/catatan/tugas. Keyboard: `Shift+F10`, panah, Home/End, Enter, Esc.
- Kolom teks menyediakan Urungkan, Ulangi, Salin, Potong, Tempel, dan Pilih semua. Clipboard mengikuti izin browser; bila akses ditolak, teks dipertahankan dan aplikasi menampilkan petunjuk shortcut. Dropdown memiliki pilihan nilai yang sesuai saat diklik kanan.
- Buka ruang kerja/catatan di tab baru dengan URL langsung, riwayat navigasi, serta sinkronisasi antar-tab pada browser dan origin yang sama. Penghapusan ruang kerja mempertahankan catatan di Semua catatan; tersedia Urungkan.
- Layout responsif dan dialog yang dapat diakses lewat keyboard.

## Batas versi UI

Catatan final disimpan di localStorage pada browser dan origin yang dipakai, mengikuti mode penyimpanan yang dipilih. Draft pemulihan manual berada di sessionStorage per tab dan belum mengubah catatan final; tab baru membuka versi final. Recovery draft mengikuti umur session browser dan bukan cadangan permanen. Preferensi berlaku di browser yang sama. Contoh catatan hanya dibuat ketika belum ada data. Google Sheets dan login Google belum dihubungkan. Ini belum merupakan PWA dan belum mendukung sinkronisasi antarperangkat. Unduh cadangan JSON sebelum membersihkan data browser. Impor cadangan belum tersedia. Perubahan dari beberapa tab digabungkan per catatan/tugas; konflik pada field yang sama mengikuti perubahan terakhir. Ini belum merupakan editor kolaborasi bersamaan.

Editor memakai contentEditable browser untuk prototipe ringan, dengan sanitasi DOMPurify dan paste teks biasa. Untuk pengembangan editor blok lebih jauh, adapter editor dapat diganti ke Tiptap/Lexical tanpa mengubah model catatan. Lampiran dan kolaborasi belum masuk lingkup versi ini.

## Verifikasi

Mode simpan dan layout diverifikasi dengan 23 skenario browser, termasuk migrasi data lama, create/update manual, Ctrl+S, pemulihan draft, kegagalan simpan, pergantian mode atomik, tab baru, dan mobile gelap.

Build TypeScript dan Vite; pengecekan browser desktop/mobile untuk tambah/edit/persistensi, pencarian, checklist, favorit, ruang kerja, sampah/pulihkan, ekspor, tema, dan overflow. Menu global diverifikasi dengan 28 skenario browser, termasuk 13 area layar, navigasi/tab baru, penyuntingan teks, clipboard ditolak, keyboard, dialog, dan tampilan mobile.
