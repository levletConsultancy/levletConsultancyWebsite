import Link from "next/link";
import { Calculator, TrendingUp, Landmark, ArrowUpRight } from "lucide-react";
import MainHeading from "../common/MainHeading";

const services = [
  {
    icon: Calculator,
    title: "Financial Services",
    description:
      "Accounting, bookkeeping, tax, and financial advisory to keep your business compliant and healthy.",
    href: "/services/financial-services",
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
    href: "/services/eCitizen-services",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 border-b border-neutral-200/40" id="services">
     
      <MainHeading subtitle="Our Services" title="One partner. Every service you need to grow." />

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
        {services.map(({ icon: Icon, title, description, href }) => (
          <Link
            key={href}
            href={href}
           
            className="group flex min-h-[380px] flex-col justify-between rounded-lg bg-paper p-8 transition-colors duration-300 active:bg-burgundy sm:hover:bg-burgundy"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-burgundy text-white transition-colors duration-300 group-active:bg-white group-active:text-burgundy sm:group-hover:bg-white sm:group-hover:text-burgundy">
              <Icon size={20} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 transition-colors duration-300 group-active:text-white sm:group-hover:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 transition-colors duration-300 group-active:text-white/80 sm:group-hover:text-white/80">
                {description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-burgundy transition-colors duration-300 group-active:text-white sm:text-white sm:opacity-0 sm:group-hover:opacity-100">
                View Services <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}