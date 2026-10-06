// === Ganti nama, foto, dan isi berita di file ini ===
export const SITE = { name: 'Detik Santai', friend: 'Mahasiswa X', photo: '/foto-teman.jpg', date: '6 Oktober 2026' }
export const MENU = ['Beranda', 'Trending', 'Kampus', 'Viral', 'Hiburan']
export const TAGS = ['#RajaTelat', '#KampusViral', '#AlasanKreatif', '#AbsensiDitutup', '#TimTelat']
export const BREAKING = [
  'Absensi sudah ditutup, tapi yang ditunggu belum juga terlihat',
  `${SITE.friend} dikabarkan sedang "di jalan" sejak satu jam lalu`,
  'Panitia mempertimbangkan membuat jam mulai khusus untuk sang juara',
]
const F = SITE.friend
export const ARTICLES = [
  { id: 1, cat: 'Kampus', time: '2 jam lalu', image: SITE.photo,
    title: `${F} Dinobatkan Sebagai Raja Telat Sedunia`,
    sub: 'Prestasi unik berhasil diraih setelah konsisten menjadi orang terakhir yang hadir dalam berbagai kegiatan.',
    summary: 'Setelah melalui pengamatan panjang dari teman-temannya, mahasiswa ini berhasil mempertahankan rekor datang paling akhir dalam berbagai kegiatan kampus.',
    body: [
      'Fenomena unik terjadi di lingkungan kampus setelah seorang mahasiswa berhasil mendapatkan julukan sebagai Raja Telat Sedunia. Julukan tersebut diberikan oleh teman-temannya setelah melihat konsistensi luar biasa dalam hadir beberapa menit setelah acara dimulai.',
      'Laporan dari berbagai saksi menyebutkan bahwa mahasiswa tersebut memiliki kemampuan khusus dalam memperkirakan waktu perjalanan, meskipun hasil akhirnya sering berbeda dengan jadwal yang telah ditentukan.',
      { quote: 'Kalau dia datang tepat waktu, justru kami yang khawatir. Pasti ada sesuatu yang salah.', by: 'Teman dekat, yang meminta tidak disebut namanya karena takut ditraktir' },
      'Salah satu teman dekatnya mengatakan bahwa kedatangannya selalu menjadi momen yang paling ditunggu karena seluruh mahasiswa sudah mengetahui pola tersebut.',
      'Pengamat waktu kampus yang kami hubungi menjelaskan bahwa fenomena ini bukan sekadar kebetulan. "Ada konsistensi di sini. Setiap acara dijadwalkan pukul 08.00, dan setiap kali pula kedatangannya tercatat setelah pembukaan, sambutan, hingga foto bersama," ujarnya dengan nada kagum.',
      'Menurut keterangan sejumlah mahasiswa, alasan keterlambatan juga selalu bervariasi dan kreatif. Mulai dari "jalanan macet", "alarm tidak berbunyi", hingga "sandal sebelah hilang", seluruhnya disampaikan dengan ekspresi meyakinkan.',
      { quote: 'Kami sudah berhenti menunggu. Sekarang kami memulai acara, lalu memberi tempat duduk khusus untuk beliau.', by: 'Panitia kegiatan, sambil menyiapkan kursi kosong' },
      'Sebagai bentuk apresiasi, teman-teman sekelas menyiapkan piagam penghargaan yang rencananya diserahkan pada saat yang bersangkutan hadir. Panitia memperkirakan penyerahan akan berlangsung setelah acara bubar.',
      'Hingga berita ini diturunkan, yang bersangkutan belum bisa dimintai tanggapan karena masih dalam perjalanan. Redaksi Detik Santai menegaskan bahwa seluruh isi artikel ini adalah parodi untuk hiburan semata.',
    ] },
  { id: 2, cat: 'Viral', time: '3 jam lalu', title: 'Mahasiswa Ini Viral Karena Selalu Datang Setelah Absensi Ditutup', sub: 'Absensi pun belajar menunggu.', summary: 'Daftar hadir disebut sudah hafal dengan pola kedatangannya.', body: ['Isi artikel ini bisa kamu ganti di src/data/site.js.'] },
  { id: 3, cat: 'Kampus', time: '5 jam lalu', title: 'Dosen Kaget Melihat Alasan Telat Paling Kreatif Tahun Ini', sub: 'Alasan baru, belum pernah dipakai sebelumnya.', summary: 'Alasan tersebut dinilai layak masuk jurnal ilmiah.', body: ['Isi artikel ini bisa kamu ganti di src/data/site.js.'] },
  { id: 4, cat: 'Hiburan', time: '7 jam lalu', title: 'Teman Sekelas Beri Penghargaan Khusus', sub: 'Piagam dibuat dengan tinta yang tidak terburu-buru.', summary: 'Penghargaan diserahkan setelah acara selesai, sesuai tradisi.', body: ['Isi artikel ini bisa kamu ganti di src/data/site.js.'] },
  { id: 5, cat: 'Trending', time: '9 jam lalu', title: 'Jam Karet Resmi Diusulkan Jadi Zona Waktu Baru', sub: 'Selisihnya konsisten: 15 menit sampai tak terhingga.', summary: 'Usulan datang dari kelompok mahasiswa yang enggan disebut.', body: ['Isi artikel ini bisa kamu ganti di src/data/site.js.'] },
  { id: 6, cat: 'Viral', time: '12 jam lalu', title: 'Grup Chat Kelas Sepi, Semua Menunggu Kabar "Sudah di Depan"', sub: 'Kabar itu belum juga tiba.', summary: 'Kata "otw" tercatat dipakai 47 kali dalam sehari.', body: ['Isi artikel ini bisa kamu ganti di src/data/site.js.'] },
]
export const COMMENTS = [
  { name: 'Budi S.', text: 'Konsistensinya patut dicontoh, sayangnya bukan konsistensi yang itu.' },
  { name: 'Sari', text: 'Aku sudah selesai makan, dia baru parkir.' },
  { name: 'Anonim', text: 'Tolong bikin sekuelnya: "Raja Telat Lupa Bawa Tugas".' },
]
