"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown} from "lucide-react";
import { SiGooglegemini } from "react-icons/si";
import Link from "next/link";

const faqs = [
  {
    question: "What services does Levlet Consultancy offer?",
    answer:
      "Three core areas: Financial Services (accounting, bookkeeping, tax, and advisory), Trade & Investments (stock markets, money market funds, private equity, real estate), and eCitizen Services (NTSA, KRA PIN, business registration, and more).",
  },
  {
    question: "Do I need to visit your office in person?",
    answer:
      "No — every service is available both in person at our office and virtually. Choose whichever works best for you when you book a consultation.",
  },
  {
    question: "When can I book a consultation?",
    answer:
      "Consultations run Saturdays only, 8:00 AM to 9:00 PM EAT. You can pick an available time slot directly through the booking calendar on our Contact page.",
  },
  {
    question: "Do you work with clients outside Kenya?",
    answer:
      "Yes. We serve clients in Kenya and worldwide, combining local expertise with international exposure — all consultations can be conducted virtually.",
  },
  {
    question: "What eCitizen services can you help with?",
    answer:
      "We assist with NTSA services, KRA PIN registration and retrieval, business registration, police clearance (good conduct) certificates, and birth certificate applications.",
  },
  {
    question: "Is my financial information kept confidential?",
    answer:
      "Yes. Every engagement is handled with strict confidentiality and professionalism, whether we're managing your books or processing a government application.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[320px_1fr]">
        {/* Left label column */}
         <div className="">
            <div className="flex items-center gap-1 text-sm font-medium text-burgundy">
                <SiGooglegemini className="h-4 w-4 " />
                <span>   Common Questions</span>
            </div>
            <h2 className="mt-4 text-3xl leading-snug text-neutral-900 sm:text-4xl">
                Everything you need to know
            </h2>
        </div>


        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="rounded-md bg-paper cursor-pointer p-6 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-medium text-neutral-900">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0 text-burgundy"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm leading-relaxed text-neutral-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
            <button className="bg-burgundy text-paper w-fit flex items-center justify-between gap-4 md:gap-8 rounded-md px-6 py-3 mt-10 ">
            <span className="text-start">
                Embark on a journey with Process today!
            </span>
            <Link
                href="/contact-us"
                className=" inline-flex items-center gap-2 rounded-md bg-paper px-4 py-3 text-xs font-medium text-burgundy transition-colors"
            >
                Get Started
                <ArrowUpRight size={14} />
            </Link>
        </button>
        </div>

    
      </div>
    </section>
  );
}