"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Loader2, Brain, Sparkles } from "lucide-react";

export default function LoadingState() {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Brain pulse animation
      gsap.to(".brain-icon", {
        scale: 1.1,
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Sparkles animation
      gsap.to(".sparkle", {
        y: -10,
        opacity: 0.5,
        duration: 0.6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });

      // Text animation
      gsap.to(".loading-text", {
        opacity: 0.5,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Progress bar animation
      gsap.to(".loading-progress", {
        width: "100%",
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
      });
    }, loadingRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loadingRef}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        {/* Animated Icon Container */}
        <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-xl" />

          {/* Main icon */}
          <div className="brain-icon relative w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
            <Brain className="w-12 h-12 text-indigo-400" />
          </div>

          {/* Sparkles */}
          <Sparkles className="sparkle absolute top-2 right-2 w-6 h-6 text-yellow-400" />
          <Sparkles className="sparkle absolute bottom-4 left-0 w-5 h-5 text-pink-400" />
          <Sparkles className="sparkle absolute top-8 left-2 w-4 h-4 text-purple-400" />
        </div>

        {/* Loading Text */}
        <h2 className="loading-text text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Menganalisis Data...
        </h2>

        {/* Loading Steps */}
        <div className="text-gray-400 mb-8 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Mencocokkan dengan basis pengetahuan
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="progress-bar h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="loading-progress h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        {/* Info Text */}
        <p className="text-sm text-gray-600 mt-6">
          Sistem pakar sedang menjalankan forward chaining...
        </p>
      </div>
    </div>
  );
}
