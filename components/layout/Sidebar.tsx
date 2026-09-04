"use client";

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import PrimaryBtn from "../common/PrimaryBtn";
import {ConsultaionBtn} from "./Navbar";

export interface NavLink {
  label: string;
  href: string;
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

const panelVariants: Variants = {
  closed: {
    y: "-100%",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 32,
    },
  },
};

const navVariants: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const linkVariants: Variants = {
  closed: {
    opacity: 0,
    y: 15,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
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
    <motion.aside
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={panelVariants}
      className="fixed top-[72px] right-0 z-40 h-[calc(100vh-72px)] w-full bg-white text-white shadow-2xl md:hidden"
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        {/* <div className="px-6 py-6">
          <Link href="/" onClick={onClose}>
            <Image
              src="/images/Levlet-Logo3.PNG"
              alt="Levlet Logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </Link>
        </div> */}

        {/* Navigation */}
        <motion.nav
          variants={navVariants}
          className="flex flex-col gap-1 px-4 py-4"
        >
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              variants={linkVariants}
              className="rounded-lg px-3 py-4 text-lg font-medium text-slate-950 transition-colors hover:bg-burgundy/5 hover:text-burgundy"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Bottom CTA */}
        <motion.div
          variants={linkVariants}
          className="mt-auto border-t border-slate-200 px-6 py-6"
        >
          <ConsultaionBtn text="Book a Free Consultation" className=" inline-flex bg-burgundy text-paper" />
        </motion.div>
      </div>
    </motion.aside>
  );
}