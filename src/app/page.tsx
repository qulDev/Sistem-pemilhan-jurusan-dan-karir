"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import Particles from "@/components/Particles";
import HeroSection from "@/components/HeroSection";
import QuestionForm from "@/components/QuestionForm";
import ResultSection from "@/components/ResultSection";
import LoadingState from "@/components/LoadingState";
import { UserFacts, InferenceResult } from "@/lib/types";

type AppState = "hero" | "form" | "loading" | "result";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("hero");
  const [result, setResult] = useState<InferenceResult | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleStartConsultation = () => {
    animateTransition(() => setAppState("form"));
  };

  const handleBackToHero = () => {
    animateTransition(() => setAppState("hero"));
  };

  const handleSubmitForm = async (facts: UserFacts) => {
    animateTransition(() => setAppState("loading"));

    try {
      const response = await fetch("/api/inference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ facts }),
      });

      const data = await response.json();

      // Simulate minimum loading time for better UX
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (data.success) {
        setResult(data.data);
        animateTransition(() => setAppState("result"));
      } else {
        console.error("Error:", data.error);
        animateTransition(() => setAppState("form"));
      }
    } catch (error) {
      console.error("Error:", error);
      animateTransition(() => setAppState("form"));
    }
  };

  const handleRestart = () => {
    setResult(null);
    animateTransition(() => setAppState("hero"));
  };

  const animateTransition = (callback: () => void) => {
    if (mainRef.current) {
      gsap.to(mainRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          callback();
          gsap.to(mainRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    } else {
      callback();
    }
  };

  return (
    <main className="relative min-h-screen">
      <Particles count={40} />

      <div ref={mainRef} className="relative z-10">
        {appState === "hero" && (
          <HeroSection onStart={handleStartConsultation} />
        )}

        {appState === "form" && (
          <QuestionForm onSubmit={handleSubmitForm} onBack={handleBackToHero} />
        )}

        {appState === "loading" && <LoadingState />}

        {appState === "result" && result && (
          <ResultSection result={result} onRestart={handleRestart} />
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-gray-600 z-20">
        <p>
          © 2024 Sistem Pakar Pemilihan Jurusan & Karier •
          <span className="text-indigo-400"> Rule-Based</span> ×
          <span className="text-purple-400"> Certainty Factor</span>
        </p>
      </footer>
    </main>
  );
}
