"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/tattoo-3.jpg",   label: "Lion · Black & Grey Realism" },
  { src: "/images/IMG_2423.jpg",   label: "Dragon & Peonies · Color" },
  { src: "/images/IMG_6902.jpg",   label: "Elephant in Flames · Color" },
  { src: "/images/GALLERY_A.jpg",  label: "Memorial Floral · Black & Grey" },
  { src: "/images/IMG_6880.jpg",   label: "Butterflies · Watercolour" },
  { src: "/images/GALLERY_B.jpg",  label: "Snake & Heart · Fine Line" },
  { src: "/images/IMG_6458.jpg",   label: "Raccoon · Realism" },
  { src: "/images/IMG_6447.jpg",   label: "Moon Phases · Fine Line" },
  { src: "/images/IMG_2629.jpg",   label: "Rose & Blossoms · Fine Line" },
  { src: "/images/IMG_2779.jpg",   label: "Sea Turtle · Black & Grey" },
];

const INTERVAL = 4000;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setTransitioning(false);
      }, 700);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(i);
      setTransitioning(false);
    }, 700);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current && !transitioning ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
        {/* Purple tint */}
        <div className="absolute inset-0 bg-purple-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo — prominent */}
        <div className="mb-8 drop-shadow-2xl">
          <Image
            src="/images/logo.jpg"
            alt="MO's Ink Tattoos"
            width={420}
            height={168}
            className="w-64 sm:w-80 md:w-96 h-auto object-contain"
            style={{ filter: "sepia(1) saturate(4) hue-rotate(225deg)" }}
            priority
          />
        </div>

        <p className="font-display text-white text-2xl sm:text-3xl max-w-lg mx-auto leading-relaxed">
          Welcome to Mo&apos;s Ink
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/book"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-md transition-all duration-200 glow-purple text-base"
          >
            Book Your Session
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 border border-white/40 hover:border-white text-white font-semibold rounded-md transition-all duration-200 backdrop-blur-sm text-base"
          >
            View Gallery
          </Link>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-purple-400"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
