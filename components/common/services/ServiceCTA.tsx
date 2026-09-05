import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServiceCTAProps {
  note: string;
  subtext?: string;
}

export default function ServiceCTA({
  note,
  subtext = "Book a consultation and get clear, practical guidance on your next move.",
}: ServiceCTAProps) {
  return (
    <section className="px-4 pb-10 pt-16 sm:px-6">
      <div className="relative isolate overflow-hidden px-5 py-24 text-center sm:px-8 rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1655841439659-0afc60676b70?auto=format&fit=crop&w=1920&q=75"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
      
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/85 via-neutral-950/80 to-burgundy/40" />

        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl leading-tight text-white sm:text-4xl">
            {note}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">{subtext}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-blush"
          >
            Book a Consultation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}