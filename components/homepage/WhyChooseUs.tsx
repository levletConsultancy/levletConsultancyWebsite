import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Globe2,
  Building2,
  Users,
  ArrowUpRight,
} from "lucide-react";
import MainHeading from "../common/MainHeading";


const features = [
  {
    icon: ShieldCheck,
    title: "Professional & Confidential",
    description:
      "Your financial information is handled with the discretion and care it deserves.",
  },
  {
    icon: Globe2,
    title: "Local Expertise, Global Reach",
    description:
      "Kenyan expertise combined with international exposure for smarter decisions.",
  },
  {
    icon: Building2,
    title: "Office or Virtual Support",
    description:
      "Visit our office or connect virtually, whichever works best for you.",
  },
  {
    icon: Users,
    title: "Client-Focused Solutions",
    description:
      "Practical, tailored guidance built around your specific goals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-paper px-5 py-20 sm:px-8">
      
      <MainHeading title=" What makes us your trusted partner" subtitle="Why Choose Levlet" />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[380px_1fr]">
        {/* Image with overlay caption */}
        <div className="relative h-[440px] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
            alt="Levlet advisor in a client consultation"
            fill
            sizes="(min-width: 1024px) 380px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/85 p-5 backdrop-blur-sm border border-whhite">
            <p className="text-sm font-medium text-neutral-900">
              Trusted by businesses across Kenya &amp; beyond
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-2 rounded-md bg-burgundy px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-burgundy-dark"
            >
              Book a Call
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-200/50 bg-white p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-paper shadow-md text-burgundy">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{title}</h3>
              <p className="mt-1.5 text-sm text-neutral-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}