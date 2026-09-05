import type { Metadata } from "next";
import { ShieldAlert, Car, Building, IdCard, FileCheck2 } from "lucide-react";
import ServiceDetailHero from "@/components/common/services/ServiceDetailHero";
import ServiceItemsGrid from "@/components/common/services/ServiceItemsGrid";
import ServiceCTA from "@/components/common/services/ServiceCTA"
export const metadata: Metadata = {
  title: "eCitizen Services | Levlet Consultancy",
  description:
    "Fast, reliable assistance with NTSA, KRA PIN, business registration, police clearance, and birth certificate applications.",
};

const items = [
  {
    icon: Car,
    title: "NTSA Services",
    description:
      "Assistance with NTSA-related services such as driver's licenses, vehicle registration, and related applications.",
  },
  {
    icon: Building,
    title: "Business Registration",
    description:
      "Support with business name registration, company incorporation, and related statutory requirements.",
  },
  {
    icon: IdCard,
    title: "KRA PIN Registration & Retrieval",
    description:
      "Professional assistance with KRA PIN registration, retrieval, and updates for individuals and businesses.",
  },
  {
    icon: ShieldAlert,
    title: "Police Clearance Certificate (Good Conduct)",
    description:
      "Guidance and processing support for police clearance certificate applications.",
  },
  {
    icon: FileCheck2,
    title: "Birth Certificate Application",
    description:
      "Assistance with birth certificate applications and follow-up processes.",
  },
];

export default function ECitizenServicesPage() {
  return (
    <>
      <ServiceDetailHero
        title="eCitizen Services"
        intro="We assist clients in navigating Kenyan government services efficiently and correctly."
        image="https://images.unsplash.com/photo-1581553672347-95d9444c0d2c?auto=format&fit=crop&w=1920&q=75"
      />

     
      <div className="mx-auto mt-6 mb-10 max-w-xl px-5 sm:px-8">
        <div className="flex items-start gap-3 rounded-xl border border-burgundy/20 bg-blush/30 p-4 text-sm text-neutral-700">
          <ShieldAlert size={18} className="mt-0.5 shrink-0 text-burgundy" />
          <span>
            We ensure accuracy and confidentiality in all government service
            applications.
          </span>
        </div>
      </div>

      <ServiceItemsGrid items={items} />
      <ServiceCTA note="Get in touch to start your eCitizen application." />
    </>
  );
}