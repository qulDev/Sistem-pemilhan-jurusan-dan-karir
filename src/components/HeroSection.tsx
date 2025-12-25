"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Brain, Sparkles, GraduationCap, Briefcase } from "lucide-react";

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.set(".feature-card", {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      // Animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .to(
          ".feature-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.3"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.2"
        );

      // Floating animation for icons
      gsap.to(".float-icon", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Sistem Pakar",
      description: "Berbasis aturan IF-THEN dengan forward chaining",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Certainty Factor",
      description: "Menghitung tingkat keyakinan rekomendasi",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Rekomendasi Jurusan",
      description: "Sesuai minat dan kemampuan akademik",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Rekomendasi Karier",
      description: "Berdasarkan kepribadian dan preferensi",
    },
  ];

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Sistem Pakar Pemilihan Jurusan & Karier
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Temukan jurusan dan karier yang tepat berdasarkan minat, kemampuan
          akademik, dan kepribadianmu menggunakan metode{" "}
          <span className="text-indigo-400 font-semibold">Rule-Based</span> dan{" "}
          <span className="text-purple-400 font-semibold">
            Certainty Factor
          </span>
        </p>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card p-6 text-center group cursor-pointer"
            >
              <div className="float-icon inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          ref={buttonRef}
          onClick={onStart}
          className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3"
        >
          <Sparkles className="w-5 h-5" />
          Mulai Konsultasi
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        {/* Info Text */}
        <p className="text-sm text-gray-600 mt-6">
          Gratis • Tanpa registrasi • Hasil instan
        </p>
      </div>
    </div>
  );
}
