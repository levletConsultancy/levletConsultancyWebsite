import type { Metadata } from "next";
import {
  LineChart,
  BookOpen,
  FileText,
  SearchCheck,
  Receipt,
  GraduationCap,
} from "lucide-react";
import ServiceDetailHero from "@/components/common/services/ServiceDetailHero";
import ServiceItemsGrid from "@/components/common/services/ServiceItemsGrid";
import ServiceCTA from "@/components/common/services/ServiceCTA"

export const metadata: Metadata = {
  title: "Financial Services | Levlet Consultancy",
  description:
    "Financial modeling, bookkeeping, accounting, auditing, tax planning, and financial education from Levlet Consultancy.",
};

const items = [
  {
    icon: LineChart,
    title: "Financial Modeling",
    description:
      "We develop customized financial models to support business planning, budgeting, forecasting, valuation, and investment decisions.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping Services",
    description:
      "Accurate and up-to-date bookkeeping services that help businesses track income, expenses, and financial performance.",
  },
  {
    icon: FileText,
    title: "Accounting Services",
    description:
      "Preparation of financial statements, management accounts, and reporting in line with applicable accounting standards.",
  },
  {
    icon: SearchCheck,
    title: "Auditing Services",
    description:
      "Internal audit and financial review services aimed at improving controls, transparency, and compliance.",
  },
  {
    icon: Receipt,
    title: "Tax Planning & Preparation",
    description:
      "Professional tax services including tax planning, filing, and compliance for individuals and businesses, covering KRA and relevant international requirements.",
  },
  {
    icon: GraduationCap,
    title: "Financial Education",
    description:
      "Training sessions and advisory services designed to improve financial literacy for business owners, employees, and individuals.",
  },
];

export default function FinancialServicesPage() {
  return (
    <>
      <ServiceDetailHero
        title="Financial Services"
        intro="Comprehensive financial solutions for individuals, startups, and established businesses — built for accuracy, compliance, and informed decision-making."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=75"
      />
      <ServiceItemsGrid items={items} />
      <ServiceCTA note="Contact us to discuss your financial needs." />
    </>
  );
}