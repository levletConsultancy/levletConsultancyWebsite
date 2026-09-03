"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


const SLIDE_DURATION_MS = 6000;


export const heroBackgrounds = [
  {
    src: "https://images.unsplash.com/photo-1480944657103-7fed22359e1d?auto=format&fit=crop&w=1920&q=75",
    alt: "City building at night",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=75",
    alt: "High-rise buildings in daylight",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=75",
    alt: "Advisors reviewing work together",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=75",
    alt: "Consultant presenting during a meeting",
  },
];

// Placeholder headshots for the trust stack — swap for real client photos
// (with their permission) as soon as you have them.
export const trustedAvatars = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=70",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=70",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=70",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=70",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || heroBackgrounds.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroBackgrounds.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden bg-[#1C1815]">
      {/* Crossfading background images */}
      {heroBackgrounds.map((bg, i) => (
        <div
          key={bg.src}
          aria-hidden={i !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={bg.src}
            alt={bg.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1815]/92 via-[#1C1815]/55 to-[#1C1815]/25" />

      {/* Content — stays fixed regardless of which background is showing */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pt-16 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F6DCDD]">
          Serving Kenya &amp; Clients Worldwide
        </span>

        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.1] text-[#FDF9F7] sm:text-5xl lg:text-5xl">
          Professional Financial, Investment &amp; eCitizen Services
        </h1>

        <p className="mt-5 max-w-xl text-[15px] text-[#FDF9F7]/80 sm:text-base">
          We help individuals and businesses stay compliant, invest wisely, and
          navigate government services, with support available in person or
          virtually, from anywhere in the world.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-[#FDF9F7] px-6 py-3 text-sm font-medium text-[#1C1815] transition-colors hover:bg-[#F6DCDD]"
          >
            Book a Consultation
            <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-[#FDF9F7]/40 px-6 py-3 text-sm font-medium text-[#FDF9F7] transition-colors hover:bg-[#FDF9F7]/10"
          >
            Contact Us
          </Link>
        </div>

        {/* Trusted-by stack — inline on mobile, pinned bottom-right on larger screens */}
        <div className="mt-12 flex items-center gap-3 sm:absolute sm:bottom-10 sm:right-2 sm:mt-0 lg:right-6">
          <div className="flex -space-x-3">
            {trustedAvatars.map((src, i) => (
              <div
                key={src}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#FDF9F7]"
                style={{ zIndex: trustedAvatars.length - i }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm leading-tight text-[#FDF9F7]/90">
            <span className="block font-medium">Trusted by clients</span>
            <span className="text-[#FDF9F7]/60">across Kenya &amp; beyond</span>
          </p>
        </div>
      </div>
    </section>
  );
}