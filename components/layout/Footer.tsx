import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Image from "next/image";


const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#industries" },
];

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-of-use" },
];


const SOCIAL_LINKS = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookSquare, href: "#", label: "Facebook" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const full_year = new Date().getFullYear();

  return (
    <section className="px-4 pb-10 pt-16 sm:px-6">
    <footer className="bg-gradient-to-b from-burgundy to-burgundy-dark text-white rounded-3xl">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between w-full">
          {/* Brand column */}
          <div className="flex-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold transition-colors duration-300 w-fit"
            >
    
              <Image
                src="/images/Levlet-Logo.PNG"
                alt="Levlet Consultancy logo"
                width={100}
                height={100}
                className="object-contain border border-white/40 rounded-md"
                priority
              />
            </Link>

            <p className="mt-4 max-w-xs text-xs text-white/90">
              Your partners in growth, reliable financial, investment, and
              eCitizen services for individuals and businesses in Kenya and
              worldwide, in person or virtually.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2">
            {/* Company */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/90 transition-colors duration-200 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0 text-white/90" />
                  <span>+254 745 177 833</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 shrink-0 text-white/90" />
                  <span>levletconsultancyltd@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-white/90" />
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/90 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright © {full_year} Levlet Consultancy Ltd. All rights reserved.</span>
          <ul className="flex items-center gap-4">
            {POLICY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-white/40 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
    </section>
  );
}