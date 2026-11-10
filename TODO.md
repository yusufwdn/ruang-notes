# Ruang — progres dan to-do

Ruang adalah aplikasi catatan kerja pribadi. Versi saat ini berjalan di browser dan menyimpan data di perangkat yang dipakai. Tujuan berikutnya adalah menyimpan catatan ke Google Sheets dan membuat Ruang bisa dipasang di Windows.

## Sudah dikerjakan

- [x] Buat aplikasi React, TypeScript, dan Vite dengan dashboard Hari Ini, daftar catatan, Favorit, Sampah, dan ruang kerja.
- [x] Buat, edit, cari, dan kelompokkan catatan. Tambahkan heading, format teks, daftar, kutipan, checklist, dan menu `/` di editor.
- [x] Tambahkan tugas harian, catatan cepat, daftar isi editor, dan akses ke catatan lainnya.
- [x] Rapikan kontras tema terang dan gelap, batas input, lebar area konten, serta tampilan HP dan mode fokus.
- [x] Tambahkan menu klik kanan sesuai konteks, tombol `⋯`, dan akses keyboard. Ruang kerja dan catatan tersimpan bisa dibuka di tab baru.
- [x] Tambahkan preferensi simpan otomatis atau manual untuk editor dan catatan cepat. Mode manual punya tombol simpan, `Ctrl+S`, dan pemulihan draft di tab yang sama.
- [x] Tambahkan penyimpanan lokal, sinkronisasi antar-tab pada browser yang sama, pemulihan dari Sampah, ekspor catatan HTML, dan cadangan JSON.
- [x] Verifikasi build dan alur browser, termasuk penyimpanan, pemulihan draft, tema gelap, tampilan HP, dan penggunaan beberapa tab.

## Prioritas berikutnya — Google Sheets

- [ ] Tentukan cara masuk dengan akun Google dan akses ke spreadsheet privat yang dipilih pengguna.
- [ ] Rancang struktur sheet dan ID stabil untuk catatan, ruang kerja, dan tugas. Sertakan penanda perubahan agar pembaruan dan pemulihan bisa disinkronkan.
- [ ] Buat koneksi baca/tulis dan alur migrasi catatan lokal. Uji di spreadsheet percobaan sebelum memindahkan catatan kerja.
- [ ] Hubungkan simpan otomatis dan manual ke sinkronisasi. Catatan tetap bisa dibuka saat offline, dan perubahan yang tertunda dikirim saat koneksi kembali.
- [ ] Tampilkan status sinkronisasi dan tangani perubahan dari dua perangkat, sesi Google yang habis, serta kegagalan simpan. Uji bahwa percobaan ulang tidak membuat duplikat.

## Setelah sinkronisasi

- [ ] Tambahkan impor dari cadangan JSON dan uji pemulihan ke profil browser baru.
- [ ] Siapkan Ruang sebagai PWA yang bisa dipasang di Windows. Uji buka dari Start Menu, akses offline, dan pembaruan versi.
- [ ] Uji dengan catatan kerja sungguhan dan volume data yang lebih besar. Catat bagian yang terasa lambat dan alur yang masih membingungkan.
- [ ] Otomatiskan build dan pemeriksaan alur penting sebelum merilis versi yang dipakai sehari-hari.
