import Link from "next/link";
import { Crown, ArrowUpRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-blush/20 px-5 pt-24 text-center sm:px-8">
   
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[42vw] font-bold leading-none text-burgundy/5 sm:text-[26rem]"
      >
        404
      </span>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-burgundy text-white">
          <Crown size={24} />
        </div>

        <h1 className="mt-6 text-2xl leading-snug text-neutral-900 sm:text-3xl">
          This page seems to have gone missing from our books.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-neutral-500">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get your finances and your browsing back on track.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-burgundy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-burgundy-dark"
          >
            Back to Home
            <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-md border border-burgundy/30 px-6 py-3 text-sm font-medium text-burgundy transition-colors hover:bg-burgundy/5"
          >
            <Search size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}