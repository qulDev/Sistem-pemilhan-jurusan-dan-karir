// Knowledge Base - Basis Pengetahuan Sistem Pakar
// Berisi aturan IF-THEN dengan Certainty Factor
// Dipecah menjadi rules untuk Jurusan dan rules untuk Karier

import { Rule } from "../types";

// ========================================
// ATURAN UNTUK JURUSAN - TEKNOLOGI
// ========================================
export const jurusanTeknologiRules: Rule[] = [
  // Teknik Informatika
  {
    id: "J-TI-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "teknik-informatika" },
    cf: 0.9,
    description:
      "Minat teknologi tinggi dan matematika baik cocok untuk Teknik Informatika",
  },
  {
    id: "J-TI-2",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "jurusan", value: "teknik-informatika" },
    cf: 0.85,
    description:
      "Introvert yang suka bekerja mandiri dengan minat teknologi cocok untuk TI",
  },
  {
    id: "J-TI-3",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "sedang" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "jurusan", value: "teknik-informatika" },
    cf: 0.75,
    description:
      "Kemampuan matematika dan IPA tinggi dapat sukses di Teknik Informatika",
  },

  // Sistem Informasi
  {
    id: "J-SI-1",
    conditions: [
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "sistem-informasi" },
    cf: 0.88,
    description:
      "Kombinasi minat teknologi dan bisnis ideal untuk Sistem Informasi",
  },
  {
    id: "J-SI-2",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "sedang" },
      { fact: "kepribadian", operator: "=", value: "ambivert" },
      { fact: "preferensiKerja", operator: "=", value: "keduanya" },
    ],
    conclusion: { type: "jurusan", value: "sistem-informasi" },
    cf: 0.8,
    description: "Ambivert fleksibel dengan minat teknologi cocok untuk SI",
  },

  // Ilmu Komputer
  {
    id: "J-IK-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "jurusan", value: "ilmu-komputer" },
    cf: 0.92,
    description:
      "Minat teknologi dan sains tinggi dengan matematika kuat cocok Ilmu Komputer",
  },
  {
    id: "J-IK-2",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "jurusan", value: "ilmu-komputer" },
    cf: 0.85,
    description: "Suka eksperimen dan coding mandiri cocok Ilmu Komputer",
  },

  // Data Science
  {
    id: "J-DS-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "data-science" },
    cf: 0.9,
    description:
      "Matematika tinggi dengan minat teknologi dan sains cocok Data Science",
  },
  {
    id: "J-DS-2",
    conditions: [
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "data-science" },
    cf: 0.85,
    description:
      "Analitis dengan minat bisnis dan teknologi cocok Data Science",
  },

  // Keamanan Siber
  {
    id: "J-KS-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "keamanan-siber" },
    cf: 0.88,
    description: "Fokus dan teliti dengan minat teknologi cocok Keamanan Siber",
  },

  // Teknik Komputer
  {
    id: "J-TK-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "jurusan", value: "teknik-komputer" },
    cf: 0.88,
    description: "Suka hardware dan praktik langsung cocok Teknik Komputer",
  },

  // Teknik Elektro
  {
    id: "J-TE-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "jurusan", value: "teknik-elektro" },
    cf: 0.9,
    description: "Kemampuan sains dan matematika tinggi cocok Teknik Elektro",
  },
  {
    id: "J-TE-2",
    conditions: [
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "jurusan", value: "teknik-elektro" },
    cf: 0.85,
    description:
      "Suka praktik langsung dengan minat teknologi cocok Teknik Elektro",
  },

  // Teknik Mesin
  {
    id: "J-TM-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "jurusan", value: "teknik-mesin" },
    cf: 0.88,
    description: "Suka mekanik dan praktik hands-on cocok Teknik Mesin",
  },

  // Teknik Sipil
  {
    id: "J-TS-1",
    conditions: [
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "teknik-sipil" },
    cf: 0.85,
    description: "Matematika kuat dengan minat konstruksi cocok Teknik Sipil",
  },

  // Teknik Industri
  {
    id: "J-TIN-1",
    conditions: [
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "teknik-industri" },
    cf: 0.87,
    description: "Kombinasi teknik dan manajemen cocok Teknik Industri",
  },
];

// ========================================
// ATURAN UNTUK JURUSAN - BISNIS
// ========================================
export const jurusanBisnisRules: Rule[] = [
  // Manajemen
  {
    id: "J-MJ-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "jurusan", value: "manajemen" },
    cf: 0.9,
    description:
      "Minat bisnis tinggi dengan kepribadian sosial cocok untuk Manajemen",
  },
  {
    id: "J-MJ-2",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
      { fact: "nilaiIPS", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "manajemen" },
    cf: 0.85,
    description:
      "Suka kerja tim dengan minat bisnis dan IPS baik cocok Manajemen",
  },

  // Akuntansi
  {
    id: "J-AK-1",
    conditions: [
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "jurusan", value: "akuntansi" },
    cf: 0.88,
    description:
      "Teliti dengan matematika baik dan minat bisnis cocok untuk Akuntansi",
  },
  {
    id: "J-AK-2",
    conditions: [
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatBisnis", operator: "=", value: "sedang" },
    ],
    conclusion: { type: "jurusan", value: "akuntansi" },
    cf: 0.75,
    description: "Bekerja mandiri dengan matematika tinggi cocok Akuntansi",
  },

  // Ekonomi
  {
    id: "J-EK-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "ekonomi" },
    cf: 0.88,
    description: "IPS tinggi dengan minat bisnis cocok Ilmu Ekonomi",
  },

  // Bisnis Digital
  {
    id: "J-BD-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "bisnis-digital" },
    cf: 0.88,
    description: "Kombinasi bisnis dan teknologi cocok Bisnis Digital",
  },

  // Kewirausahaan
  {
    id: "J-KW-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "jurusan", value: "entrepreneurship" },
    cf: 0.9,
    description: "Jiwa wirausaha dengan kemandirian cocok Kewirausahaan",
  },

  // Keuangan
  {
    id: "J-KU-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "jurusan", value: "keuangan" },
    cf: 0.88,
    description:
      "Minat bisnis dengan matematika kuat cocok Keuangan & Perbankan",
  },

  // Manajemen Pemasaran
  {
    id: "J-MP-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "manajemen-pemasaran" },
    cf: 0.88,
    description:
      "Kreatif dan komunikatif dengan minat bisnis cocok Manajemen Pemasaran",
  },

  // Manajemen SDM
  {
    id: "J-SDM-1",
    conditions: [
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "jurusan", value: "manajemen-sdm" },
    cf: 0.85,
    description: "Suka berinteraksi dengan orang cocok Manajemen SDM",
  },
];

// ========================================
// ATURAN UNTUK JURUSAN - SOSIAL & KOMUNIKASI
// ========================================
export const jurusanSosialRules: Rule[] = [
  // Ilmu Komunikasi
  {
    id: "J-KOM-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "jurusan", value: "ilmu-komunikasi" },
    cf: 0.9,
    description: "Extrovert dengan kemampuan bahasa baik cocok Ilmu Komunikasi",
  },
  {
    id: "J-KOM-2",
    conditions: [
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
    ],
    conclusion: { type: "jurusan", value: "ilmu-komunikasi" },
    cf: 0.8,
    description: "Kreatif dan sosial cocok untuk Ilmu Komunikasi",
  },

  // Psikologi
  {
    id: "J-PSI-1",
    conditions: [
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
      { fact: "preferensiKerja", operator: "in", value: ["tim", "keduanya"] },
    ],
    conclusion: { type: "jurusan", value: "psikologi" },
    cf: 0.85,
    description: "Minat sains dengan kemampuan sosial cocok untuk Psikologi",
  },
  {
    id: "J-PSI-2",
    conditions: [
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "gayaBelajar", operator: "=", value: "auditori" },
    ],
    conclusion: { type: "jurusan", value: "psikologi" },
    cf: 0.78,
    description: "IPS tinggi dengan kemampuan mendengar baik cocok Psikologi",
  },

  // Hubungan Internasional
  {
    id: "J-HI-1",
    conditions: [
      { fact: "nilaiBahasaInggris", operator: "=", value: "tinggi" },
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "jurusan", value: "hubungan-internasional" },
    cf: 0.9,
    description: "Bahasa Inggris dan IPS tinggi cocok Hubungan Internasional",
  },

  // Jurnalistik
  {
    id: "J-JUR-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "jurnalistik" },
    cf: 0.88,
    description: "Komunikatif dan suka menulis cocok Jurnalistik",
  },

  // Sosiologi
  {
    id: "J-SOS-1",
    conditions: [
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["ambivert", "extrovert"] },
    ],
    conclusion: { type: "jurusan", value: "sosiologi" },
    cf: 0.85,
    description: "IPS tinggi dengan minat memahami masyarakat cocok Sosiologi",
  },

  // Ilmu Politik
  {
    id: "J-POL-1",
    conditions: [
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "jurusan", value: "ilmu-politik" },
    cf: 0.85,
    description: "IPS tinggi dengan jiwa kepemimpinan cocok Ilmu Politik",
  },

  // Administrasi Publik
  {
    id: "J-AP-1",
    conditions: [
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiIPS", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "jurusan", value: "administrasi-publik" },
    cf: 0.82,
    description:
      "Minat pelayanan publik dan manajemen cocok Administrasi Publik",
  },
];

// ========================================
// ATURAN UNTUK JURUSAN - SENI & DESAIN
// ========================================
export const jurusanSeniRules: Rule[] = [
  // Desain Grafis
  {
    id: "J-DG-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "jurusan", value: "desain-grafis" },
    cf: 0.92,
    description:
      "Minat seni tinggi dengan gaya visual cocok untuk Desain Grafis",
  },
  {
    id: "J-DG-2",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "desain-grafis" },
    cf: 0.85,
    description: "Kombinasi seni dan teknologi ideal untuk Desain Grafis",
  },

  // Desain Produk
  {
    id: "J-DP-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "desain-produk" },
    cf: 0.88,
    description: "Kreatif dengan kemampuan teknis cocok Desain Produk",
  },

  // Desain Interior
  {
    id: "J-DI-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
      { fact: "minatTeknologi", operator: "in", value: ["sedang", "rendah"] },
    ],
    conclusion: { type: "jurusan", value: "desain-interior" },
    cf: 0.85,
    description: "Visual dengan minat ruang dan estetika cocok Desain Interior",
  },

  // Arsitektur
  {
    id: "J-ARS-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "jurusan", value: "arsitektur" },
    cf: 0.9,
    description:
      "Kombinasi seni dan teknik dengan visual kuat cocok Arsitektur",
  },

  // Animasi
  {
    id: "J-ANI-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "jurusan", value: "animasi" },
    cf: 0.9,
    description: "Kreatif visual dengan minat teknologi cocok Animasi",
  },

  // Film & Televisi
  {
    id: "J-FILM-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "jurusan", value: "film-televisi" },
    cf: 0.88,
    description: "Kreatif dengan kemampuan kolaborasi cocok Film & Televisi",
  },

  // Fashion Design
  {
    id: "J-FAS-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "jurusan", value: "fashion-design" },
    cf: 0.88,
    description: "Kreatif dengan sense of style cocok Desain Fashion",
  },

  // Seni Rupa
  {
    id: "J-SR-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "jurusan", value: "seni-rupa" },
    cf: 0.88,
    description: "Ekspresi artistik mandiri cocok Seni Rupa",
  },

  // Musik
  {
    id: "J-MUS-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "auditori" },
    ],
    conclusion: { type: "jurusan", value: "musik" },
    cf: 0.9,
    description: "Belajar dengan pendengaran dan minat seni cocok Seni Musik",
  },
];

// ========================================
// ATURAN UNTUK JURUSAN - KESEHATAN
// ========================================
export const jurusanKesehatanRules: Rule[] = [
  // Kedokteran
  {
    id: "J-KED-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["ambivert", "extrovert"] },
    ],
    conclusion: { type: "jurusan", value: "kedokteran" },
    cf: 0.92,
    description: "IPA tinggi dengan minat sains dan empati cocok Kedokteran",
  },

  // Keperawatan
  {
    id: "J-PER-1",
    conditions: [
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "jurusan", value: "keperawatan" },
    cf: 0.88,
    description: "Peduli dan suka menolong cocok Keperawatan",
  },

  // Farmasi
  {
    id: "J-FAR-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "jurusan", value: "farmasi" },
    cf: 0.88,
    description: "Teliti dengan minat sains tinggi cocok Farmasi",
  },

  // Kesehatan Masyarakat
  {
    id: "J-KM-1",
    conditions: [
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "nilaiIPS", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "kesehatan-masyarakat" },
    cf: 0.85,
    description: "Peduli kesehatan komunitas cocok Kesehatan Masyarakat",
  },

  // Gizi
  {
    id: "J-GIZ-1",
    conditions: [
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "gizi" },
    cf: 0.82,
    description: "Minat sains dengan fokus nutrisi cocok Ilmu Gizi",
  },

  // Kedokteran Gigi
  {
    id: "J-KG-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "jurusan", value: "kedokteran-gigi" },
    cf: 0.88,
    description: "IPA tinggi dengan keterampilan tangan cocok Kedokteran Gigi",
  },

  // Teknik Biomedis
  {
    id: "J-BIO-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "jurusan", value: "teknik-biomedis" },
    cf: 0.88,
    description: "Kombinasi teknologi dan kesehatan cocok Teknik Biomedis",
  },
];

// ========================================
// ATURAN UNTUK JURUSAN - SAINS
// ========================================
export const jurusanSainsRules: Rule[] = [
  // Matematika
  {
    id: "J-MAT-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "jurusan", value: "matematika" },
    cf: 0.9,
    description: "Matematika tinggi dengan minat riset cocok Matematika",
  },

  // Fisika
  {
    id: "J-FIS-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "jurusan", value: "fisika" },
    cf: 0.9,
    description: "IPA dan Matematika tinggi dengan minat sains cocok Fisika",
  },

  // Kimia
  {
    id: "J-KIM-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "jurusan", value: "kimia" },
    cf: 0.88,
    description: "Suka eksperimen lab dengan IPA tinggi cocok Kimia",
  },

  // Biologi
  {
    id: "J-BIO-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "jurusan", value: "biologi" },
    cf: 0.88,
    description: "Minat makhluk hidup dan sains cocok Biologi",
  },

  // Statistika
  {
    id: "J-STAT-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "statistika" },
    cf: 0.88,
    description: "Matematika kuat dengan minat analisis data cocok Statistika",
  },

  // Geografi
  {
    id: "J-GEO-1",
    conditions: [
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "geografi" },
    cf: 0.82,
    description: "IPS tinggi dengan minat lingkungan cocok Geografi",
  },

  // Teknik Lingkungan
  {
    id: "J-TL-1",
    conditions: [
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatSains", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "jurusan", value: "teknik-lingkungan" },
    cf: 0.85,
    description:
      "Peduli lingkungan dengan kemampuan sains cocok Teknik Lingkungan",
  },

  // Teknik Kimia
  {
    id: "J-TKI-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "teknik-kimia" },
    cf: 0.88,
    description: "IPA tinggi dengan minat industri cocok Teknik Kimia",
  },
];

// ========================================
// ATURAN UNTUK JURUSAN - HUKUM & PENDIDIKAN
// ========================================
export const jurusanLainRules: Rule[] = [
  // Ilmu Hukum
  {
    id: "J-HUK-1",
    conditions: [
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "jurusan", value: "ilmu-hukum" },
    cf: 0.88,
    description: "IPS tinggi dengan kemampuan argumentasi cocok Ilmu Hukum",
  },

  // Pendidikan Guru SD
  {
    id: "J-PGSD-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
      { fact: "gayaBelajar", operator: "in", value: ["visual", "auditori"] },
    ],
    conclusion: { type: "jurusan", value: "pendidikan-guru-sd" },
    cf: 0.85,
    description: "Sabar dan suka mengajar cocok Pendidikan Guru SD",
  },

  // Pendidikan Matematika
  {
    id: "J-PMAT-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "jurusan", value: "pendidikan-matematika" },
    cf: 0.85,
    description:
      "Matematika tinggi dengan jiwa mengajar cocok Pendidikan Matematika",
  },

  // Pendidikan Bahasa Inggris
  {
    id: "J-PBING-1",
    conditions: [
      { fact: "nilaiBahasaInggris", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "jurusan", value: "pendidikan-bahasa-inggris" },
    cf: 0.85,
    description:
      "Bahasa Inggris tinggi dengan jiwa mengajar cocok Pendidikan Bahasa Inggris",
  },

  // Sastra Inggris
  {
    id: "J-SING-1",
    conditions: [
      { fact: "nilaiBahasaInggris", operator: "=", value: "tinggi" },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "sastra-inggris" },
    cf: 0.85,
    description:
      "Bahasa Inggris tinggi dengan minat literatur cocok Sastra Inggris",
  },

  // Sastra Jepang
  {
    id: "J-SJPN-1",
    conditions: [
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "sastra-jepang" },
    cf: 0.8,
    description: "Minat bahasa asing dan budaya Jepang cocok Sastra Jepang",
  },

  // Sastra Mandarin
  {
    id: "J-SMAN-1",
    conditions: [
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "jurusan", value: "sastra-mandarin" },
    cf: 0.8,
    description:
      "Minat bahasa asing dan bisnis internasional cocok Sastra Mandarin",
  },
];

const allJurusanRules = [
  ...jurusanTeknologiRules,
  ...jurusanBisnisRules,
  ...jurusanSosialRules,
  ...jurusanSeniRules,
  ...jurusanKesehatanRules,
  ...jurusanSainsRules,
  ...jurusanLainRules,
];

export default allJurusanRules;
