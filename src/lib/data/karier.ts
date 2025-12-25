// Daftar Karier Lengkap untuk Sistem Pakar

export interface Karier {
  id: string;
  name: string;
  description: string;
  kategori:
    | "teknologi"
    | "bisnis"
    | "kreatif"
    | "kesehatan"
    | "pendidikan"
    | "hukum"
    | "media"
    | "engineering"
    | "sains"
    | "sosial";
  jurusanTerkait: string[]; // ID jurusan yang relevan
}

export const KARIER_LIST: Karier[] = [
  // ========================================
  // KATEGORI: TEKNOLOGI & IT
  // ========================================
  {
    id: "backend-developer",
    name: "Backend Developer",
    description: "Mengembangkan server, API, dan database untuk aplikasi",
    kategori: "teknologi",
    jurusanTerkait: [
      "teknik-informatika",
      "ilmu-komputer",
      "teknik-perangkat-lunak",
    ],
  },
  {
    id: "frontend-developer",
    name: "Frontend Developer",
    description: "Membangun antarmuka pengguna dan pengalaman web/mobile",
    kategori: "teknologi",
    jurusanTerkait: ["teknik-informatika", "sistem-informasi", "desain-grafis"],
  },
  {
    id: "fullstack-developer",
    name: "Fullstack Developer",
    description:
      "Menguasai pengembangan frontend dan backend secara menyeluruh",
    kategori: "teknologi",
    jurusanTerkait: [
      "teknik-informatika",
      "ilmu-komputer",
      "teknik-perangkat-lunak",
    ],
  },
  {
    id: "mobile-developer",
    name: "Mobile Developer",
    description: "Mengembangkan aplikasi untuk iOS dan Android",
    kategori: "teknologi",
    jurusanTerkait: ["teknik-informatika", "sistem-informasi", "ilmu-komputer"],
  },
  {
    id: "devops-engineer",
    name: "DevOps Engineer",
    description: "Mengelola infrastruktur, CI/CD, dan deployment automation",
    kategori: "teknologi",
    jurusanTerkait: [
      "teknik-informatika",
      "teknologi-informasi",
      "teknik-komputer",
    ],
  },
  {
    id: "cloud-architect",
    name: "Cloud Architect",
    description: "Merancang dan mengelola infrastruktur cloud enterprise",
    kategori: "teknologi",
    jurusanTerkait: [
      "teknik-informatika",
      "teknologi-informasi",
      "teknik-komputer",
    ],
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    description:
      "Menganalisis data untuk insight bisnis dan pengambilan keputusan",
    kategori: "teknologi",
    jurusanTerkait: [
      "data-science",
      "statistika",
      "sistem-informasi",
      "matematika",
    ],
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    description:
      "Machine learning, predictive modeling, dan advanced analytics",
    kategori: "teknologi",
    jurusanTerkait: [
      "data-science",
      "ilmu-komputer",
      "statistika",
      "matematika",
    ],
  },
  {
    id: "data-engineer",
    name: "Data Engineer",
    description: "Membangun data pipeline, ETL, dan data infrastructure",
    kategori: "teknologi",
    jurusanTerkait: ["data-science", "teknik-informatika", "ilmu-komputer"],
  },
  {
    id: "machine-learning-engineer",
    name: "Machine Learning Engineer",
    description: "Mengembangkan dan deploy model AI/ML ke production",
    kategori: "teknologi",
    jurusanTerkait: [
      "ilmu-komputer",
      "data-science",
      "matematika",
      "statistika",
    ],
  },
  {
    id: "ai-researcher",
    name: "AI Researcher",
    description: "Riset kecerdasan buatan dan pengembangan algoritma baru",
    kategori: "teknologi",
    jurusanTerkait: ["ilmu-komputer", "matematika", "fisika"],
  },
  {
    id: "cybersecurity-analyst",
    name: "Cybersecurity Analyst",
    description: "Melindungi sistem dari ancaman keamanan dan serangan siber",
    kategori: "teknologi",
    jurusanTerkait: ["keamanan-siber", "teknik-informatika", "teknik-komputer"],
  },
  {
    id: "penetration-tester",
    name: "Penetration Tester",
    description: "Ethical hacking dan pengujian keamanan sistem",
    kategori: "teknologi",
    jurusanTerkait: ["keamanan-siber", "teknik-informatika"],
  },
  {
    id: "network-engineer",
    name: "Network Engineer",
    description: "Merancang dan mengelola infrastruktur jaringan",
    kategori: "teknologi",
    jurusanTerkait: [
      "teknik-komputer",
      "teknologi-informasi",
      "teknik-elektro",
    ],
  },
  {
    id: "system-administrator",
    name: "System Administrator",
    description: "Mengelola server dan sistem operasi enterprise",
    kategori: "teknologi",
    jurusanTerkait: [
      "teknologi-informasi",
      "teknik-komputer",
      "teknik-informatika",
    ],
  },
  {
    id: "database-administrator",
    name: "Database Administrator",
    description: "Mengelola dan mengoptimasi database perusahaan",
    kategori: "teknologi",
    jurusanTerkait: ["teknik-informatika", "sistem-informasi", "data-science"],
  },
  {
    id: "qa-engineer",
    name: "QA Engineer",
    description: "Quality assurance, testing, dan automasi pengujian software",
    kategori: "teknologi",
    jurusanTerkait: [
      "teknik-informatika",
      "teknik-perangkat-lunak",
      "sistem-informasi",
    ],
  },
  {
    id: "game-developer",
    name: "Game Developer",
    description: "Mengembangkan video game untuk berbagai platform",
    kategori: "teknologi",
    jurusanTerkait: ["teknik-informatika", "ilmu-komputer", "animasi"],
  },
  {
    id: "blockchain-developer",
    name: "Blockchain Developer",
    description:
      "Mengembangkan aplikasi berbasis blockchain dan smart contracts",
    kategori: "teknologi",
    jurusanTerkait: ["teknik-informatika", "ilmu-komputer", "keamanan-siber"],
  },
  {
    id: "it-consultant",
    name: "IT Consultant",
    description: "Konsultasi teknologi dan transformasi digital",
    kategori: "teknologi",
    jurusanTerkait: ["sistem-informasi", "teknologi-informasi", "manajemen"],
  },

  // ========================================
  // KATEGORI: BISNIS & MANAJEMEN
  // ========================================
  {
    id: "business-analyst",
    name: "Business Analyst",
    description: "Menganalisis kebutuhan bisnis dan proses perusahaan",
    kategori: "bisnis",
    jurusanTerkait: ["sistem-informasi", "manajemen", "ekonomi"],
  },
  {
    id: "project-manager",
    name: "Project Manager",
    description: "Mengelola proyek, tim, dan resource perusahaan",
    kategori: "bisnis",
    jurusanTerkait: ["manajemen", "teknik-industri", "sistem-informasi"],
  },
  {
    id: "product-manager",
    name: "Product Manager",
    description: "Mengelola pengembangan produk dari ideasi hingga launch",
    kategori: "bisnis",
    jurusanTerkait: ["manajemen", "sistem-informasi", "bisnis-digital"],
  },
  {
    id: "marketing-manager",
    name: "Marketing Manager",
    description: "Strategi pemasaran dan brand management",
    kategori: "bisnis",
    jurusanTerkait: [
      "manajemen-pemasaran",
      "ilmu-komunikasi",
      "bisnis-digital",
    ],
  },
  {
    id: "digital-marketer",
    name: "Digital Marketer",
    description: "Pemasaran online, SEO, SEM, dan social media marketing",
    kategori: "bisnis",
    jurusanTerkait: [
      "bisnis-digital",
      "manajemen-pemasaran",
      "ilmu-komunikasi",
    ],
  },
  {
    id: "financial-analyst",
    name: "Financial Analyst",
    description: "Analisis keuangan, investasi, dan valuasi perusahaan",
    kategori: "bisnis",
    jurusanTerkait: ["akuntansi", "keuangan", "ekonomi"],
  },
  {
    id: "accountant",
    name: "Akuntan",
    description: "Pembukuan, laporan keuangan, dan audit",
    kategori: "bisnis",
    jurusanTerkait: ["akuntansi", "keuangan"],
  },
  {
    id: "auditor",
    name: "Auditor",
    description: "Pemeriksaan laporan keuangan dan kepatuhan",
    kategori: "bisnis",
    jurusanTerkait: ["akuntansi", "keuangan"],
  },
  {
    id: "tax-consultant",
    name: "Konsultan Pajak",
    description: "Konsultasi perpajakan dan perencanaan pajak",
    kategori: "bisnis",
    jurusanTerkait: ["akuntansi", "ilmu-hukum"],
  },
  {
    id: "hr-manager",
    name: "HR Manager",
    description: "Manajemen sumber daya manusia dan pengembangan karyawan",
    kategori: "bisnis",
    jurusanTerkait: ["manajemen-sdm", "psikologi", "manajemen"],
  },
  {
    id: "recruiter",
    name: "Recruiter",
    description: "Perekrutan dan talent acquisition",
    kategori: "bisnis",
    jurusanTerkait: ["manajemen-sdm", "psikologi"],
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    description: "Membangun dan menjalankan bisnis sendiri",
    kategori: "bisnis",
    jurusanTerkait: ["entrepreneurship", "manajemen", "bisnis-digital"],
  },
  {
    id: "management-consultant",
    name: "Management Consultant",
    description: "Konsultasi strategi dan operasional perusahaan",
    kategori: "bisnis",
    jurusanTerkait: ["manajemen", "ekonomi", "teknik-industri"],
  },
  {
    id: "supply-chain-manager",
    name: "Supply Chain Manager",
    description: "Mengelola rantai pasokan dan logistik",
    kategori: "bisnis",
    jurusanTerkait: ["teknik-industri", "manajemen", "ekonomi"],
  },
  {
    id: "investment-banker",
    name: "Investment Banker",
    description: "M&A, IPO, dan corporate finance",
    kategori: "bisnis",
    jurusanTerkait: ["keuangan", "ekonomi", "akuntansi"],
  },

  // ========================================
  // KATEGORI: KREATIF & DESAIN
  // ========================================
  {
    id: "ui-ux-designer",
    name: "UI/UX Designer",
    description: "Merancang pengalaman pengguna dan antarmuka digital",
    kategori: "kreatif",
    jurusanTerkait: ["desain-grafis", "desain-produk", "teknik-informatika"],
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    description: "Desain visual, branding, dan materi marketing",
    kategori: "kreatif",
    jurusanTerkait: ["desain-grafis", "seni-rupa"],
  },
  {
    id: "product-designer",
    name: "Product Designer",
    description: "Desain produk fisik dan digital",
    kategori: "kreatif",
    jurusanTerkait: ["desain-produk", "desain-grafis", "teknik-industri"],
  },
  {
    id: "interior-designer",
    name: "Interior Designer",
    description: "Merancang ruang dalam dan estetika interior",
    kategori: "kreatif",
    jurusanTerkait: ["desain-interior", "arsitektur"],
  },
  {
    id: "architect",
    name: "Arsitek",
    description: "Merancang bangunan dan struktur konstruksi",
    kategori: "kreatif",
    jurusanTerkait: ["arsitektur", "teknik-sipil"],
  },
  {
    id: "animator",
    name: "Animator",
    description: "Membuat animasi 2D/3D untuk film, game, dan iklan",
    kategori: "kreatif",
    jurusanTerkait: ["animasi", "desain-grafis", "film-televisi"],
  },
  {
    id: "motion-designer",
    name: "Motion Designer",
    description: "Motion graphics dan visual effects",
    kategori: "kreatif",
    jurusanTerkait: ["animasi", "desain-grafis", "film-televisi"],
  },
  {
    id: "video-editor",
    name: "Video Editor",
    description: "Editing video untuk film, iklan, dan konten digital",
    kategori: "kreatif",
    jurusanTerkait: ["film-televisi", "ilmu-komunikasi"],
  },
  {
    id: "photographer",
    name: "Fotografer",
    description: "Fotografi komersial, portrait, dan dokumenter",
    kategori: "kreatif",
    jurusanTerkait: ["film-televisi", "desain-grafis", "ilmu-komunikasi"],
  },
  {
    id: "fashion-designer",
    name: "Fashion Designer",
    description: "Merancang busana dan koleksi fashion",
    kategori: "kreatif",
    jurusanTerkait: ["fashion-design", "seni-rupa"],
  },
  {
    id: "creative-director",
    name: "Creative Director",
    description: "Memimpin tim kreatif dan visi visual perusahaan",
    kategori: "kreatif",
    jurusanTerkait: ["desain-grafis", "ilmu-komunikasi", "manajemen-pemasaran"],
  },
  {
    id: "content-creator",
    name: "Content Creator",
    description:
      "Membuat konten digital untuk media sosial dan platform online",
    kategori: "kreatif",
    jurusanTerkait: ["ilmu-komunikasi", "jurnalistik", "desain-grafis"],
  },

  // ========================================
  // KATEGORI: MEDIA & KOMUNIKASI
  // ========================================
  {
    id: "journalist",
    name: "Jurnalis",
    description: "Menulis berita dan laporan investigatif",
    kategori: "media",
    jurusanTerkait: ["jurnalistik", "ilmu-komunikasi"],
  },
  {
    id: "public-relations",
    name: "Public Relations Specialist",
    description: "Mengelola citra publik dan komunikasi perusahaan",
    kategori: "media",
    jurusanTerkait: ["ilmu-komunikasi", "hubungan-internasional"],
  },
  {
    id: "copywriter",
    name: "Copywriter",
    description: "Menulis teks iklan dan materi marketing",
    kategori: "media",
    jurusanTerkait: ["ilmu-komunikasi", "sastra-inggris", "jurnalistik"],
  },
  {
    id: "social-media-manager",
    name: "Social Media Manager",
    description: "Mengelola akun media sosial dan strategi konten",
    kategori: "media",
    jurusanTerkait: [
      "ilmu-komunikasi",
      "bisnis-digital",
      "manajemen-pemasaran",
    ],
  },
  {
    id: "news-anchor",
    name: "News Anchor",
    description: "Presenter berita di televisi atau media online",
    kategori: "media",
    jurusanTerkait: ["jurnalistik", "ilmu-komunikasi"],
  },

  // ========================================
  // KATEGORI: KESEHATAN
  // ========================================
  {
    id: "dokter",
    name: "Dokter Umum",
    description: "Diagnosis dan pengobatan penyakit umum",
    kategori: "kesehatan",
    jurusanTerkait: ["kedokteran"],
  },
  {
    id: "dokter-spesialis",
    name: "Dokter Spesialis",
    description: "Dokter dengan keahlian khusus (bedah, jantung, dll)",
    kategori: "kesehatan",
    jurusanTerkait: ["kedokteran"],
  },
  {
    id: "perawat",
    name: "Perawat",
    description: "Merawat pasien dan memberikan asuhan keperawatan",
    kategori: "kesehatan",
    jurusanTerkait: ["keperawatan"],
  },
  {
    id: "apoteker",
    name: "Apoteker",
    description: "Meracik obat dan konsultasi farmasi",
    kategori: "kesehatan",
    jurusanTerkait: ["farmasi"],
  },
  {
    id: "nutritionist",
    name: "Ahli Gizi",
    description: "Konsultasi nutrisi dan perencanaan diet",
    kategori: "kesehatan",
    jurusanTerkait: ["gizi", "kesehatan-masyarakat"],
  },
  {
    id: "psikolog",
    name: "Psikolog",
    description: "Konseling dan terapi kesehatan mental",
    kategori: "kesehatan",
    jurusanTerkait: ["psikologi"],
  },
  {
    id: "dentist",
    name: "Dokter Gigi",
    description: "Perawatan gigi dan kesehatan mulut",
    kategori: "kesehatan",
    jurusanTerkait: ["kedokteran-gigi"],
  },

  // ========================================
  // KATEGORI: ENGINEERING
  // ========================================
  {
    id: "electrical-engineer",
    name: "Electrical Engineer",
    description: "Merancang sistem kelistrikan dan elektronika",
    kategori: "engineering",
    jurusanTerkait: ["teknik-elektro", "teknik-komputer"],
  },
  {
    id: "mechanical-engineer",
    name: "Mechanical Engineer",
    description: "Merancang sistem mekanik dan mesin",
    kategori: "engineering",
    jurusanTerkait: ["teknik-mesin"],
  },
  {
    id: "civil-engineer",
    name: "Civil Engineer",
    description: "Merancang infrastruktur dan konstruksi",
    kategori: "engineering",
    jurusanTerkait: ["teknik-sipil", "arsitektur"],
  },
  {
    id: "industrial-engineer",
    name: "Industrial Engineer",
    description: "Optimasi proses produksi dan operasi",
    kategori: "engineering",
    jurusanTerkait: ["teknik-industri", "manajemen"],
  },
  {
    id: "chemical-engineer",
    name: "Chemical Engineer",
    description: "Merancang proses kimia industri",
    kategori: "engineering",
    jurusanTerkait: ["teknik-kimia", "kimia"],
  },
  {
    id: "environmental-engineer",
    name: "Environmental Engineer",
    description: "Solusi lingkungan dan sustainability",
    kategori: "engineering",
    jurusanTerkait: ["teknik-lingkungan", "teknik-kimia"],
  },
  {
    id: "biomedical-engineer",
    name: "Biomedical Engineer",
    description: "Mengembangkan peralatan dan teknologi medis",
    kategori: "engineering",
    jurusanTerkait: ["teknik-biomedis", "teknik-elektro"],
  },

  // ========================================
  // KATEGORI: SAINS & RISET
  // ========================================
  {
    id: "research-scientist",
    name: "Research Scientist",
    description: "Melakukan riset ilmiah dan pengembangan",
    kategori: "sains",
    jurusanTerkait: ["fisika", "kimia", "biologi", "matematika"],
  },
  {
    id: "statistician",
    name: "Statistician",
    description: "Analisis statistik dan pemodelan data",
    kategori: "sains",
    jurusanTerkait: ["statistika", "matematika", "data-science"],
  },
  {
    id: "actuary",
    name: "Aktuaris",
    description: "Analisis risiko dan asuransi dengan statistik",
    kategori: "sains",
    jurusanTerkait: ["statistika", "matematika", "akuntansi"],
  },
  {
    id: "lab-technician",
    name: "Laboran",
    description: "Analisis laboratorium dan eksperimen",
    kategori: "sains",
    jurusanTerkait: ["kimia", "biologi", "farmasi"],
  },

  // ========================================
  // KATEGORI: PENDIDIKAN
  // ========================================
  {
    id: "guru",
    name: "Guru",
    description: "Mengajar di sekolah dasar, menengah, atau atas",
    kategori: "pendidikan",
    jurusanTerkait: [
      "pendidikan-guru-sd",
      "pendidikan-matematika",
      "pendidikan-bahasa-inggris",
    ],
  },
  {
    id: "dosen",
    name: "Dosen",
    description: "Mengajar dan riset di perguruan tinggi",
    kategori: "pendidikan",
    jurusanTerkait: [
      "matematika",
      "fisika",
      "kimia",
      "biologi",
      "ilmu-komputer",
    ],
  },
  {
    id: "corporate-trainer",
    name: "Corporate Trainer",
    description: "Training dan pengembangan karyawan perusahaan",
    kategori: "pendidikan",
    jurusanTerkait: ["manajemen-sdm", "psikologi", "manajemen"],
  },

  // ========================================
  // KATEGORI: HUKUM
  // ========================================
  {
    id: "lawyer",
    name: "Pengacara",
    description: "Membela klien di pengadilan dan konsultasi hukum",
    kategori: "hukum",
    jurusanTerkait: ["ilmu-hukum"],
  },
  {
    id: "legal-consultant",
    name: "Konsultan Hukum",
    description: "Konsultasi hukum untuk perusahaan",
    kategori: "hukum",
    jurusanTerkait: ["ilmu-hukum"],
  },
  {
    id: "notary",
    name: "Notaris",
    description: "Membuat akta otentik dan dokumen hukum",
    kategori: "hukum",
    jurusanTerkait: ["ilmu-hukum"],
  },

  // ========================================
  // KATEGORI: DIPLOMATIK & PEMERINTAHAN
  // ========================================
  {
    id: "diplomat",
    name: "Diplomat",
    description: "Mewakili negara dalam hubungan internasional",
    kategori: "sosial",
    jurusanTerkait: ["hubungan-internasional", "ilmu-politik"],
  },
  {
    id: "policy-analyst",
    name: "Policy Analyst",
    description: "Menganalisis dan merumuskan kebijakan publik",
    kategori: "sosial",
    jurusanTerkait: ["ilmu-politik", "administrasi-publik", "ekonomi"],
  },
  {
    id: "pns",
    name: "Pegawai Negeri Sipil",
    description: "Bekerja di instansi pemerintahan",
    kategori: "sosial",
    jurusanTerkait: ["administrasi-publik", "ilmu-politik", "manajemen"],
  },
];

export default KARIER_LIST;
