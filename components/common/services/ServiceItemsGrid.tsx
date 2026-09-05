import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceItemsGridProps {
  items: ServiceItem[];
}

export default function ServiceItemsGrid({ items }: ServiceItemsGridProps) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-neutral-200 bg-white p-7"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 font-semibold text-neutral-900">{title}</h3>
            <p className="mt-2 text-sm text-neutral-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}