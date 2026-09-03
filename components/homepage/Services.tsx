import Link from "next/link";
import { Calculator, TrendingUp, Landmark, ArrowUpRight } from "lucide-react";

// Hrefs match the Services dropdown in components/layout/nav-data.ts —
// keep both in sync if a service page ever moves.
const services = [
  {
    icon: Calculator,
    title: "Financial Services",
    description:
      "Accounting, bookkeeping, tax, and financial advisory to keep your business compliant and healthy.",
    href: "/services/financial",
  },
  {
    icon: TrendingUp,
    title: "Trade & Investments",
    description:
      "Advisory across stock markets, money market funds, private equity, trade, and real estate.",
    href: "/services/trade-investments",
  },
  {
    icon: Landmark,
    title: "eCitizen Services",
    description:
      "Fast, reliable help with NTSA, KRA PINs, business registration, and more.",
    href: "/services/ecitizen",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-burgundy">
          <span className="h-4 w-0.5 bg-burgundy" />
          <span>Our Services</span>
        </div>
        <h2 className="mt-4 text-3xl leading-snug text-neutral-900 sm:text-4xl">
          One partner. Every service you need to grow.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
        {services.map(({ icon: Icon, title, description, href }) => (
          <Link
            key={href}
            href={href}
            className="group flex min-h-[380px] flex-col justify-between rounded-lg bg-paper p-8 transition-colors duration-300 hover:bg-burgundy"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-burgundy text-white transition-colors duration-300 group-hover:bg-white group-hover:text-burgundy">
              <Icon size={20} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white/80">
                {description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}