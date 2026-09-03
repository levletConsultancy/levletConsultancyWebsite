"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import PrimaryBtn from "../common/PrimaryBtn";
import Link from "next/link";
import Image from "next/image";

export interface NavLink {
  label: string;
  href: string;
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

const backdropVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const panelVariants: Variants = {
  closed: { x: "-100%" },
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 320, damping: 32 },
  },
};

const navVariants: Variants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const linkVariants: Variants = {
  closed: { opacity: 0, x: 24 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Sidebar({
  isOpen,
  onClose,
  links,
}: MobileSidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        onClick={onClose}
        aria-hidden="true"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={backdropVariants}
        className={`fixed inset-0 z-40 bg-white backdrop-blur-sm md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      {/* Sliding panel */}
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={panelVariants}
        className="fixed top-0 right-0 z-50 h-full w-full bg-white text-white shadow-2xl md:hidden backdrop-blur-xl"
      >
        <div className="flex items-center justify-between px-6 py-3 border-b border-wh0">
          <Link
                href="/"
                className="flex items-center gap-2 font-semibold transition-colors duration-300 mr-10 text-white"
              >
                <Image
                  src="/images/Levlet-Logo3.PNG"
                  alt="Levlet Logo"
                  width={120}
                  height={120}
                  className=" object-contain"
                  priority
                />
              </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 border  text-burgundy transition-colors border-burgundy/20 "
          >
            <X size={22} />
          </button>
        </div>

        <motion.nav
          variants={navVariants}
          className="flex flex-col gap-1 px-4 py-6"
        >
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              variants={linkVariants}
              className="rounded-lg px-3 py-3 text-base font-medium text-slate-950 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          variants={linkVariants}
          className="mt-auto px-6 py-6 border-t border-white/10"
        >
          <PrimaryBtn
            href="/contact"
            className="bg-burgundy hover:bg-burgundy/90"
          >
            Get in Touch
          </PrimaryBtn>
        </motion.div>
      </motion.aside>
    </>
  );
}