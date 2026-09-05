import type { Metadata } from "next";
import {
  TrendingUp,
  PiggyBank,
  Briefcase,
  Ship,
  Building2,
} from "lucide-react";
import ServiceDetailHero from "@/components/common/services/ServiceDetailHero";
import ServiceItemsGrid from "@/components/common/services/ServiceItemsGrid";
import ServiceCTA from "@/components/common/services/ServiceCTA"

export const metadata: Metadata = {
  title: "Trade & Investments | Levlet Consultancy",
  description:
    "Advisory across stock markets, money market funds, private equity, import & export, and real estate investment from Levlet Consultancy.",
};

const items = [
  {
    icon: TrendingUp,
    title: "Stock & Equities Market Advisory (NSE & NYSE)",
    description:
      "Investment guidance and market insights for clients interested in stock markets in Kenya and the United States.",
  },
  {
    icon: PiggyBank,
    title: "Money Market Funds",
    description:
      "Advisory services to help clients understand and invest in money market funds based on their risk profile and financial goals.",
  },
  {
    icon: Briefcase,
    title: "Private Equity",
    description:
      "Support and advisory for private equity investments, including opportunity assessment and strategic guidance.",
  },
  {
    icon: Ship,
    title: "Import & Export Processing",
    description:
      "Consultancy and processing services for businesses involved in international trade, including documentation and compliance support.",
  },
  {
    icon: Building2,
    title: "Real Estate Investment Advisory",
    description:
      "Guidance for individuals and businesses seeking to invest in real estate, including feasibility analysis and investment planning.",
  },
];

export default function TradeInvestmentsPage() {
  return (
    <>
      <ServiceDetailHero
        title="Trade & Investments"
        intro="Strategic guidance and processing support to help you grow and diversify your investments locally and internationally."
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=75"
      />
      <ServiceItemsGrid items={items} />
      <ServiceCTA note="Speak to us for tailored investment advice." />
    </>
  );
}