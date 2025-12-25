// Types untuk Sistem Pakar Pemilihan Jurusan dan Karier

export interface UserFacts {
  // Minat (4 dimensi)
  minatTeknologi: "tinggi" | "sedang" | "rendah";
  minatBisnis: "tinggi" | "sedang" | "rendah";
  minatSeni: "tinggi" | "sedang" | "rendah";
  minatSains: "tinggi" | "sedang" | "rendah";

  // Kemampuan Akademik (4 dimensi)
  nilaiMatematika: "tinggi" | "sedang" | "rendah";
  nilaiBahasaInggris: "tinggi" | "sedang" | "rendah";
  nilaiIPA: "tinggi" | "sedang" | "rendah";
  nilaiIPS: "tinggi" | "sedang" | "rendah";

  // Kepribadian & Soft Skills (3 dimensi)
  kepribadian: "introvert" | "extrovert" | "ambivert";
  preferensiKerja: "mandiri" | "tim" | "keduanya";
  gayaBelajar: "visual" | "auditori" | "kinestetik";

  // Tambahan - Motivasi & Tujuan (3 dimensi baru)
  motivasiKarier: "gaji" | "passion" | "dampak-sosial" | "keseimbangan";
  toleransiRisiko: "tinggi" | "sedang" | "rendah";
  orientasiWaktu: "jangka-pendek" | "jangka-panjang" | "fleksibel";

  // Tambahan - Kemampuan Tambahan (3 dimensi baru)
  kemampuanKomunikasi: "tinggi" | "sedang" | "rendah";
  kemampuanAnalitis: "tinggi" | "sedang" | "rendah";
  kreativitas: "tinggi" | "sedang" | "rendah";
}

// Bobot untuk setiap kategori faktor
export interface FactorWeights {
  minat: number;
  akademik: number;
  kepribadian: number;
  motivasi: number;
  kemampuan: number;
}

// Profil kecocokan untuk jurusan/karier
export interface CompatibilityProfile {
  idealMinat: Partial<
    Record<"teknologi" | "bisnis" | "seni" | "sains", "tinggi" | "sedang">
  >;
  idealAkademik: Partial<
    Record<
      "matematika" | "bahasaInggris" | "ipa" | "ips",
      "tinggi" | "sedang" | "rendah"
    >
  >;
  idealKepribadian: ("introvert" | "extrovert" | "ambivert")[];
  idealKerja: ("mandiri" | "tim" | "keduanya")[];
  idealGayaBelajar: ("visual" | "auditori" | "kinestetik")[];
  idealMotivasi: ("gaji" | "passion" | "dampak-sosial" | "keseimbangan")[];
  idealRisiko: ("tinggi" | "sedang" | "rendah")[];
  requiredSkills: {
    komunikasi?: "tinggi" | "sedang";
    analitis?: "tinggi" | "sedang";
    kreativitas?: "tinggi" | "sedang";
  };
}

export interface Rule {
  id: string;
  conditions: Condition[];
  conclusion: Conclusion;
  cf: number; // Certainty Factor dari pakar (0-1)
  description: string;
  priority?: number; // Prioritas rule (1-10)
  weight?: number; // Bobot tambahan untuk rule ini
}

export interface Condition {
  fact: keyof UserFacts;
  operator: "=" | "!=" | "in" | ">=" | "<=";
  value: string | string[];
}

export interface Conclusion {
  type: "jurusan" | "karier";
  value: string;
}

export interface Recommendation {
  type: "jurusan" | "karier";
  value: string;
  cf: number; // Combined Certainty Factor
  matchedRules: MatchedRule[];
  percentage: number;
  compatibilityScore?: number; // Skor kecocokan profil
  strengthAreas?: string[]; // Area kekuatan
  improvementAreas?: string[]; // Area yang perlu ditingkatkan
}

export interface MatchedRule {
  ruleId: string;
  description: string;
  cf: number;
  matchStrength?: "strong" | "moderate" | "weak";
}

export interface InferenceResult {
  jurusan: Recommendation[];
  karier: Recommendation[];
  userFacts: UserFacts;
  timestamp: Date;
  analysisDetails?: AnalysisDetails;
}

export interface AnalysisDetails {
  dominantMinat: string[];
  dominantKemampuan: string[];
  personalityProfile: string;
  suggestedPath: "teknis" | "bisnis" | "kreatif" | "sosial" | "campuran";
  confidenceLevel: "tinggi" | "sedang" | "rendah";
}

// Re-export dari file terpisah
export { JURUSAN_LIST, type Jurusan } from "./data/jurusan";
export { KARIER_LIST, type Karier } from "./data/karier";
