// Inference Engine - Mesin Inferensi dengan Forward Chaining + Multi-Factor Analysis
// Menghitung Certainty Factor untuk rekomendasi dengan presisi tinggi

import {
  UserFacts,
  Rule,
  Recommendation,
  InferenceResult,
  MatchedRule,
  AnalysisDetails,
  JURUSAN_LIST,
  KARIER_LIST,
} from "./types";
import { knowledgeBase } from "./knowledge-base";

// ========================================
// KONSTANTA DAN KONFIGURASI
// ========================================

// Bobot untuk setiap kategori faktor (total = 1.0)
// Digunakan untuk weighted scoring di masa depan
const _FACTOR_WEIGHTS = {
  minat: 0.3, // 30% bobot untuk minat
  akademik: 0.25, // 25% bobot untuk akademik
  kepribadian: 0.2, // 20% bobot untuk kepribadian
  motivasi: 0.15, // 15% bobot untuk motivasi
  kemampuan: 0.1, // 10% bobot untuk kemampuan tambahan
};
void _FACTOR_WEIGHTS; // Suppress unused warning

// Nilai numerik untuk level
const LEVEL_VALUES: Record<string, number> = {
  tinggi: 1.0,
  sedang: 0.6,
  rendah: 0.2,
};

// Mapping kepribadian ke skor - untuk penggunaan future
const _PERSONALITY_COMPATIBILITY: Record<string, Record<string, number>> = {
  introvert: {
    teknis: 0.9,
    riset: 0.85,
    kreatif: 0.7,
    sosial: 0.4,
    bisnis: 0.5,
  },
  extrovert: {
    teknis: 0.5,
    riset: 0.5,
    kreatif: 0.8,
    sosial: 0.95,
    bisnis: 0.9,
  },
  ambivert: {
    teknis: 0.7,
    riset: 0.7,
    kreatif: 0.75,
    sosial: 0.75,
    bisnis: 0.8,
  },
};
void _PERSONALITY_COMPATIBILITY; // Suppress unused warning

// ========================================
// FUNGSI UTILITAS
// ========================================

/**
 * Konversi nilai level ke numerik
 */
function getLevelValue(level: string): number {
  return LEVEL_VALUES[level] ?? 0.5;
}

/**
 * Hitung skor kecocokan dengan weighted average
 * Digunakan untuk kalkulasi skor lanjutan
 */
function _calculateWeightedScore(
  scores: { value: number; weight: number }[]
): number {
  const totalWeight = scores.reduce((sum, s) => sum + s.weight, 0);
  if (totalWeight === 0) return 0;

  const weightedSum = scores.reduce((sum, s) => sum + s.value * s.weight, 0);
  return weightedSum / totalWeight;
}
void _calculateWeightedScore; // Suppress unused warning

/**
 * Analisis profil minat dominan
 */
function analyzeDominantMinat(facts: UserFacts): string[] {
  const minatScores = [
    { name: "Teknologi", value: getLevelValue(facts.minatTeknologi) },
    { name: "Bisnis", value: getLevelValue(facts.minatBisnis) },
    { name: "Seni", value: getLevelValue(facts.minatSeni) },
    { name: "Sains", value: getLevelValue(facts.minatSains) },
  ];

  return minatScores
    .filter((m) => m.value >= 0.6)
    .sort((a, b) => b.value - a.value)
    .map((m) => m.name);
}

/**
 * Analisis kemampuan dominan
 */
function analyzeDominantKemampuan(facts: UserFacts): string[] {
  const kemampuanScores = [
    { name: "Matematika", value: getLevelValue(facts.nilaiMatematika) },
    { name: "Bahasa Inggris", value: getLevelValue(facts.nilaiBahasaInggris) },
    { name: "IPA", value: getLevelValue(facts.nilaiIPA) },
    { name: "IPS", value: getLevelValue(facts.nilaiIPS) },
  ];

  // Tambahkan soft skills jika ada
  if (facts.kemampuanKomunikasi) {
    kemampuanScores.push({
      name: "Komunikasi",
      value: getLevelValue(facts.kemampuanKomunikasi),
    });
  }
  if (facts.kemampuanAnalitis) {
    kemampuanScores.push({
      name: "Analitis",
      value: getLevelValue(facts.kemampuanAnalitis),
    });
  }
  if (facts.kreativitas) {
    kemampuanScores.push({
      name: "Kreativitas",
      value: getLevelValue(facts.kreativitas),
    });
  }

  return kemampuanScores
    .filter((k) => k.value >= 0.6)
    .sort((a, b) => b.value - a.value)
    .map((k) => k.name);
}

/**
 * Tentukan jalur karier yang disarankan
 */
function determineSuggestedPath(
  facts: UserFacts
): "teknis" | "bisnis" | "kreatif" | "sosial" | "campuran" {
  const pathScores = {
    teknis:
      getLevelValue(facts.minatTeknologi) * 0.4 +
      getLevelValue(facts.minatSains) * 0.3 +
      getLevelValue(facts.nilaiMatematika) * 0.2 +
      getLevelValue(facts.nilaiIPA) * 0.1,
    bisnis:
      getLevelValue(facts.minatBisnis) * 0.4 +
      getLevelValue(facts.nilaiIPS) * 0.3 +
      (facts.kepribadian === "extrovert"
        ? 0.2
        : facts.kepribadian === "ambivert"
        ? 0.15
        : 0.05) +
      getLevelValue(facts.nilaiBahasaInggris) * 0.1,
    kreatif:
      getLevelValue(facts.minatSeni) * 0.5 +
      (facts.gayaBelajar === "visual" ? 0.2 : 0.1) +
      (facts.kreativitas ? getLevelValue(facts.kreativitas) * 0.2 : 0.1) +
      0.1,
    sosial:
      (facts.kepribadian === "extrovert"
        ? 0.4
        : facts.kepribadian === "ambivert"
        ? 0.25
        : 0.1) +
      (facts.preferensiKerja === "tim"
        ? 0.25
        : facts.preferensiKerja === "keduanya"
        ? 0.15
        : 0.05) +
      getLevelValue(facts.nilaiIPS) * 0.2 +
      (facts.kemampuanKomunikasi
        ? getLevelValue(facts.kemampuanKomunikasi) * 0.15
        : 0.1),
  };

  const maxScore = Math.max(...Object.values(pathScores));
  const paths = Object.entries(pathScores).filter(
    ([, score]) => score >= maxScore - 0.1
  );

  if (paths.length > 1) return "campuran";
  return paths[0][0] as "teknis" | "bisnis" | "kreatif" | "sosial";
}

/**
 * Hitung tingkat kepercayaan hasil
 */
function calculateConfidenceLevel(
  facts: UserFacts,
  matchedRulesCount: number
): "tinggi" | "sedang" | "rendah" {
  // Hitung konsistensi jawaban
  const minatValues = [
    getLevelValue(facts.minatTeknologi),
    getLevelValue(facts.minatBisnis),
    getLevelValue(facts.minatSeni),
    getLevelValue(facts.minatSains),
  ];

  const hasHighMinat = minatValues.some((v) => v >= 0.8);
  const variance = calculateVariance(minatValues);

  if (matchedRulesCount >= 5 && hasHighMinat && variance > 0.1) {
    return "tinggi";
  } else if (matchedRulesCount >= 3 || hasHighMinat) {
    return "sedang";
  }
  return "rendah";
}

/**
 * Hitung variance untuk mengukur konsistensi
 */
function calculateVariance(values: number[]): number {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const squaredDiffs = values.map((v) => Math.pow(v - mean, 2));
  return squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
}

// ========================================
// FUNGSI EVALUASI RULE
// ========================================

/**
 * Memeriksa apakah kondisi rule terpenuhi oleh fakta user
 */
function checkCondition(
  condition: Rule["conditions"][0],
  facts: UserFacts
): { match: boolean; strength: number } {
  const factValue = facts[condition.fact];

  switch (condition.operator) {
    case "=":
      if (factValue === condition.value) {
        return { match: true, strength: 1.0 };
      }
      // Partial match untuk level values
      if (
        typeof condition.value === "string" &&
        LEVEL_VALUES[factValue] !== undefined &&
        LEVEL_VALUES[condition.value as string] !== undefined
      ) {
        const diff = Math.abs(
          LEVEL_VALUES[factValue] - LEVEL_VALUES[condition.value as string]
        );
        if (diff <= 0.4) {
          return { match: true, strength: 1 - diff };
        }
      }
      return { match: false, strength: 0 };

    case "!=":
      return {
        match: factValue !== condition.value,
        strength: factValue !== condition.value ? 1.0 : 0,
      };

    case "in":
      if (Array.isArray(condition.value)) {
        const isMatch = condition.value.includes(factValue);
        // Berikan strength lebih tinggi jika match dengan nilai pertama (paling ideal)
        const index = condition.value.indexOf(factValue);
        const strength = isMatch ? 1 - index * 0.1 : 0;
        return { match: isMatch, strength: Math.max(strength, 0.5) };
      }
      return { match: false, strength: 0 };

    case ">=":
      const factLevel = getLevelValue(factValue);
      const conditionLevel = getLevelValue(condition.value as string);
      return {
        match: factLevel >= conditionLevel,
        strength: factLevel >= conditionLevel ? factLevel : 0,
      };

    case "<=":
      const factLvl = getLevelValue(factValue);
      const condLvl = getLevelValue(condition.value as string);
      return {
        match: factLvl <= condLvl,
        strength: factLvl <= condLvl ? 1 - factLvl + 0.2 : 0,
      };

    default:
      return { match: false, strength: 0 };
  }
}

/**
 * Evaluasi rule dengan strength calculation
 */
function evaluateRule(
  rule: Rule,
  facts: UserFacts
): { match: boolean; overallStrength: number } {
  let totalStrength = 0;
  let matchCount = 0;

  for (const condition of rule.conditions) {
    const result = checkCondition(condition, facts);
    if (!result.match) {
      return { match: false, overallStrength: 0 };
    }
    totalStrength += result.strength;
    matchCount++;
  }

  const averageStrength = matchCount > 0 ? totalStrength / matchCount : 0;
  return { match: true, overallStrength: averageStrength };
}

/**
 * Hitung CF user berdasarkan konsistensi jawaban
 */
function calculateUserCF(facts: UserFacts): number {
  // Base CF
  let baseCF = 0.8;

  // Bonus untuk jawaban konsisten (ada minat dominan yang jelas)
  const dominantMinat = analyzeDominantMinat(facts);
  if (dominantMinat.length === 1 || dominantMinat.length === 2) {
    baseCF += 0.1;
  }

  // Bonus untuk kemampuan akademik yang jelas
  const dominantKemampuan = analyzeDominantKemampuan(facts);
  if (dominantKemampuan.length >= 2) {
    baseCF += 0.05;
  }

  return Math.min(baseCF, 0.95);
}

/**
 * Menggabungkan dua CF menggunakan formula kombinasi CF
 */
function combineCF(
  cfRule: number,
  cfUser: number,
  strength: number = 1
): number {
  return cfRule * cfUser * strength;
}

/**
 * Menggabungkan CF dari beberapa evidence yang sama
 * Formula: CF_combine = CF1 + CF2 × (1 - CF1)
 */
function combineCFSequential(cfValues: number[]): number {
  if (cfValues.length === 0) return 0;
  if (cfValues.length === 1) return cfValues[0];

  // Sort descending untuk prioritaskan CF tertinggi
  const sorted = [...cfValues].sort((a, b) => b - a);

  let result = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (result >= 0 && sorted[i] >= 0) {
      result = result + sorted[i] * (1 - result);
    } else if (result < 0 && sorted[i] < 0) {
      result = result + sorted[i] * (1 + result);
    } else {
      result =
        (result + sorted[i]) /
        (1 - Math.min(Math.abs(result), Math.abs(sorted[i])));
    }
  }

  return Math.min(Math.max(result, 0), 1);
}

/**
 * Hitung bonus berdasarkan jumlah rules yang match
 */
function calculateRuleCountBonus(ruleCount: number): number {
  if (ruleCount >= 5) return 0.15;
  if (ruleCount >= 3) return 0.1;
  if (ruleCount >= 2) return 0.05;
  return 0;
}

/**
 * Tentukan kekuatan kecocokan rule
 */
function determineMatchStrength(cf: number): "strong" | "moderate" | "weak" {
  if (cf >= 0.7) return "strong";
  if (cf >= 0.5) return "moderate";
  return "weak";
}

/**
 * Identifikasi area kekuatan berdasarkan rules yang match
 */
function identifyStrengthAreas(
  matchedRules: MatchedRule[],
  facts: UserFacts
): string[] {
  const areas: string[] = [];

  // Analisis dari rules
  const ruleDescriptions = matchedRules.map((r) => r.description.toLowerCase());

  if (
    ruleDescriptions.some(
      (d) => d.includes("teknologi") || d.includes("komputer")
    )
  ) {
    areas.push("Aptitude Teknologi");
  }
  if (
    ruleDescriptions.some(
      (d) => d.includes("matematika") || d.includes("logika")
    )
  ) {
    areas.push("Kemampuan Analitis");
  }
  if (
    ruleDescriptions.some((d) => d.includes("kreatif") || d.includes("seni"))
  ) {
    areas.push("Kreativitas");
  }
  if (
    ruleDescriptions.some(
      (d) => d.includes("komunikasi") || d.includes("sosial")
    )
  ) {
    areas.push("Kemampuan Sosial");
  }
  if (
    ruleDescriptions.some(
      (d) => d.includes("bisnis") || d.includes("manajemen")
    )
  ) {
    areas.push("Business Acumen");
  }

  // Analisis dari facts
  if (getLevelValue(facts.nilaiMatematika) >= 0.8) {
    areas.push("Matematika Kuat");
  }
  if (getLevelValue(facts.nilaiBahasaInggris) >= 0.8) {
    areas.push("Bahasa Inggris Baik");
  }

  return [...new Set(areas)].slice(0, 4);
}

/**
 * Identifikasi area yang perlu ditingkatkan
 */
function identifyImprovementAreas(
  recommendationType: string,
  facts: UserFacts
): string[] {
  const areas: string[] = [];

  // Untuk jurusan/karier teknologi
  if (
    recommendationType.includes("teknik") ||
    recommendationType.includes("developer") ||
    recommendationType.includes("data")
  ) {
    if (getLevelValue(facts.nilaiMatematika) < 0.6) {
      areas.push("Tingkatkan kemampuan Matematika");
    }
    if (getLevelValue(facts.nilaiBahasaInggris) < 0.6) {
      areas.push("Perkuat Bahasa Inggris teknis");
    }
  }

  // Untuk bisnis
  if (
    recommendationType.includes("manajemen") ||
    recommendationType.includes("bisnis") ||
    recommendationType.includes("marketing")
  ) {
    if (facts.kepribadian === "introvert") {
      areas.push("Kembangkan kemampuan networking");
    }
    if (getLevelValue(facts.nilaiIPS) < 0.6) {
      areas.push("Pelajari dasar-dasar ekonomi");
    }
  }

  // Untuk kreatif
  if (
    recommendationType.includes("desain") ||
    recommendationType.includes("seni") ||
    recommendationType.includes("creative")
  ) {
    if (facts.gayaBelajar !== "visual") {
      areas.push("Latih kepekaan visual");
    }
  }

  return areas.slice(0, 3);
}

// ========================================
// FUNGSI UTAMA INFERENCE
// ========================================

/**
 * Forward Chaining Inference Engine dengan Multi-Factor Analysis
 */
export function runInference(facts: UserFacts): InferenceResult {
  const userCF = calculateUserCF(facts);
  const matchedResults: Map<
    string,
    {
      type: "jurusan" | "karier";
      cf: number;
      rules: MatchedRule[];
      totalStrength: number;
    }
  > = new Map();

  // Forward chaining: evaluate all rules
  for (const rule of knowledgeBase) {
    const evaluation = evaluateRule(rule, facts);

    if (evaluation.match) {
      const key = `${rule.conclusion.type}-${rule.conclusion.value}`;
      const combinedCF = combineCF(rule.cf, userCF, evaluation.overallStrength);
      const matchStrength = determineMatchStrength(combinedCF);

      if (matchedResults.has(key)) {
        const existing = matchedResults.get(key)!;
        existing.rules.push({
          ruleId: rule.id,
          description: rule.description,
          cf: combinedCF,
          matchStrength,
        });
        existing.totalStrength += evaluation.overallStrength;
      } else {
        matchedResults.set(key, {
          type: rule.conclusion.type,
          cf: combinedCF,
          rules: [
            {
              ruleId: rule.id,
              description: rule.description,
              cf: combinedCF,
              matchStrength,
            },
          ],
          totalStrength: evaluation.overallStrength,
        });
      }
    }
  }

  // Process recommendations
  const jurusanRecommendations: Recommendation[] = [];
  const karierRecommendations: Recommendation[] = [];

  matchedResults.forEach((value, key) => {
    const cfValues = value.rules.map((r) => r.cf);
    let finalCF = combineCFSequential(cfValues);

    // Apply rule count bonus
    const ruleCountBonus = calculateRuleCountBonus(value.rules.length);
    finalCF = Math.min(finalCF + ruleCountBonus, 0.99);

    // Apply strength bonus
    const avgStrength = value.totalStrength / value.rules.length;
    if (avgStrength > 0.8) {
      finalCF = Math.min(finalCF + 0.05, 0.99);
    }

    const percentage = Math.round(finalCF * 100);
    const recValue = key.replace(`${value.type}-`, "");

    const recommendation: Recommendation = {
      type: value.type,
      value: recValue,
      cf: finalCF,
      matchedRules: value.rules,
      percentage,
      compatibilityScore: Math.round(avgStrength * 100),
      strengthAreas: identifyStrengthAreas(value.rules, facts),
      improvementAreas: identifyImprovementAreas(recValue, facts),
    };

    if (value.type === "jurusan") {
      jurusanRecommendations.push(recommendation);
    } else {
      karierRecommendations.push(recommendation);
    }
  });

  // Sort by CF descending
  jurusanRecommendations.sort((a, b) => b.cf - a.cf);
  karierRecommendations.sort((a, b) => b.cf - a.cf);

  // Limit results
  const topJurusan = jurusanRecommendations.slice(0, 10);
  const topKarier = karierRecommendations.slice(0, 10);

  // Build analysis details
  const totalMatchedRules =
    jurusanRecommendations.reduce((sum, r) => sum + r.matchedRules.length, 0) +
    karierRecommendations.reduce((sum, r) => sum + r.matchedRules.length, 0);

  const analysisDetails: AnalysisDetails = {
    dominantMinat: analyzeDominantMinat(facts),
    dominantKemampuan: analyzeDominantKemampuan(facts),
    personalityProfile: `${facts.kepribadian} yang lebih suka bekerja ${
      facts.preferensiKerja === "mandiri"
        ? "secara mandiri"
        : facts.preferensiKerja === "tim"
        ? "dalam tim"
        : "fleksibel"
    } dengan gaya belajar ${facts.gayaBelajar}`,
    suggestedPath: determineSuggestedPath(facts),
    confidenceLevel: calculateConfidenceLevel(facts, totalMatchedRules),
  };

  return {
    jurusan: topJurusan,
    karier: topKarier,
    userFacts: facts,
    timestamp: new Date(),
    analysisDetails,
  };
}

/**
 * Get recommendation details
 */
export function getJurusanDetails(id: string) {
  return JURUSAN_LIST.find((j) => j.id === id);
}

export function getKarierDetails(id: string) {
  return KARIER_LIST.find((k) => k.id === id);
}
