"use client";

import { useEffect, useState } from "react";
import Sidebar, { type NavLink } from "./Sidebar";
import Link from "next/link";
import Image from "next/image";
import { TbMenu } from "react-icons/tb";
import { ArrowUpRight } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";





const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#industries" },


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
      <header className="flex justify-center bg-burgundy">
        <nav
          className={`flex w-full items-center justify-between rounded-md  px-5 py-3 transition-all duration-300 sm:px-16 bg-burgundy shadow-md ${
            isScrolled
              ? "border-slate-200 bg-burgundy"
              : "border-slate-200 bg-burgundy"
          }`}
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
                      className={` text-sm transition-colors duration-200 ${
                        isScrolled ? "hover:text-blush/80" : "hover:blush/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

          </div>
            
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-sm bg-blush px-6 py-3 text-sm font-medium text-burgundy transition-color"
          >
            Free Consultation
            <FaPhoneAlt size={16} />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
            className={`inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 md:hidden border cursor-pointer border-white/10 bg-gradient-to-br from-burgundy to-burgundy/60 ${
              isScrolled
                ? "text-blush"
                : "text-blush"
            }`}
          >
            <TbMenu3 size={22} />
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