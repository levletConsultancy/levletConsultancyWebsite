"use client";

import { Sparkles, Plus, Clock, Target, TrendingUp, Crown } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Streamlined bookkeeping and reporting, so you spend less time on paperwork.",
  },
  {
    icon: Target,
    title: "Make Better Decisions",
    description:
      "Clear financial insight and investment advisory behind every choice you make.",
  },
  {
    icon: TrendingUp,
    title: "Grow With Confidence",
    description:
      "Compliant, well-managed finances that support sustainable growth.",
  },
];

export const trustedAvatars = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=70",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=70",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=70",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=70",
];

export default function TrustSection() {
  return (
    <section className="bg-paper px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-burgundy">
          <Sparkles size={16} />
          <span>Your Partners in Growth</span>
        </div>

        {/* Headline with an inline icon, echoing the crown in the logo */}
        <h2 className="mt-5 text-3xl leading-snug text-neutral-900 sm:text-4xl lg:text-[2.5rem]">
          Behind every great business is clear, confident{" "}
          <span className="inline-flex lg:translate-y-1 items-center justify-center rounded-full bg-burgundy p-2 align-middle text-blush">
            <Crown size={18} />
          </span>{" "}
          financials.
        </h2>

        {/* Trust avatar stack */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex -space-x-3">
            {trustedAvatars.map((src, i) => (
              <div
                key={src}
                className="relative h-10 w-10 overflow-hidden rounded-full border-3 border-white shadow-md"
                style={{ zIndex: trustedAvatars.length - i }}
              >
                <Image src={src} alt="" fill sizes="40px" className="object-cover" />
              </div>
            ))}
            <div className="relative z-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-neutral-500 shadow-md">
              <Plus size={16} />
            </div>
          </div>
          <p className="text-sm font-medium text-burgundy">
            Trusted by clients across Kenya &amp; worldwide
          </p>
        </div>
      </div>

      {/* Benefit cards */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
        {values.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper shadow-md text-burgundy">
              <Icon size={22} />
            </div>
            <h3 className="mt-5 text-xl font-medium text-neutral-900">
              {title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500">{description}</p>


            <div className="mt-5 flex items-center gap-1.5">
              {Array.from({ length: 3 }).map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`h-1.5 w-1.5 rounded-full ${
                    dotIndex <= i ? "bg-burgundy" : "bg-neutral-200"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}