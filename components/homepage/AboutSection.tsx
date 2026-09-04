import Image from "next/image";
import { Check } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import SecondaryBtn from "../common/SecondaryBtn";

const highlights = [
  "Professional and confidential service",
  "Local expertise with global reach",
  "Office-based and virtual support",
];

export default function AboutSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8" id="about">
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2 sm:items-center">
        {/* Portrait image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl sm:max-w-none">
          <Image
            src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1000&q=80"
            alt="Levlet Consultancy advisor"
            fill
            sizes="(min-width: 640px) 500px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-burgundy">
            <span className="h-4 w-0.5 bg-burgundy" />
            <span>About Levlet</span>
          </div>

          <h2 className="mt-4 text-2xl leading-snug text-neutral-900 sm:text-3xl">
            Practical Guidance for Confident Growth
          </h2>

          <p className="mt-4 max-w-md text-neutral-500">
            We combine local expertise with global exposure to help
            individuals and businesses make informed financial and
            investment decisions, with support available in person or
            virtually.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-burgundy text-white">
                  <Check size={11} />
                </span>
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>

          <SecondaryBtn href="/about-us" className="mt-8 bg-burgundy text-paper hover:bg-burgundy-dark ">
            Learn More
            <ArrowUpRight size={16} />
          </SecondaryBtn>
        </div>
      </div>
    </section>
  );
}