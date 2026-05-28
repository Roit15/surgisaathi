"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const heroSlides = [
  {
    src: "/images/hero/hero-doctor.png",
    alt: "Expert surgeon at SURGISAATHI partner hospital",
  },
  {
    src: "/images/hero/hero-consultation.png",
    alt: "Doctor consulting with patient using modern technology",
  },
  {
    src: "/images/hero/hero-hospital.png",
    alt: "Premium partner hospital exterior",
  },
  {
    src: "/images/hero/hero-team.png",
    alt: "Team of expert surgeons and medical professionals",
  },
  {
    src: "/images/hero/hero-recovery.png",
    alt: "Happy patient recovering after successful surgery",
  },
  {
    src: "/images/hero/hero-laser.png",
    alt: "Advanced laser surgery technology",
  },
];

function shuffledSlides() {
  const shuffled = [...heroSlides];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function HeroCarousel() {
  const [slides] = useState(shuffledSlides);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
    >
      {/* Images */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </div>
      ))}

      {/* Gradient overlay for mobile text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-6 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
