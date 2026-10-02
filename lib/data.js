// Konten terpusat Beranda — cari rumah lewat kawasan dan suasananya (fiktif).
// Listing, agen, dan harga adalah contoh purwarupa desain. Panduan kawasan berisi
// gambaran umum dan perkiraan waktu tempuh, bukan survei resmi.

export const site = {
  name: 'Beranda',
  tagline: 'Pilih kawasannya dulu, rumahnya kemudian',
  email: 'halo@beranda.example',
  jam: 'Senin–Sabtu, 08.00–17.00 WIB',
  url: 'https://properti-beranda.vercel.app',
  survei: { judul: 'Ajak kami lihat bareng', catatan: 'Alamat lengkap dikirim setelah jadwal dikonfirmasi.' },
  katalog: { judul: 'Rumah, kamar, dan kebun', sub: 'Setiap listing punya panduan kawasannya sendiri — buka dari halaman detail.' },
  kontak: { judul: 'Ceritakan rumah yang kamu cari', sub: 'Siapa yang akan tinggal, butuh dekat dengan apa, dan suasana seperti apa. Kami bantu mencocokkan kawasannya.' },
};

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Properti', href: '/properti' },
  { label: 'Kawasan', href: '/kawasan' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
];

export function formatHarga(n) {
  if (n >= 1e9) return 'Rp ' + (n / 1e9).toLocaleString('id-ID', { maximumFractionDigits: 2 }) + ' M';
  if (n >= 1e6) return 'Rp ' + (n / 1e6).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' Jt';
  return 'Rp ' + n.toLocaleString('id-ID');
}
export const hargaLabel = (p) => formatHarga(p.harga) + (p.status === 'Disewakan' ? `/${p.periode === 'tahun' ? 'thn' : 'bln'}` : '');

const agen = {
  dewi: { nama: 'Dewi Larasati', kode: 'BR-02', wilayah: 'Yogyakarta' },
  andre: { nama: 'Andre Saputra', kode: 'BR-05', wilayah: 'Depok & Bandung' },
  komang: { nama: 'Komang Ayu', kode: 'BR-09', wilayah: 'Bali' },
};
const f = (n) => `/images/properti/${n}.webp`;

export const kawasan = [
  {
    slug: 'kotabaru-yogyakarta', nama: 'Kotabaru', kota: 'Yogyakarta', foto: f('ruang-teras-kayu'),
    ringkas: 'Kawasan cagar budaya dengan jalan rindang dan rumah-rumah lama berhalaman luas, di tengah kota.',
    suasana: ['Tenang', 'Rindang', 'Dekat kampus'],
    cocok: ['Keluarga', 'Mahasiswa'],
    jarak: [['Kampus di utara kota', '10–15 menit'], ['Malioboro', '10 menit'], ['Stasiun Yogyakarta', '10 menit'], ['Bandara YIA', '±1 jam']],
    catatan: ['Banyak bangunan berstatus cagar budaya — renovasi fasad perlu izin.', 'Jalan utama ramai saat ada acara di stadion.'],
  },
  {
    slug: 'cinere-depok', nama: 'Cinere', kota: 'Depok', foto: f('rumah-dua-lantai'),
    ringkas: 'Perumahan mapan di perbatasan Jakarta Selatan, dengan banyak sekolah dan akses tol ke pusat kota.',
    suasana: ['Ramah anak', 'Banyak sekolah', 'Akses tol'],
    cocok: ['Keluarga'],
    jarak: [['Gerbang tol terdekat', '5–10 menit'], ['Jakarta Selatan (Blok M)', '35–60 menit'], ['Stasiun KRL terdekat', '20–30 menit'], ['Pusat belanja', '5 menit']],
    catatan: ['Jalan utama padat di jam berangkat dan pulang sekolah.', 'KRL tidak sampai ke Cinere — perlu kendaraan ke stasiun.'],
  },
  {
    slug: 'sanur-denpasar', nama: 'Sanur', kota: 'Denpasar', foto: f('teras-tropis'),
    ringkas: 'Pesisir timur Bali yang ombaknya tenang, dengan jalur pejalan kaki di tepi pantai dan ritme yang lebih pelan.',
    suasana: ['Tenang', 'Dekat pantai', 'Ritme pelan'],
    cocok: ['Pensiun', 'Keluarga'],
    jarak: [['Pantai', '5–10 menit jalan kaki'], ['Bandara Ngurah Rai', '25–40 menit'], ['Pusat kota Denpasar', '15–20 menit'], ['Ubud', '±1 jam']],
    catatan: ['Lalu lintas ke bandara bisa lama di musim liburan.', 'Udara lembap — perhatikan ventilasi dan perawatan kayu.'],
  },
  {
    slug: 'lembang-bandung-barat', nama: 'Lembang', kota: 'Bandung Barat', foto: f('rumah-satu-lantai'),
    ringkas: 'Dataran tinggi di utara Bandung: udara sejuk, kebun sayur, dan kabut pagi.',
    suasana: ['Sejuk', 'Berkebun', 'Halaman luas'],
    cocok: ['Pensiun', 'Keluarga'],
    jarak: [['Pusat kota Bandung', '30–60 menit'], ['Pasar dan kebutuhan harian', '10 menit'], ['Stasiun Bandung', '45–75 menit'], ['Rumah sakit besar di kota', '30–45 menit']],
    catatan: ['Akhir pekan dan libur panjang macet oleh arus wisata.', 'Malam bisa di bawah 18°C — air panas dan jaket wajib.'],
  },
];
export const getKawasan = (slug) => kawasan.find((k) => k.slug === slug);

export const properti = [
  {
    id: 1, judul: 'Rumah lama berhalaman luas di Kotabaru', jenisProperti: 'Rumah', status: 'Dijual', harga: 6200000000, featured: true, kawasan: 'kotabaru-yogyakarta',
    suasana: ['Tenang', 'Halaman luas', 'Keluarga'],
    spesifikasi: { luasTanah: 480, luasBangunan: 260, kamarTidur: 4, kamarMandi: 2, jumlahLantai: 1 },
    lokasi: { alamat: 'Kawasan Kotabaru', kota: 'Yogyakarta', kecamatan: 'Gondokusuman' },
    agen: agen.dewi, media: { foto: [f('ruang-teras-kayu'), f('ruang-tamu-terang'), f('kamar-hangat')], video: null },
    sertifikat: 'SHM', tahun: 1958,
    deskripsi: 'Rumah satu lantai dengan langit-langit tinggi dan teras depan yang lebar. Struktur asli masih kokoh; dapur dan kamar mandi sudah diperbarui pada 2019.',
    fasilitas: ['Langit-langit tinggi', 'Teras depan lebar', 'Halaman 200 m²', 'Carport 2 mobil', 'Sumur + PAM'],
  },
  {
    id: 2, judul: 'Kamar kost putri dekat kampus di Kotabaru', jenisProperti: 'Kost', status: 'Disewakan', harga: 1800000, periode: 'bulan', featured: true, kawasan: 'kotabaru-yogyakarta',
    suasana: ['Dekat kampus', 'Aman', 'Mahasiswa'],
    spesifikasi: { luasTanah: 0, luasBangunan: 14, kamarTidur: 1, kamarMandi: 1, jumlahLantai: 1 },
    lokasi: { alamat: 'Kawasan Kotabaru', kota: 'Yogyakarta', kecamatan: 'Gondokusuman' },
    agen: agen.dewi, media: { foto: [f('kamar-kost'), f('kamar-studio')], video: null },
    sertifikat: '-', tahun: 2018,
    deskripsi: 'Kost putri dua belas kamar dengan ibu kost yang tinggal di bangunan depan. Jam malam pukul 22.00; dapur bersama dan ruang belajar di lantai bawah.',
    fasilitas: ['Kamar mandi dalam', 'Wi-Fi', 'Ruang belajar', 'Dapur bersama', 'Pengelola tinggal di lokasi'],
  },
  {
    id: 3, judul: 'Rumah tiga kamar dekat sekolah di Cinere', jenisProperti: 'Rumah', status: 'Dijual', harga: 2650000000, featured: false, kawasan: 'cinere-depok',
    suasana: ['Ramah anak', 'Dekat sekolah', 'Keluarga'],
    spesifikasi: { luasTanah: 160, luasBangunan: 150, kamarTidur: 3, kamarMandi: 2, jumlahLantai: 2 },
    lokasi: { alamat: 'Kawasan perumahan Cinere', kota: 'Depok', kecamatan: 'Cinere' },
    agen: agen.andre, media: { foto: [f('rumah-dua-lantai'), f('ruang-tamu-sofa'), f('dapur-terang')], video: null },
    sertifikat: 'SHM', tahun: 2008,
    deskripsi: 'Di jalan buntu yang aman untuk anak bersepeda. Tiga sekolah dasar bisa dicapai jalan kaki; ruang keluarga menyatu dengan dapur.',
    fasilitas: ['Jalan buntu', 'Garasi 1 mobil', 'Taman kecil', 'Listrik 3.500 W', 'Dekat sekolah'],
  },
  {
    id: 4, judul: 'Rumah sewa tahunan dengan taman di Cinere', jenisProperti: 'Rumah', status: 'Disewakan', harga: 72000000, periode: 'tahun', featured: false, kawasan: 'cinere-depok',
    suasana: ['Ramah anak', 'Taman', 'Keluarga'],
    spesifikasi: { luasTanah: 200, luasBangunan: 140, kamarTidur: 3, kamarMandi: 2, jumlahLantai: 1 },
    lokasi: { alamat: 'Kawasan perumahan Cinere', kota: 'Depok', kecamatan: 'Cinere' },
    agen: agen.andre, media: { foto: [f('rumah-modern'), f('kamar-kota')], video: null },
    sertifikat: 'SHM', tahun: 2011,
    deskripsi: 'Rumah satu lantai untuk keluarga yang sedang menabung sebelum membeli. Kontrak minimal dua tahun; pemilik terbuka untuk hewan peliharaan.',
    fasilitas: ['Boleh hewan peliharaan', 'Taman belakang', 'Carport', 'Semi furnished', 'Air PAM'],
  },
  {
    id: 5, judul: 'Rumah tanpa tangga lima menit ke pantai Sanur', jenisProperti: 'Rumah', status: 'Dijual', harga: 4800000000, featured: true, kawasan: 'sanur-denpasar',
    suasana: ['Tanpa tangga', 'Dekat pantai', 'Pensiun'],
    spesifikasi: { luasTanah: 300, luasBangunan: 170, kamarTidur: 2, kamarMandi: 2, jumlahLantai: 1 },
    lokasi: { alamat: 'Kawasan Sanur', kota: 'Denpasar', kecamatan: 'Denpasar Selatan' },
    agen: agen.komang, media: { foto: [f('teras-tropis'), f('ruang-teras-kayu'), f('kamar-hangat')], video: null },
    sertifikat: 'SHM', tahun: 2015,
    deskripsi: 'Semua ruang di satu lantai, pintu lebar, dan kamar mandi dengan pegangan. Teras menghadap kebun kamboja; pantai bisa dicapai jalan kaki.',
    fasilitas: ['Tanpa tangga', 'Pegangan di kamar mandi', 'Pintu lebar', 'Kebun', 'Kolam kecil'],
  },
  {
    id: 6, judul: 'Villa kecil sewa bulanan di Sanur', jenisProperti: 'Villa', status: 'Disewakan', harga: 22000000, periode: 'bulan', featured: false, kawasan: 'sanur-denpasar',
    suasana: ['Tenang', 'Dekat pantai', 'Pensiun'],
    spesifikasi: { luasTanah: 220, luasBangunan: 110, kamarTidur: 2, kamarMandi: 2, jumlahLantai: 1 },
    lokasi: { alamat: 'Kawasan Sanur', kota: 'Denpasar', kecamatan: 'Denpasar Selatan' },
    agen: agen.komang, media: { foto: [f('teras-kolam'), f('kamar-studio')], video: null },
    sertifikat: 'SHM', tahun: 2017,
    deskripsi: 'Untuk mencoba tinggal di Bali beberapa bulan sebelum memutuskan pindah. Kebersihan dua kali seminggu dan internet sudah termasuk.',
    fasilitas: ['Furnished', 'Kolam kecil', 'Kebersihan 2× seminggu', 'Internet', 'Sewa minimal 3 bulan'],
  },
  {
    id: 7, judul: 'Rumah satu lantai dengan kebun sayur di Lembang', jenisProperti: 'Rumah', status: 'Dijual', harga: 2100000000, featured: false, kawasan: 'lembang-bandung-barat',
    suasana: ['Sejuk', 'Berkebun', 'Pensiun'],
    spesifikasi: { luasTanah: 600, luasBangunan: 150, kamarTidur: 3, kamarMandi: 2, jumlahLantai: 1 },
    lokasi: { alamat: 'Kawasan Lembang', kota: 'Bandung Barat', kecamatan: 'Lembang' },
    agen: agen.andre, media: { foto: [f('rumah-satu-lantai'), f('dapur-terang'), f('kamar-hangat')], video: null },
    sertifikat: 'SHM', tahun: 2013,
    deskripsi: 'Kebun 350 m² yang sudah ditanami sayur dan pohon jeruk. Pemanas air tenaga surya dan perapian kecil di ruang keluarga.',
    fasilitas: ['Kebun 350 m²', 'Pemanas air surya', 'Perapian', 'Tanpa tangga', 'Carport 2 mobil'],
  },
  {
    id: 8, judul: 'Tanah kebun berkontur di Lembang', jenisProperti: 'Tanah', status: 'Dijual', harga: 1450000000, featured: false, kawasan: 'lembang-bandung-barat',
    suasana: ['Sejuk', 'Pemandangan', 'Berkebun'],
    spesifikasi: { luasTanah: 1000, luasBangunan: 0, kamarTidur: 0, kamarMandi: 0, jumlahLantai: 0 },
    lokasi: { alamat: 'Kawasan Lembang', kota: 'Bandung Barat', kecamatan: 'Lembang' },
    agen: agen.andre, media: { foto: [f('lahan')], video: null },
    sertifikat: 'SHM', tahun: null,
    deskripsi: 'Tanah bertingkat menghadap ke selatan dengan pemandangan lembah. Sebagian sudah ditanami kopi; akses mobil sampai batas tanah.',
    fasilitas: ['Akses mobil', 'Pemandangan lembah', 'Sebagian ditanami kopi', 'Listrik tersedia'],
  },
];

export const jenisList = ['Semua', ...Array.from(new Set(properti.map((p) => p.jenisProperti)))];
export const statusList = ['Semua', 'Dijual', 'Disewakan'];
export const kotaList = ['Semua', ...Array.from(new Set(properti.map((p) => p.lokasi.kota)))];
export const hargaFilter = [
  { v: 'j3', label: 'Beli di bawah Rp 3 M', status: 'Dijual', max: 3e9 },
  { v: 'j9', label: 'Beli Rp 3 M ke atas', status: 'Dijual', min: 3e9 },
  { v: 's5', label: 'Sewa di bawah Rp 5 Jt/bln', status: 'Disewakan', max: 5e6, perBulan: true },
  { v: 's9', label: 'Sewa Rp 5 Jt/bln ke atas', status: 'Disewakan', min: 5e6, perBulan: true },
];

const IKON = { Rumah: 'Home', Apartemen: 'Building2', Villa: 'Palmtree', Tanah: 'Trees', Kost: 'BedDouble' };
export const kategori = jenisList.slice(1).map((j) => ({ jenis: j, icon: IKON[j] || 'Home' }));

export const stats = [
  { value: String(properti.length), label: 'Listing' },
  { value: String(kawasan.length), label: 'Panduan kawasan' },
  { value: String(new Set(properti.map((p) => p.lokasi.kota)).size), label: 'Kota' },
  { value: String(new Set(properti.map((p) => p.agen.kode)).size), label: 'Agen' },
];

export const faqs = [
  { q: 'Dari mana angka waktu tempuh di panduan kawasan?', a: 'Perkiraan kami untuk perjalanan mobil di luar jam sibuk. Cek ulang dengan aplikasi peta pada jam kamu biasa berangkat.' },
  { q: 'Bisa minta dicarikan di kawasan yang belum ada panduannya?', a: 'Bisa. Tulis di halaman Kontak siapa yang akan tinggal dan apa yang perlu dekat.' },
  { q: 'Apakah ada biaya untuk pembeli atau penyewa?', a: 'Tidak. Komisi dibayar pemilik setelah transaksi selesai.' },
];

export const tentang = {
  judul: 'Rumah yang tepat di kawasan yang salah tetap terasa salah',
  subjudul: 'Kawasan dulu, rumah kemudian',
  cerita: [
    'Beranda mulai dari pertanyaan sederhana: siapa yang akan tinggal, dan mereka perlu dekat dengan apa? Keluarga dengan anak sekolah, mahasiswa, dan pensiunan mencari hal yang sangat berbeda.',
    'Karena itu setiap listing terhubung ke panduan kawasannya — suasana, waktu tempuh, kisaran harga, dan hal-hal yang biasanya baru ketahuan setelah pindah.',
  ],
  foto: f('ruang-tamu-terang'),
  nilai: [
    ['Jujur soal kawasan', 'Panduan kami menulis kekurangannya juga: macet, lembap, atau aturan renovasi.'],
    ['Untuk tahap hidup', 'Tanpa tangga untuk pensiunan, jalan buntu untuk anak, dekat kampus untuk mahasiswa.'],
    ['Lihat bareng', 'Agen menemani survei — dan mengajak keliling kawasan, bukan cuma rumahnya.'],
  ],
  cta: 'Mulai dari kawasan yang kamu suka',
};

export const halamanEkstra = ['/kawasan', ...kawasan.map((k) => `/kawasan/${k.slug}`)].filter((h) => !nav.some((n) => n.href === h));
export const tautanDetail = (p) => {
  const k = getKawasan(p.kawasan);
  return k ? { label: `Kenali kawasan ${k.nama}`, sub: 'Suasana, waktu tempuh, kisaran harga', href: `/kawasan/${k.slug}` } : null;
};

export const getProperti = (id) => properti.find((p) => String(p.id) === String(id));
export const propertiSerupa = (item, n = 3) =>
  [...properti.filter((p) => p.id !== item.id && p.kawasan === item.kawasan), ...properti.filter((p) => p.id !== item.id && p.kawasan !== item.kawasan && p.suasana.some((s) => item.suasana.includes(s)))].slice(0, n);
