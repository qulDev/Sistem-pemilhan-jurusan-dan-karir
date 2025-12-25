"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  InferenceResult,
  Recommendation,
  JURUSAN_LIST,
  KARIER_LIST,
} from "@/lib/types";
import {
  Trophy,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  RefreshCcw,
  Download,
  CheckCircle,
  Info,
  TrendingUp,
  Award,
  Target,
  Zap,
  AlertCircle,
  BarChart3,
} from "lucide-react";

interface ResultSectionProps {
  result: InferenceResult;
  onRestart: () => void;
}

export default function ResultSection({
  result,
  onRestart,
}: ResultSectionProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  const [expandedJurusan, setExpandedJurusan] = useState<string | null>(null);
  const [expandedKarier, setExpandedKarier] = useState<string | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!resultRef.current || animatedRef.current) return;

    animatedRef.current = true;

    const ctx = gsap.context(() => {
      // Set initial state to visible first, then animate
      gsap.set(".result-header", { opacity: 1, y: 0 });
      gsap.set(".result-summary", { opacity: 1, scale: 1 });
      gsap.set(".result-card", { opacity: 1, y: 0 });
      gsap.set(".action-button", { opacity: 1, y: 0 });

      // Then animate from hidden state
      gsap.from(".result-header", {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".result-summary", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

      gsap.from(".result-card", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".action-button", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        delay: 1,
        ease: "power2.out",
      });
    }, resultRef);

    return () => ctx.revert();
  }, []);

  const getJurusanInfo = (id: string) => {
    return JURUSAN_LIST.find((j) => j.id === id);
  };

  const getKarierInfo = (id: string) => {
    return KARIER_LIST.find((k) => k.id === id);
  };

  const getCFColor = (percentage: number) => {
    if (percentage >= 80) return "from-green-500 to-emerald-500";
    if (percentage >= 60) return "from-blue-500 to-indigo-500";
    if (percentage >= 40) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  const getCFLabel = (percentage: number) => {
    if (percentage >= 80) return "Sangat Cocok";
    if (percentage >= 60) return "Cocok";
    if (percentage >= 40) return "Cukup Cocok";
    return "Kurang Cocok";
  };

  const topJurusan = result.jurusan[0];
  const topKarier = result.karier[0];

  return (
    <div ref={resultRef} className="min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="result-header text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-6">
            <Trophy className="w-10 h-10 text-yellow-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hasil Rekomendasi
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Berdasarkan jawaban yang kamu berikan, sistem pakar kami telah
            menganalisis dan memberikan rekomendasi jurusan dan karier yang
            paling sesuai untukmu.
          </p>
        </div>

        {/* Top Picks Summary */}
        {(topJurusan || topKarier) && (
          <div className="result-summary glass-card p-8 mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-yellow-400" />
                <h2 className="text-xl font-bold">Rekomendasi Terbaik</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {topJurusan && (
                  <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl p-6 border border-indigo-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-indigo-400" />
                      <span className="text-sm text-gray-400">
                        Jurusan Terbaik
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-300 mb-2">
                      {getJurusanInfo(topJurusan.value)?.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCFColor(
                          topJurusan.percentage
                        )} text-white`}
                      >
                        {topJurusan.percentage}% Keyakinan
                      </div>
                      <span className="text-sm text-gray-400">
                        {getCFLabel(topJurusan.percentage)}
                      </span>
                    </div>
                  </div>
                )}

                {topKarier && (
                  <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-6 h-6 text-emerald-400" />
                      <span className="text-sm text-gray-400">
                        Karier Terbaik
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-300 mb-2">
                      {getKarierInfo(topKarier.value)?.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCFColor(
                          topKarier.percentage
                        )} text-white`}
                      >
                        {topKarier.percentage}% Keyakinan
                      </div>
                      <span className="text-sm text-gray-400">
                        {getCFLabel(topKarier.percentage)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Analysis Details Section */}
        {result.analysisDetails && (
          <div className="result-summary glass-card p-6 mb-10">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-bold">Analisis Profil</h2>
              <span
                className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${
                  result.analysisDetails.confidenceLevel === "tinggi"
                    ? "bg-green-500/20 text-green-400"
                    : result.analysisDetails.confidenceLevel === "sedang"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                Kepercayaan:{" "}
                {result.analysisDetails.confidenceLevel
                  .charAt(0)
                  .toUpperCase() +
                  result.analysisDetails.confidenceLevel.slice(1)}
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Jalur Karier */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm text-gray-400">
                    Jalur Disarankan
                  </span>
                </div>
                <p className="font-semibold text-lg capitalize">
                  {result.analysisDetails.suggestedPath === "campuran"
                    ? "Multi-Disiplin"
                    : result.analysisDetails.suggestedPath}
                </p>
              </div>

              {/* Kepribadian */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-gray-400">Kepribadian</span>
                </div>
                <p className="font-semibold text-sm">
                  {result.analysisDetails.personalityProfile}
                </p>
              </div>

              {/* Minat Dominan */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Minat Dominan</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {result.analysisDetails.dominantMinat.length > 0 ? (
                    result.analysisDetails.dominantMinat.map((minat, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-yellow-500/20 text-yellow-300 text-xs rounded-full"
                      >
                        {minat}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">
                      Tidak ada yang dominan
                    </span>
                  )}
                </div>
              </div>

              {/* Kemampuan Kuat */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">Kemampuan Kuat</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {result.analysisDetails.dominantKemampuan.length > 0 ? (
                    result.analysisDetails.dominantKemampuan
                      .slice(0, 3)
                      .map((kemampuan, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                        >
                          {kemampuan}
                        </span>
                      ))
                  ) : (
                    <span className="text-gray-500 text-sm">
                      Perlu ditingkatkan
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Jurusan Recommendations */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-7 h-7 text-indigo-400" />
            <h2 className="text-2xl font-bold">Rekomendasi Jurusan</h2>
          </div>

          {result.jurusan.length === 0 ? (
            <div className="glass-card p-8 text-center">
              <Info className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">
                Tidak ada rekomendasi jurusan yang sesuai dengan profil Anda.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {result.jurusan.map((rec, index) => (
                <RecommendationCard
                  key={rec.value}
                  recommendation={rec}
                  rank={index + 1}
                  info={getJurusanInfo(rec.value)}
                  isExpanded={expandedJurusan === rec.value}
                  onToggle={() =>
                    setExpandedJurusan(
                      expandedJurusan === rec.value ? null : rec.value
                    )
                  }
                  getCFColor={getCFColor}
                  getCFLabel={getCFLabel}
                />
              ))}
            </div>
          )}
        </div>

        {/* Karier Recommendations */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-7 h-7 text-emerald-400" />
            <h2 className="text-2xl font-bold">Rekomendasi Karier</h2>
          </div>

          {result.karier.length === 0 ? (
            <div className="glass-card p-8 text-center">
              <Info className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">
                Tidak ada rekomendasi karier yang sesuai dengan profil Anda.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {result.karier.map((rec, index) => (
                <RecommendationCard
                  key={rec.value}
                  recommendation={rec}
                  rank={index + 1}
                  info={getKarierInfo(rec.value)}
                  isExpanded={expandedKarier === rec.value}
                  onToggle={() =>
                    setExpandedKarier(
                      expandedKarier === rec.value ? null : rec.value
                    )
                  }
                  getCFColor={getCFColor}
                  getCFLabel={getCFLabel}
                />
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={onRestart}
            className="action-button btn-primary inline-flex items-center gap-2"
          >
            <RefreshCcw className="w-5 h-5" />
            Ulangi Konsultasi
          </button>
          <button
            onClick={() => window.print()}
            className="action-button btn-secondary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Simpan Hasil
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            ⚠️ Hasil rekomendasi ini bersifat sugestif berdasarkan data yang
            Anda masukkan. Pertimbangkan juga faktor lain seperti kondisi
            finansial, lokasi, dan konsultasi dengan orang tua atau konselor
            pendidikan.
          </p>
        </div>
      </div>
    </div>
  );
}

// Recommendation Card Component
interface RecommendationCardProps {
  recommendation: Recommendation;
  rank: number;
  info?: { name: string; description: string };
  isExpanded: boolean;
  onToggle: () => void;
  getCFColor: (percentage: number) => string;
  getCFLabel: (percentage: number) => string;
}

function RecommendationCard({
  recommendation,
  rank,
  info,
  isExpanded,
  onToggle,
  getCFColor,
  getCFLabel,
}: RecommendationCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        gsap.fromTo(
          contentRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isExpanded]);

  const isTopPick = rank === 1;

  return (
    <div className={`result-card ${isTopPick ? "top-pick" : ""}`}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          {/* Rank Badge */}
          <div
            className={`
            w-10 h-10 rounded-xl flex items-center justify-center font-bold
            ${
              isTopPick
                ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-black"
                : "bg-gray-800 text-gray-400"
            }
          `}
          >
            #{rank}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">
                {info?.name || recommendation.value}
              </h3>
              {isTopPick && (
                <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-medium">
                  Top Pick
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400">{info?.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* CF Progress */}
          <div className="hidden md:block w-32">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">CF</span>
              <span className="cf-value font-medium text-white">
                {recommendation.percentage}%
              </span>
            </div>
            <div className="progress-bar h-2">
              <div
                className={`progress-fill bg-gradient-to-r ${getCFColor(
                  recommendation.percentage
                )}`}
                style={{ width: `${recommendation.percentage}%` }}
              />
            </div>
          </div>

          {/* CF Badge Mobile */}
          <div
            className={`md:hidden px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCFColor(
              recommendation.percentage
            )} text-white`}
          >
            {recommendation.percentage}%
          </div>

          {/* Expand Button */}
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="pt-6 mt-6 border-t border-gray-800">
          {/* Strength Areas */}
          {recommendation.strengthAreas &&
            recommendation.strengthAreas.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  Area Kekuatanmu
                </h4>
                <div className="flex flex-wrap gap-2">
                  {recommendation.strengthAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full"
                    >
                      ✓ {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

          {/* Improvement Areas */}
          {recommendation.improvementAreas &&
            recommendation.improvementAreas.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400" />
                  Saran Pengembangan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {recommendation.improvementAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full"
                    >
                      💡 {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

          <h4 className="text-sm font-medium text-gray-400 mb-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Aturan yang Cocok ({recommendation.matchedRules.length} rules)
          </h4>

          <div className="space-y-3">
            {recommendation.matchedRules.map((rule) => (
              <div
                key={rule.ruleId}
                className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
              >
                <span
                  className={`text-xs font-mono px-2 py-1 rounded ${
                    rule.matchStrength === "strong"
                      ? "bg-green-500/20 text-green-400"
                      : rule.matchStrength === "moderate"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {rule.ruleId}
                </span>
                <div className="flex-1">
                  <p className="text-sm">{rule.description}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-gray-500">
                      CF: {Math.round(rule.cf * 100)}%
                    </p>
                    {rule.matchStrength && (
                      <span
                        className={`text-xs ${
                          rule.matchStrength === "strong"
                            ? "text-green-400"
                            : rule.matchStrength === "moderate"
                            ? "text-blue-400"
                            : "text-gray-400"
                        }`}
                      >
                        •{" "}
                        {rule.matchStrength === "strong"
                          ? "Sangat Cocok"
                          : rule.matchStrength === "moderate"
                          ? "Cocok"
                          : "Cukup"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-indigo-400" />
              <span className="text-gray-400">Certainty Factor Gabungan:</span>
              <span className="font-bold text-indigo-300">
                {recommendation.percentage}% (
                {getCFLabel(recommendation.percentage)})
              </span>
            </div>
            {recommendation.compatibilityScore !== undefined && (
              <div className="flex items-center gap-2 text-sm mt-2">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">Skor Kecocokan:</span>
                <span className="font-bold text-purple-300">
                  {recommendation.compatibilityScore}%
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
