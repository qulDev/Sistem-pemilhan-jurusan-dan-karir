"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { UserFacts } from "@/lib/types";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  BookOpen,
  User,
  Send,
  Target,
  Brain,
} from "lucide-react";

interface QuestionFormProps {
  onSubmit: (facts: UserFacts) => void;
  onBack: () => void;
}

type Step = {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: Question[];
};

type Question = {
  key: keyof UserFacts;
  label: string;
  type: "select" | "radio";
  options: { value: string; label: string }[];
};

const steps: Step[] = [
  {
    id: "minat",
    title: "Minat & Passion",
    icon: <Lightbulb className="w-6 h-6" />,
    questions: [
      {
        key: "minatTeknologi",
        label: "Seberapa besar minatmu terhadap teknologi dan komputer?",
        type: "radio",
        options: [
          { value: "tinggi", label: "🚀 Tinggi" },
          { value: "sedang", label: "📱 Sedang" },
          { value: "rendah", label: "😐 Rendah" },
        ],
      },
      {
        key: "minatBisnis",
        label: "Seberapa besar minatmu terhadap bisnis dan manajemen?",
        type: "radio",
        options: [
          { value: "tinggi", label: "📈 Tinggi" },
          { value: "sedang", label: "💼 Sedang" },
          { value: "rendah", label: "😐 Rendah" },
        ],
      },
      {
        key: "minatSeni",
        label: "Seberapa besar minatmu terhadap seni dan kreativitas?",
        type: "radio",
        options: [
          { value: "tinggi", label: "🎨 Tinggi" },
          { value: "sedang", label: "✨ Sedang" },
          { value: "rendah", label: "😐 Rendah" },
        ],
      },
      {
        key: "minatSains",
        label: "Seberapa besar minatmu terhadap sains dan penelitian?",
        type: "radio",
        options: [
          { value: "tinggi", label: "🔬 Tinggi" },
          { value: "sedang", label: "🧪 Sedang" },
          { value: "rendah", label: "😐 Rendah" },
        ],
      },
    ],
  },
  {
    id: "akademik",
    title: "Kemampuan Akademik",
    icon: <BookOpen className="w-6 h-6" />,
    questions: [
      {
        key: "nilaiMatematika",
        label: "Bagaimana nilai/kemampuan Matematikamu?",
        type: "radio",
        options: [
          { value: "tinggi", label: "⭐ Tinggi (80+)" },
          { value: "sedang", label: "📊 Sedang (60-79)" },
          { value: "rendah", label: "📉 Rendah (<60)" },
        ],
      },
      {
        key: "nilaiBahasaInggris",
        label: "Bagaimana nilai/kemampuan Bahasa Inggrismu?",
        type: "radio",
        options: [
          { value: "tinggi", label: "⭐ Tinggi (80+)" },
          { value: "sedang", label: "📊 Sedang (60-79)" },
          { value: "rendah", label: "📉 Rendah (<60)" },
        ],
      },
      {
        key: "nilaiIPA",
        label: "Bagaimana nilai/kemampuan IPA (Fisika/Kimia/Biologi)?",
        type: "radio",
        options: [
          { value: "tinggi", label: "⭐ Tinggi (80+)" },
          { value: "sedang", label: "📊 Sedang (60-79)" },
          { value: "rendah", label: "📉 Rendah (<60)" },
        ],
      },
      {
        key: "nilaiIPS",
        label: "Bagaimana nilai/kemampuan IPS (Ekonomi/Sosiologi)?",
        type: "radio",
        options: [
          { value: "tinggi", label: "⭐ Tinggi (80+)" },
          { value: "sedang", label: "📊 Sedang (60-79)" },
          { value: "rendah", label: "📉 Rendah (<60)" },
        ],
      },
    ],
  },
  {
    id: "kepribadian",
    title: "Kepribadian & Gaya Kerja",
    icon: <User className="w-6 h-6" />,
    questions: [
      {
        key: "kepribadian",
        label: "Bagaimana tipe kepribadianmu?",
        type: "radio",
        options: [
          {
            value: "introvert",
            label: "🧘 Introvert - Suka sendiri, pemikir dalam",
          },
          { value: "extrovert", label: "🎉 Extrovert - Suka bersosialisasi" },
          { value: "ambivert", label: "⚖️ Ambivert - Kombinasi keduanya" },
        ],
      },
      {
        key: "preferensiKerja",
        label: "Bagaimana preferensi cara kerjamu?",
        type: "radio",
        options: [
          { value: "mandiri", label: "🎯 Mandiri - Lebih suka kerja sendiri" },
          { value: "tim", label: "👥 Tim - Lebih suka kerja bersama" },
          { value: "keduanya", label: "🔄 Fleksibel - Nyaman keduanya" },
        ],
      },
      {
        key: "gayaBelajar",
        label: "Bagaimana gaya belajar yang paling efektif untukmu?",
        type: "radio",
        options: [
          { value: "visual", label: "👁️ Visual - Belajar dengan melihat" },
          {
            value: "auditori",
            label: "👂 Auditori - Belajar dengan mendengar",
          },
          {
            value: "kinestetik",
            label: "✋ Kinestetik - Belajar dengan praktik",
          },
        ],
      },
    ],
  },
  {
    id: "motivasi",
    title: "Motivasi & Tujuan",
    icon: <Target className="w-6 h-6" />,
    questions: [
      {
        key: "motivasiKarier",
        label: "Apa yang paling memotivasimu dalam berkarier?",
        type: "radio",
        options: [
          { value: "gaji", label: "💰 Gaji Tinggi - Stabilitas finansial" },
          { value: "passion", label: "❤️ Passion - Melakukan yang disukai" },
          {
            value: "dampak-sosial",
            label: "🌍 Dampak Sosial - Membantu orang lain",
          },
          { value: "keseimbangan", label: "⚖️ Work-Life Balance" },
        ],
      },
      {
        key: "toleransiRisiko",
        label: "Bagaimana toleransimu terhadap risiko karier?",
        type: "radio",
        options: [
          { value: "tinggi", label: "🎲 Tinggi - Berani ambil risiko besar" },
          { value: "sedang", label: "📊 Sedang - Risiko terukur" },
          { value: "rendah", label: "🛡️ Rendah - Pilih yang aman" },
        ],
      },
      {
        key: "orientasiWaktu",
        label: "Bagaimana orientasi waktu kariermu?",
        type: "radio",
        options: [
          { value: "jangka-pendek", label: "⚡ Jangka Pendek - Hasil cepat" },
          {
            value: "jangka-panjang",
            label: "🏔️ Jangka Panjang - Investasi masa depan",
          },
          { value: "fleksibel", label: "🔄 Fleksibel - Sesuai situasi" },
        ],
      },
    ],
  },
  {
    id: "kemampuan",
    title: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    questions: [
      {
        key: "kemampuanKomunikasi",
        label: "Bagaimana kemampuan komunikasimu?",
        type: "radio",
        options: [
          { value: "tinggi", label: "🎤 Tinggi - Mudah menyampaikan ide" },
          { value: "sedang", label: "💬 Sedang - Cukup baik" },
          { value: "rendah", label: "🤫 Rendah - Perlu ditingkatkan" },
        ],
      },
      {
        key: "kemampuanAnalitis",
        label: "Bagaimana kemampuan analitis/problem solving-mu?",
        type: "radio",
        options: [
          { value: "tinggi", label: "🧩 Tinggi - Suka memecahkan masalah" },
          { value: "sedang", label: "🔍 Sedang - Bisa dengan bantuan" },
          { value: "rendah", label: "❓ Rendah - Perlu belajar lebih" },
        ],
      },
      {
        key: "kreativitas",
        label: "Bagaimana tingkat kreativitasmu?",
        type: "radio",
        options: [
          { value: "tinggi", label: "💡 Tinggi - Penuh ide baru" },
          { value: "sedang", label: "✨ Sedang - Kreatif saat dibutuhkan" },
          { value: "rendah", label: "📋 Rendah - Lebih suka yang terstruktur" },
        ],
      },
    ],
  },
];

export default function QuestionForm({ onSubmit, onBack }: QuestionFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<UserFacts>>({});
  const formRef = useRef<HTMLDivElement>(null);
  const stepContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate step transition
    if (stepContentRef.current) {
      gsap.fromTo(
        stepContentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentStep]);

  const handleAnswer = (key: keyof UserFacts, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));

    // Animate the selected option
    gsap.to(`[data-key="${key}"][data-value="${value}"]`, {
      scale: 1.02,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
    });
  };

  const isStepComplete = () => {
    const currentQuestions = steps[currentStep].questions;
    return currentQuestions.every((q) => answers[q.key]);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      gsap.to(stepContentRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.3,
        onComplete: () => setCurrentStep((prev) => prev + 1),
      });
    } else {
      // Submit
      onSubmit(answers as UserFacts);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      gsap.to(stepContentRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.3,
        onComplete: () => setCurrentStep((prev) => prev - 1),
      });
    } else {
      onBack();
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div
      ref={formRef}
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-400">
              Langkah {currentStep + 1} dari {steps.length}
            </span>
            <span className="text-sm text-indigo-400 font-medium">
              {Math.round(progress)}% selesai
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Step Indicators */}
        <div className="stepper mb-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${index === currentStep ? "active" : ""} ${
                index < currentStep ? "completed" : ""
              }`}
            />
          ))}
        </div>

        {/* Form Card */}
        <div className="glass-card p-8 md:p-10">
          <div ref={stepContentRef}>
            {/* Step Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400">
                {steps[currentStep].icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {steps[currentStep].title}
                </h2>
                <p className="text-gray-400 text-sm">
                  Jawab pertanyaan berikut dengan jujur
                </p>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-8">
              {steps[currentStep].questions.map((question, qIndex) => (
                <div key={question.key} className="question-item">
                  <label className="block text-lg font-medium mb-4">
                    <span className="text-indigo-400 mr-2">{qIndex + 1}.</span>
                    {question.label}
                  </label>

                  <div className="radio-group">
                    {question.options.map((option) => (
                      <div
                        key={option.value}
                        className="radio-option"
                        data-key={question.key}
                        data-value={option.value}
                      >
                        <input
                          type="radio"
                          id={`${question.key}-${option.value}`}
                          name={question.key}
                          value={option.value}
                          checked={answers[question.key] === option.value}
                          onChange={() =>
                            handleAnswer(question.key, option.value)
                          }
                        />
                        <label htmlFor={`${question.key}-${option.value}`}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-800">
            <button
              onClick={handlePrev}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              {currentStep === 0 ? "Kembali" : "Sebelumnya"}
            </button>

            <button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className={`btn-primary inline-flex items-center gap-2 ${
                !isStepComplete() ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <Send className="w-5 h-5" />
                  Lihat Hasil
                </>
              ) : (
                <>
                  Selanjutnya
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick tip */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            💡 Jawab dengan jujur untuk hasil yang lebih akurat
          </p>
        </div>
      </div>
    </div>
  );
}
