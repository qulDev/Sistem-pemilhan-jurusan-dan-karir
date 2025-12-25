// Knowledge Base - Aturan untuk Karier
// Berisi aturan IF-THEN dengan Certainty Factor

import { Rule } from "../types";

// ========================================
// ATURAN UNTUK KARIER - TEKNOLOGI
// ========================================
export const karierTeknologiRules: Rule[] = [
  // Backend Developer
  {
    id: "K-BE-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "karier", value: "backend-developer" },
    cf: 0.9,
    description: "Introvert dengan logika kuat cocok sebagai Backend Developer",
  },
  {
    id: "K-BE-2",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "karier", value: "backend-developer" },
    cf: 0.8,
    description:
      "Suka bekerja mandiri dengan teknologi cocok Backend Developer",
  },

  // Frontend Developer
  {
    id: "K-FE-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "karier", value: "frontend-developer" },
    cf: 0.9,
    description: "Kombinasi teknologi dan visual cocok Frontend Developer",
  },
  {
    id: "K-FE-2",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "karier", value: "frontend-developer" },
    cf: 0.82,
    description: "Visual learner dengan minat teknologi cocok Frontend",
  },

  // Fullstack Developer
  {
    id: "K-FS-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "ambivert" },
    ],
    conclusion: { type: "karier", value: "fullstack-developer" },
    cf: 0.88,
    description: "Fleksibel dengan kemampuan lengkap cocok Fullstack Developer",
  },
  {
    id: "K-FS-2",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "preferensiKerja", operator: "=", value: "keduanya" },
    ],
    conclusion: { type: "karier", value: "fullstack-developer" },
    cf: 0.8,
    description: "Fleksibel dalam kerja dengan minat teknologi cocok Fullstack",
  },

  // Mobile Developer
  {
    id: "K-MOB-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "mobile-developer" },
    cf: 0.88,
    description: "Minat teknologi dengan sense visual cocok Mobile Developer",
  },

  // DevOps Engineer
  {
    id: "K-DEV-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["introvert", "ambivert"] },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "karier", value: "devops-engineer" },
    cf: 0.88,
    description: "Suka otomasi dan infrastruktur cocok DevOps Engineer",
  },

  // Cloud Architect
  {
    id: "K-CLD-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      {
        fact: "preferensiKerja",
        operator: "in",
        value: ["mandiri", "keduanya"],
      },
    ],
    conclusion: { type: "karier", value: "cloud-architect" },
    cf: 0.88,
    description:
      "Teknologi tinggi dengan pemikiran arsitektural cocok Cloud Architect",
  },

  // Data Analyst
  {
    id: "K-DA-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "data-analyst" },
    cf: 0.88,
    description: "Matematika kuat dengan minat bisnis cocok Data Analyst",
  },
  {
    id: "K-DA-2",
    conditions: [
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "karier", value: "data-analyst" },
    cf: 0.8,
    description: "Teliti dengan kemampuan analitis cocok Data Analyst",
  },

  // Data Scientist
  {
    id: "K-DS-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "karier", value: "data-scientist" },
    cf: 0.92,
    description:
      "Kemampuan matematika, teknologi, dan sains tinggi cocok Data Scientist",
  },

  // Data Engineer
  {
    id: "K-DE-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "karier", value: "data-engineer" },
    cf: 0.88,
    description: "Suka membangun sistem data cocok Data Engineer",
  },

  // Machine Learning Engineer
  {
    id: "K-ML-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "karier", value: "machine-learning-engineer" },
    cf: 0.9,
    description:
      "Matematika dan sains tinggi dengan teknologi cocok ML Engineer",
  },

  // AI Researcher
  {
    id: "K-AI-1",
    conditions: [
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "karier", value: "ai-researcher" },
    cf: 0.9,
    description:
      "Riset oriented dengan kemampuan teknis tinggi cocok AI Researcher",
  },

  // Cybersecurity Analyst
  {
    id: "K-SEC-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "karier", value: "cybersecurity-analyst" },
    cf: 0.88,
    description:
      "Teliti dan fokus dengan minat keamanan cocok Cybersecurity Analyst",
  },

  // Penetration Tester
  {
    id: "K-PEN-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "karier", value: "penetration-tester" },
    cf: 0.85,
    description: "Suka eksplorasi dan testing cocok Penetration Tester",
  },

  // Network Engineer
  {
    id: "K-NET-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "karier", value: "network-engineer" },
    cf: 0.85,
    description: "Suka infrastruktur dan hardware cocok Network Engineer",
  },

  // System Administrator
  {
    id: "K-SYS-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "karier", value: "system-administrator" },
    cf: 0.82,
    description: "Mandiri dengan minat teknologi cocok System Administrator",
  },

  // Database Administrator
  {
    id: "K-DBA-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "karier", value: "database-administrator" },
    cf: 0.85,
    description: "Teliti dengan data dan sistem cocok Database Administrator",
  },

  // QA Engineer
  {
    id: "K-QA-1",
    conditions: [
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["introvert", "ambivert"] },
      {
        fact: "preferensiKerja",
        operator: "in",
        value: ["mandiri", "keduanya"],
      },
    ],
    conclusion: { type: "karier", value: "qa-engineer" },
    cf: 0.82,
    description: "Detail oriented dengan minat teknologi cocok QA Engineer",
  },

  // Game Developer
  {
    id: "K-GAME-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "karier", value: "game-developer" },
    cf: 0.88,
    description: "Kreatif dengan kemampuan programming cocok Game Developer",
  },

  // Blockchain Developer
  {
    id: "K-BLC-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "blockchain-developer" },
    cf: 0.85,
    description:
      "Matematika kuat dengan minat teknologi baru cocok Blockchain Developer",
  },

  // IT Consultant
  {
    id: "K-ITC-1",
    conditions: [
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "it-consultant" },
    cf: 0.85,
    description:
      "Kombinasi teknologi dan bisnis dengan komunikasi baik cocok IT Consultant",
  },
];

// ========================================
// ATURAN UNTUK KARIER - BISNIS
// ========================================
export const karierBisnisRules: Rule[] = [
  // Business Analyst
  {
    id: "K-BA-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "ambivert" },
    ],
    conclusion: { type: "karier", value: "business-analyst" },
    cf: 0.88,
    description: "Menghubungkan bisnis dan teknologi cocok Business Analyst",
  },

  // Project Manager
  {
    id: "K-PM-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "project-manager" },
    cf: 0.9,
    description:
      "Leader alami dengan kemampuan koordinasi cocok Project Manager",
  },
  {
    id: "K-PM-2",
    conditions: [
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
      { fact: "preferensiKerja", operator: "in", value: ["tim", "keduanya"] },
    ],
    conclusion: { type: "karier", value: "project-manager" },
    cf: 0.75,
    description: "Kemampuan koordinasi tim cocok untuk Project Manager",
  },

  // Product Manager
  {
    id: "K-PDM-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "product-manager" },
    cf: 0.88,
    description:
      "Kombinasi bisnis dan teknologi dengan leadership cocok Product Manager",
  },

  // Marketing Manager
  {
    id: "K-MKT-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "marketing-manager" },
    cf: 0.9,
    description:
      "Kreatif dan komunikatif dengan minat bisnis cocok Marketing Manager",
  },

  // Digital Marketer
  {
    id: "K-DM-1",
    conditions: [
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "digital-marketer" },
    cf: 0.85,
    description: "Marketing dengan kemampuan digital cocok Digital Marketer",
  },

  // Financial Analyst
  {
    id: "K-FA-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "karier", value: "financial-analyst" },
    cf: 0.9,
    description: "Teliti dengan matematika kuat cocok Financial Analyst",
  },

  // Accountant
  {
    id: "K-ACC-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "karier", value: "accountant" },
    cf: 0.88,
    description: "Teliti dengan angka cocok sebagai Akuntan",
  },

  // Auditor
  {
    id: "K-AUD-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "karier", value: "auditor" },
    cf: 0.85,
    description: "Detail oriented dengan kemampuan analisis cocok Auditor",
  },

  // Tax Consultant
  {
    id: "K-TAX-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "nilaiIPS", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "tax-consultant" },
    cf: 0.85,
    description: "Matematika dan regulasi cocok Konsultan Pajak",
  },

  // HR Manager
  {
    id: "K-HR-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
      { fact: "nilaiIPS", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "hr-manager" },
    cf: 0.88,
    description: "Sosial dengan pemahaman manusia cocok HR Manager",
  },

  // Recruiter
  {
    id: "K-REC-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "karier", value: "recruiter" },
    cf: 0.82,
    description: "Komunikatif dan suka berinteraksi cocok Recruiter",
  },

  // Entrepreneur
  {
    id: "K-ENT-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "karier", value: "entrepreneur" },
    cf: 0.9,
    description: "Jiwa bisnis dengan kemandirian cocok Entrepreneur",
  },

  // Management Consultant
  {
    id: "K-MC-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "management-consultant" },
    cf: 0.88,
    description:
      "Analitis dengan kemampuan komunikasi cocok Management Consultant",
  },

  // Supply Chain Manager
  {
    id: "K-SCM-1",
    conditions: [
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "ambivert" },
    ],
    conclusion: { type: "karier", value: "supply-chain-manager" },
    cf: 0.85,
    description:
      "Analitis dengan pemahaman operasional cocok Supply Chain Manager",
  },

  // Investment Banker
  {
    id: "K-IB-1",
    conditions: [
      { fact: "minatBisnis", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "investment-banker" },
    cf: 0.88,
    description:
      "Matematika kuat dengan orientasi bisnis cocok Investment Banker",
  },
];

// ========================================
// ATURAN UNTUK KARIER - KREATIF
// ========================================
export const karierKreatifRules: Rule[] = [
  // UI/UX Designer
  {
    id: "K-UX-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
      { fact: "kepribadian", operator: "in", value: ["ambivert", "extrovert"] },
    ],
    conclusion: { type: "karier", value: "ui-ux-designer" },
    cf: 0.9,
    description: "Kreatif visual dengan empati pengguna cocok UI/UX Designer",
  },
  {
    id: "K-UX-2",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "ui-ux-designer" },
    cf: 0.85,
    description: "Kombinasi seni dan teknologi cocok UI/UX Designer",
  },

  // Graphic Designer
  {
    id: "K-GD-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "karier", value: "graphic-designer" },
    cf: 0.9,
    description: "Visual dan kreatif cocok Graphic Designer",
  },

  // Product Designer
  {
    id: "K-PD-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "product-designer" },
    cf: 0.88,
    description: "Kreatif dengan kemampuan teknis cocok Product Designer",
  },

  // Interior Designer
  {
    id: "K-ID-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "karier", value: "interior-designer" },
    cf: 0.85,
    description: "Visual dengan minat ruang cocok Interior Designer",
  },

  // Architect
  {
    id: "K-ARC-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "karier", value: "architect" },
    cf: 0.9,
    description: "Kombinasi seni dan teknik cocok Arsitek",
  },

  // Animator
  {
    id: "K-ANI-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "karier", value: "animator" },
    cf: 0.9,
    description: "Kreatif visual dengan teknologi cocok Animator",
  },

  // Motion Designer
  {
    id: "K-MOT-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "motion-designer" },
    cf: 0.88,
    description: "Visual dinamis dengan teknologi cocok Motion Designer",
  },

  // Video Editor
  {
    id: "K-VE-1",
    conditions: [
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "video-editor" },
    cf: 0.85,
    description: "Visual dengan kemampuan teknis cocok Video Editor",
  },

  // Photographer
  {
    id: "K-PHO-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
      {
        fact: "preferensiKerja",
        operator: "in",
        value: ["mandiri", "keduanya"],
      },
    ],
    conclusion: { type: "karier", value: "photographer" },
    cf: 0.85,
    description: "Visual dengan kemandirian cocok Fotografer",
  },

  // Fashion Designer
  {
    id: "K-FD-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "fashion-designer" },
    cf: 0.88,
    description: "Kreatif dengan sense of style cocok Fashion Designer",
  },

  // Creative Director
  {
    id: "K-CD-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "karier", value: "creative-director" },
    cf: 0.88,
    description: "Kreatif dengan leadership cocok Creative Director",
  },

  // Content Creator
  {
    id: "K-CC-1",
    conditions: [
      { fact: "minatSeni", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
    ],
    conclusion: { type: "karier", value: "content-creator" },
    cf: 0.88,
    description: "Kreatif dan ekspresif cocok Content Creator",
  },
  {
    id: "K-CC-2",
    conditions: [
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "visual" },
    ],
    conclusion: { type: "karier", value: "content-creator" },
    cf: 0.78,
    description: "Visual dan kreatif cocok Content Creator",
  },
];

// ========================================
// ATURAN UNTUK KARIER - MEDIA & KOMUNIKASI
// ========================================
export const karierMediaRules: Rule[] = [
  // Journalist
  {
    id: "K-JRN-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      {
        fact: "preferensiKerja",
        operator: "in",
        value: ["mandiri", "keduanya"],
      },
    ],
    conclusion: { type: "karier", value: "journalist" },
    cf: 0.88,
    description: "Komunikatif dengan kemampuan menulis cocok Jurnalis",
  },

  // Public Relations
  {
    id: "K-PR-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "karier", value: "public-relations" },
    cf: 0.88,
    description: "Komunikatif dengan kemampuan networking cocok PR Specialist",
  },

  // Copywriter
  {
    id: "K-CW-1",
    conditions: [
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "kepribadian", operator: "in", value: ["introvert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "copywriter" },
    cf: 0.85,
    description: "Kreatif dengan kemampuan menulis cocok Copywriter",
  },

  // Social Media Manager
  {
    id: "K-SMM-1",
    conditions: [
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatSeni", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "social-media-manager" },
    cf: 0.85,
    description: "Digital savvy dengan kreativitas cocok Social Media Manager",
  },

  // News Anchor
  {
    id: "K-NA-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "nilaiBahasaInggris", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "auditori" },
    ],
    conclusion: { type: "karier", value: "news-anchor" },
    cf: 0.88,
    description: "Komunikatif dengan penampilan baik cocok News Anchor",
  },
];

// ========================================
// ATURAN UNTUK KARIER - KESEHATAN
// ========================================
export const karierKesehatanRules: Rule[] = [
  // Dokter
  {
    id: "K-DOK-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["ambivert", "extrovert"] },
    ],
    conclusion: { type: "karier", value: "dokter" },
    cf: 0.92,
    description: "IPA tinggi dengan empati cocok Dokter Umum",
  },

  // Dokter Spesialis
  {
    id: "K-DSPE-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "dokter-spesialis" },
    cf: 0.9,
    description: "IPA dan sains tinggi cocok Dokter Spesialis",
  },

  // Perawat
  {
    id: "K-PER-1",
    conditions: [
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "karier", value: "perawat" },
    cf: 0.88,
    description: "Peduli dan suka menolong cocok Perawat",
  },

  // Apoteker
  {
    id: "K-APO-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "karier", value: "apoteker" },
    cf: 0.88,
    description: "Teliti dengan minat farmasi cocok Apoteker",
  },

  // Nutritionist
  {
    id: "K-NUT-1",
    conditions: [
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "nutritionist" },
    cf: 0.85,
    description: "Minat kesehatan dan nutrisi cocok Ahli Gizi",
  },

  // Psikolog
  {
    id: "K-PSI-1",
    conditions: [
      { fact: "nilaiIPS", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "in", value: ["ambivert", "extrovert"] },
      { fact: "gayaBelajar", operator: "=", value: "auditori" },
    ],
    conclusion: { type: "karier", value: "psikolog" },
    cf: 0.88,
    description: "Empati tinggi dengan kemampuan mendengar cocok Psikolog",
  },

  // Dentist
  {
    id: "K-DEN-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "karier", value: "dentist" },
    cf: 0.88,
    description: "IPA tinggi dengan keterampilan tangan cocok Dokter Gigi",
  },
];

// ========================================
// ATURAN UNTUK KARIER - ENGINEERING
// ========================================
export const karierEngineeringRules: Rule[] = [
  // Electrical Engineer
  {
    id: "K-EE-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "karier", value: "electrical-engineer" },
    cf: 0.9,
    description: "IPA dan matematika tinggi cocok Electrical Engineer",
  },

  // Mechanical Engineer
  {
    id: "K-ME-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "karier", value: "mechanical-engineer" },
    cf: 0.88,
    description: "Suka mekanik dan praktik cocok Mechanical Engineer",
  },

  // Civil Engineer
  {
    id: "K-CE-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "civil-engineer" },
    cf: 0.88,
    description: "Matematika kuat dengan minat konstruksi cocok Civil Engineer",
  },

  // Industrial Engineer
  {
    id: "K-IE-1",
    conditions: [
      { fact: "minatTeknologi", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "industrial-engineer" },
    cf: 0.85,
    description: "Kombinasi teknik dan manajemen cocok Industrial Engineer",
  },

  // Chemical Engineer
  {
    id: "K-CHE-1",
    conditions: [
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "chemical-engineer" },
    cf: 0.88,
    description: "IPA tinggi dengan minat industri cocok Chemical Engineer",
  },

  // Environmental Engineer
  {
    id: "K-ENV-1",
    conditions: [
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatSains", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "karier", value: "environmental-engineer" },
    cf: 0.85,
    description:
      "Peduli lingkungan dengan kemampuan teknis cocok Environmental Engineer",
  },

  // Biomedical Engineer
  {
    id: "K-BME-1",
    conditions: [
      { fact: "minatTeknologi", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
    ],
    conclusion: { type: "karier", value: "biomedical-engineer" },
    cf: 0.88,
    description: "Kombinasi teknologi dan kesehatan cocok Biomedical Engineer",
  },
];

// ========================================
// ATURAN UNTUK KARIER - SAINS & LAINNYA
// ========================================
export const karierLainRules: Rule[] = [
  // Research Scientist
  {
    id: "K-RS-1",
    conditions: [
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "nilaiIPA", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "karier", value: "research-scientist" },
    cf: 0.9,
    description:
      "Riset oriented dengan kemampuan sains cocok Research Scientist",
  },

  // Statistician
  {
    id: "K-STAT-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "introvert" },
    ],
    conclusion: { type: "karier", value: "statistician" },
    cf: 0.88,
    description: "Matematika kuat dengan analitis cocok Statistician",
  },

  // Actuary
  {
    id: "K-ACT-1",
    conditions: [
      { fact: "nilaiMatematika", operator: "=", value: "tinggi" },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "actuary" },
    cf: 0.88,
    description: "Matematika tinggi dengan minat bisnis cocok Aktuaris",
  },

  // Lab Technician
  {
    id: "K-LAB-1",
    conditions: [
      { fact: "nilaiIPA", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "gayaBelajar", operator: "=", value: "kinestetik" },
    ],
    conclusion: { type: "karier", value: "lab-technician" },
    cf: 0.82,
    description: "Suka praktik lab dengan kemampuan sains cocok Laboran",
  },

  // Guru
  {
    id: "K-GURU-1",
    conditions: [
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "karier", value: "guru" },
    cf: 0.82,
    description: "Sabar dan suka mengajar cocok Guru",
  },

  // Dosen
  {
    id: "K-DOS-1",
    conditions: [
      { fact: "minatSains", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "in", value: ["ambivert", "extrovert"] },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "dosen" },
    cf: 0.85,
    description: "Riset dan mengajar cocok Dosen",
  },

  // Corporate Trainer
  {
    id: "K-CT-1",
    conditions: [
      { fact: "kepribadian", operator: "=", value: "extrovert" },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "karier", value: "corporate-trainer" },
    cf: 0.85,
    description:
      "Komunikatif dengan kemampuan mengajar cocok Corporate Trainer",
  },

  // Lawyer
  {
    id: "K-LAW-1",
    conditions: [
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      {
        fact: "nilaiBahasaInggris",
        operator: "in",
        value: ["tinggi", "sedang"],
      },
      { fact: "kepribadian", operator: "in", value: ["extrovert", "ambivert"] },
    ],
    conclusion: { type: "karier", value: "lawyer" },
    cf: 0.88,
    description: "Argumentatif dengan kemampuan analisis cocok Pengacara",
  },

  // Legal Consultant
  {
    id: "K-LC-1",
    conditions: [
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      { fact: "minatBisnis", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "legal-consultant" },
    cf: 0.85,
    description: "Hukum dengan orientasi bisnis cocok Konsultan Hukum",
  },

  // Notary
  {
    id: "K-NOT-1",
    conditions: [
      { fact: "nilaiIPS", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "kepribadian", operator: "=", value: "introvert" },
      { fact: "preferensiKerja", operator: "=", value: "mandiri" },
    ],
    conclusion: { type: "karier", value: "notary" },
    cf: 0.82,
    description: "Teliti dengan kemampuan hukum cocok Notaris",
  },

  // Diplomat
  {
    id: "K-DIP-1",
    conditions: [
      { fact: "nilaiBahasaInggris", operator: "=", value: "tinggi" },
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      { fact: "kepribadian", operator: "=", value: "extrovert" },
    ],
    conclusion: { type: "karier", value: "diplomat" },
    cf: 0.88,
    description: "Bahasa asing dan diplomasi cocok Diplomat",
  },

  // Policy Analyst
  {
    id: "K-PA-1",
    conditions: [
      { fact: "nilaiIPS", operator: "=", value: "tinggi" },
      { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "minatSains", operator: "in", value: ["tinggi", "sedang"] },
    ],
    conclusion: { type: "karier", value: "policy-analyst" },
    cf: 0.85,
    description: "Analitis dengan pemahaman sosial cocok Policy Analyst",
  },

  // PNS
  {
    id: "K-PNS-1",
    conditions: [
      { fact: "nilaiIPS", operator: "in", value: ["tinggi", "sedang"] },
      { fact: "preferensiKerja", operator: "=", value: "tim" },
    ],
    conclusion: { type: "karier", value: "pns" },
    cf: 0.78,
    description: "Orientasi pelayanan publik cocok PNS",
  },
];

const allKarierRules = [
  ...karierTeknologiRules,
  ...karierBisnisRules,
  ...karierKreatifRules,
  ...karierMediaRules,
  ...karierKesehatanRules,
  ...karierEngineeringRules,
  ...karierLainRules,
];

export default allKarierRules;
