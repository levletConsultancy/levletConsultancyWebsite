import Link from "next/link";
import { PhoneCall, Search, ShieldCheck } from "lucide-react";
import MainHeading from "../common/MainHeading";


const steps = [
  {
    icon: PhoneCall,
    title: "Book a Consultation",
    description:
      "Pick a Saturday session and tell us what you need, in person or virtually.",
  },
  {
    icon: Search,
    title: "Tailored Advice",
    description:
      "We review your situation and tailor solutions to your specific goals.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate, Confidential Delivery",
    description:
      "We handle the advisory, filing, or paperwork, accurately and in confidence.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8" id="how-we-work">
      
      <MainHeading title="Simple process. Clear, confident outcomes." subtitle="How It Works" />

      <div className="mx-auto mt-16 max-w-4xl">
     
        <div className="hidden grid-cols-3 items-center sm:grid">
          {steps.map((_, i) => (
            <div key={i} className="relative flex items-center justify-center">
              {i !== 0 && (
                <span className="absolute right-1/2 h-px w-full bg-neutral-200" />
              )}
              {i !== steps.length - 1 && (
                <span className="absolute left-1/2 h-px w-full bg-neutral-200" />
              )}
              <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-10 sm:mt-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-paper shadow-md text-burgundy">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-2 max-w-[220px] text-sm text-neutral-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-14 flex justify-center">
        <Link
          href="/contact"
          className="rounded-full bg-burgundy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-burgundy-dark"
        >
          Book a Consultation
        </Link>
      </div> */}
    </section>
  );
}