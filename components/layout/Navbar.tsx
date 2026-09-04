"use client";

import { useEffect, useState } from "react";
import Sidebar, { type NavLink } from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";
import { X } from "lucide-react";


interface ConsultaionBtnProps {
  text: string;
  className?: string;
}

export function ConsultaionBtn({ text, className }: ConsultaionBtnProps) {
  return (
    <Link
        href="/contact-us"
        className={`hidden lg:inline-flex items-center gap-2 rounded-sm bg-blush px-6 py-3 text-sm font-medium text-burgundy transition-color ${className}`}
      >
        {text} 
        <FaPhoneAlt size={16} />
      </Link>
  );
} 



const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },


];

const SCROLL_THRESHOLD = 80;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="relative z-50 flex justify-center bg-burgundy">
        <nav
          className={`flex h-[72px] w-full items-center justify-between rounded-md px-5 py-3 transition-all duration-300 sm:px-16 bg-burgundy shadow-md`}
        >
          <div className="flex  items-center gap-10">
             {/* Logo */}
  
              <Link
                href="/"
                className={`flex items-center gap-2 font-semibold transition-colors duration-300 mr-10  ${
                  isScrolled ? "text-blush" : "text-white"
                }`}
              >
                <Image
                  src="/images/Levlet-Logo.PNG"
                  alt="Levlet Logo"
                  width={120}
                  height={120}
                  className=" object-contain border border-white/40 rounded-md"
                  priority
                />
              </Link>

            {/* Desktop links */}
              <ul
                className={`hidden items-center gap-8 text-base transition-colors duration-300 md:flex ${
                  isScrolled ? "text-blush" : "text-blush"
                }`}
              >
              
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-blush"
                    >
                      {link.label}

                      <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blush transition-all duration-300 ease-out group-hover:w-[80%]" />
                    </Link>
                  </li>
                ))}
              </ul>

          </div>
            
          {/* Desktop CTA */}
          <ConsultaionBtn text="Free Consultation" />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            className="relative z-[60] inline-flex items-center justify-center rounded-md border border-white/10 bg-gradient-to-br from-burgundy to-burgundy/60 p-2 text-blush transition-all duration-300 md:hidden cursor-pointer"
          >
            {isSidebarOpen ? <X size={22} /> : <TbMenu3 size={22} />}
          </button>
        </nav>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}