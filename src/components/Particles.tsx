"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ParticlesProps {
  count?: number;
}

export default function Particles({ count = 50 }: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: HTMLDivElement[] = [];

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.1});
        border-radius: 50%;
        pointer-events: none;
      `;

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      gsap.set(particle, { x, y });
      containerRef.current.appendChild(particle);
      particles.push(particle);

      // Animate each particle
      animateParticle(particle);
    }

    function animateParticle(particle: HTMLDivElement) {
      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 10 + 5,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [count]);

  return <div ref={containerRef} className="particles" />;
}
