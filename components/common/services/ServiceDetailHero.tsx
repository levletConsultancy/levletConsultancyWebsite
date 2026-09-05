import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ServiceDetailHeroProps {
  title: string;
  intro: string;
  image: string;
}

export default function ServiceDetailHero({
  title,
  intro,
  image,
}: ServiceDetailHeroProps) {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-36">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Dark overlay so white text stays readable regardless of the
          photo's own contrast — heavier at the top where the nav sits. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950/60" />

      <div className="mx-auto max-w-3xl text-center">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-1.5 text-xs text-white/60"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/#services" className="hover:text-white">
            Services
          </Link>
          <ChevronRight size={12} />
          <span className="text-white">{title}</span>
        </nav>

        <h1 className="mt-5 text-3xl leading-snug text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-white/80">{intro}</p>
      </div>
    </section>
  );
}