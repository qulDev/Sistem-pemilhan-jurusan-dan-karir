// Daftar Jurusan Lengkap untuk Sistem Pakar

export interface Jurusan {
  id: string;
  name: string;
  description: string;
  kategori:
    | "sains"
    | "teknologi"
    | "sosial"
    | "bisnis"
    | "seni"
    | "kesehatan"
    | "pendidikan"
    | "hukum";
}

export const JURUSAN_LIST: Jurusan[] = [
  // ========================================
  // KATEGORI: TEKNOLOGI & KOMPUTER
  // ========================================
  {
    id: "teknik-informatika",
    name: "Teknik Informatika",
    description:
      "Fokus pada pengembangan software, algoritma, dan sistem komputer",
    kategori: "teknologi",
  },
  {
    id: "sistem-informasi",
    name: "Sistem Informasi",
    description: "Menggabungkan IT dengan manajemen bisnis dan analisis sistem",
    kategori: "teknologi",
  },
  {
    id: "teknik-komputer",
    name: "Teknik Komputer",
    description:
      "Fokus pada hardware, embedded systems, dan arsitektur komputer",
    kategori: "teknologi",
  },
  {
    id: "ilmu-komputer",
    name: "Ilmu Komputer",
    description: "Teori komputasi, AI, machine learning, dan riset komputer",
    kategori: "teknologi",
  },
  {
    id: "teknologi-informasi",
    name: "Teknologi Informasi",
    description: "Pengelolaan infrastruktur IT dan jaringan enterprise",
    kategori: "teknologi",
  },
  {
    id: "teknik-perangkat-lunak",
    name: "Teknik Perangkat Lunak",
    description:
      "Software engineering, metodologi pengembangan, dan quality assurance",
    kategori: "teknologi",
  },
  {
    id: "keamanan-siber",
    name: "Keamanan Siber",
    description:
      "Cybersecurity, ethical hacking, dan proteksi sistem informasi",
    kategori: "teknologi",
  },
  {
    id: "data-science",
    name: "Data Science",
    description:
      "Analisis big data, statistik, dan pengambilan keputusan berbasis data",
    kategori: "teknologi",
  },

  // ========================================
  // KATEGORI: TEKNIK & ENGINEERING
  // ========================================
  {
    id: "teknik-elektro",
    name: "Teknik Elektro",
    description: "Sistem kelistrikan, elektronika, dan telekomunikasi",
    kategori: "teknologi",
  },
  {
    id: "teknik-mesin",
    name: "Teknik Mesin",
    description: "Desain mekanik, manufaktur, dan sistem termal",
    kategori: "teknologi",
  },
  {
    id: "teknik-sipil",
    name: "Teknik Sipil",
    description: "Konstruksi, infrastruktur, dan perencanaan bangunan",
    kategori: "teknologi",
  },
  {
    id: "teknik-industri",
    name: "Teknik Industri",
    description: "Optimasi proses, manajemen operasi, dan efisiensi produksi",
    kategori: "teknologi",
  },
  {
    id: "teknik-kimia",
    name: "Teknik Kimia",
    description: "Proses kimia industri, pengolahan material, dan energi",
    kategori: "sains",
  },
  {
    id: "teknik-lingkungan",
    name: "Teknik Lingkungan",
    description: "Pengelolaan lingkungan, sustainability, dan waste management",
    kategori: "sains",
  },
  {
    id: "teknik-biomedis",
    name: "Teknik Biomedis",
    description: "Teknologi medis, peralatan kesehatan, dan biomaterial",
    kategori: "kesehatan",
  },
  {
    id: "arsitektur",
    name: "Arsitektur",
    description: "Desain bangunan, perencanaan ruang, dan estetika konstruksi",
    kategori: "seni",
  },

  // ========================================
  // KATEGORI: BISNIS & EKONOMI
  // ========================================
  {
    id: "manajemen",
    name: "Manajemen",
    description: "Pengelolaan organisasi, leadership, dan strategi bisnis",
    kategori: "bisnis",
  },
  {
    id: "akuntansi",
    name: "Akuntansi",
    description: "Pelaporan keuangan, audit, dan analisis finansial",
    kategori: "bisnis",
  },
  {
    id: "ekonomi",
    name: "Ilmu Ekonomi",
    description: "Analisis ekonomi makro/mikro, kebijakan ekonomi",
    kategori: "bisnis",
  },
  {
    id: "bisnis-digital",
    name: "Bisnis Digital",
    description: "E-commerce, digital marketing, dan startup technology",
    kategori: "bisnis",
  },
  {
    id: "keuangan",
    name: "Keuangan & Perbankan",
    description: "Investasi, perbankan, dan manajemen risiko keuangan",
    kategori: "bisnis",
  },
  {
    id: "manajemen-pemasaran",
    name: "Manajemen Pemasaran",
    description: "Marketing strategy, branding, dan consumer behavior",
    kategori: "bisnis",
  },
  {
    id: "entrepreneurship",
    name: "Kewirausahaan",
    description: "Membangun bisnis, inovasi, dan pengembangan startup",
    kategori: "bisnis",
  },
  {
    id: "manajemen-sdm",
    name: "Manajemen SDM",
    description: "Human resources, rekrutmen, dan pengembangan karyawan",
    kategori: "bisnis",
  },

  // ========================================
  // KATEGORI: SOSIAL & KOMUNIKASI
  // ========================================
  {
    id: "ilmu-komunikasi",
    name: "Ilmu Komunikasi",
    description: "Media massa, public relations, dan komunikasi digital",
    kategori: "sosial",
  },
  {
    id: "hubungan-internasional",
    name: "Hubungan Internasional",
    description: "Diplomasi, politik global, dan organisasi internasional",
    kategori: "sosial",
  },
  {
    id: "sosiologi",
    name: "Sosiologi",
    description: "Studi masyarakat, perubahan sosial, dan struktur sosial",
    kategori: "sosial",
  },
  {
    id: "psikologi",
    name: "Psikologi",
    description: "Perilaku manusia, kesehatan mental, dan konseling",
    kategori: "sosial",
  },
  {
    id: "ilmu-politik",
    name: "Ilmu Politik",
    description: "Sistem pemerintahan, kebijakan publik, dan partai politik",
    kategori: "sosial",
  },
  {
    id: "administrasi-publik",
    name: "Administrasi Publik",
    description: "Manajemen pemerintahan dan pelayanan publik",
    kategori: "sosial",
  },
  {
    id: "jurnalistik",
    name: "Jurnalistik",
    description: "Penulisan berita, investigasi, dan media journalism",
    kategori: "sosial",
  },

  // ========================================
  // KATEGORI: SENI & DESAIN
  // ========================================
  {
    id: "desain-grafis",
    name: "Desain Komunikasi Visual",
    description: "Desain grafis, branding, dan komunikasi visual",
    kategori: "seni",
  },
  {
    id: "desain-produk",
    name: "Desain Produk",
    description: "Product design, industrial design, dan prototyping",
    kategori: "seni",
  },
  {
    id: "desain-interior",
    name: "Desain Interior",
    description: "Penataan ruang dalam, furniture, dan estetika interior",
    kategori: "seni",
  },
  {
    id: "seni-rupa",
    name: "Seni Rupa",
    description: "Fine arts, lukisan, patung, dan seni kontemporer",
    kategori: "seni",
  },
  {
    id: "film-televisi",
    name: "Film & Televisi",
    description: "Produksi film, sinematografi, dan broadcasting",
    kategori: "seni",
  },
  {
    id: "musik",
    name: "Seni Musik",
    description: "Komposisi, performance, dan produksi musik",
    kategori: "seni",
  },
  {
    id: "animasi",
    name: "Animasi & Multimedia",
    description: "Animasi 2D/3D, motion graphics, dan visual effects",
    kategori: "seni",
  },
  {
    id: "fashion-design",
    name: "Desain Fashion",
    description: "Perancangan busana, textile, dan fashion industry",
    kategori: "seni",
  },

  // ========================================
  // KATEGORI: KESEHATAN & KEDOKTERAN
  // ========================================
  {
    id: "kedokteran",
    name: "Kedokteran",
    description: "Ilmu medis, diagnosis, dan pengobatan penyakit",
    kategori: "kesehatan",
  },
  {
    id: "keperawatan",
    name: "Keperawatan",
    description:
      "Perawatan pasien, asuhan keperawatan, dan kesehatan masyarakat",
    kategori: "kesehatan",
  },
  {
    id: "farmasi",
    name: "Farmasi",
    description: "Obat-obatan, formulasi, dan pharmaceutical science",
    kategori: "kesehatan",
  },
  {
    id: "kesehatan-masyarakat",
    name: "Kesehatan Masyarakat",
    description: "Epidemiologi, promosi kesehatan, dan kebijakan kesehatan",
    kategori: "kesehatan",
  },
  {
    id: "gizi",
    name: "Ilmu Gizi",
    description: "Nutrisi, diet therapy, dan food science",
    kategori: "kesehatan",
  },
  {
    id: "kedokteran-gigi",
    name: "Kedokteran Gigi",
    description: "Perawatan gigi dan mulut, ortodonti, dan dental surgery",
    kategori: "kesehatan",
  },

  // ========================================
  // KATEGORI: SAINS & MATEMATIKA
  // ========================================
  {
    id: "matematika",
    name: "Matematika",
    description: "Matematika murni, terapan, dan komputasi",
    kategori: "sains",
  },
  {
    id: "fisika",
    name: "Fisika",
    description: "Hukum alam, mekanika, dan fisika modern",
    kategori: "sains",
  },
  {
    id: "kimia",
    name: "Kimia",
    description: "Reaksi kimia, material, dan analisis laboratorium",
    kategori: "sains",
  },
  {
    id: "biologi",
    name: "Biologi",
    description: "Ilmu kehidupan, genetika, dan ekologi",
    kategori: "sains",
  },
  {
    id: "statistika",
    name: "Statistika",
    description: "Analisis data, probabilitas, dan statistical modeling",
    kategori: "sains",
  },
  {
    id: "geografi",
    name: "Geografi",
    description: "Studi bumi, GIS, dan perencanaan wilayah",
    kategori: "sains",
  },

  // ========================================
  // KATEGORI: HUKUM
  // ========================================
  {
    id: "ilmu-hukum",
    name: "Ilmu Hukum",
    description: "Sistem hukum, perundang-undangan, dan praktik hukum",
    kategori: "hukum",
  },

  // ========================================
  // KATEGORI: PENDIDIKAN
  // ========================================
  {
    id: "pendidikan-guru-sd",
    name: "Pendidikan Guru SD",
    description: "Pengajaran dan pedagogik untuk sekolah dasar",
    kategori: "pendidikan",
  },
  {
    id: "pendidikan-matematika",
    name: "Pendidikan Matematika",
    description: "Mengajar matematika di tingkat menengah dan atas",
    kategori: "pendidikan",
  },
  {
    id: "pendidikan-bahasa-inggris",
    name: "Pendidikan Bahasa Inggris",
    description: "Pengajaran bahasa Inggris dan linguistik terapan",
    kategori: "pendidikan",
  },

  // ========================================
  // KATEGORI: BAHASA & SASTRA
  // ========================================
  {
    id: "sastra-inggris",
    name: "Sastra Inggris",
    description: "Literatur, linguistik, dan kajian budaya Inggris",
    kategori: "sosial",
  },
  {
    id: "sastra-jepang",
    name: "Sastra Jepang",
    description: "Bahasa Jepang, budaya, dan hubungan Jepang-Indonesia",
    kategori: "sosial",
  },
  {
    id: "sastra-mandarin",
    name: "Sastra Mandarin",
    description: "Bahasa Mandarin, budaya Tiongkok, dan bisnis China",
    kategori: "sosial",
  },
];

export default JURUSAN_LIST;
