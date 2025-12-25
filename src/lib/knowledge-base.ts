// Knowledge Base - Basis Pengetahuan Sistem Pakar
// Menggabungkan semua aturan dari file terpisah

import { Rule } from "./types";
import jurusanRules from "./rules/jurusan-rules";
import karierRules from "./rules/karier-rules";

// Gabungkan semua rules
export const knowledgeBase: Rule[] = [...jurusanRules, ...karierRules];

// Export terpisah untuk keperluan debugging/testing
export { jurusanRules, karierRules };

// Statistik knowledge base
export const knowledgeBaseStats = {
  totalRules: knowledgeBase.length,
  jurusanRules: jurusanRules.length,
  karierRules: karierRules.length,
};

export default knowledgeBase;
