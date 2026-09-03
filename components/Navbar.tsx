"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { NAV_LINKS, whatsappLink } from "@/lib/config";
import WhatsAppIcon from "@/components/WhatsAppIcon";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image src="/favicon.png" alt="GC Plus" width={40} height={40} className="h-10 w-auto object-contain" />
      <span className="block">
        <span className="block text-xl leading-tight font-bold tracking-wide text-gray-900">
          GC Plus
        </span>
        <span className="block text-[9px] leading-tight tracking-[0.18em] text-[var(--teal-accent)] font-semibold">
          BUSINESS CONTROL PARTNER
        </span>
      </span>
    </Link>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col justify-between">
      <span
        className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
          open ? "translate-y-[0.42rem] rotate-45" : ""
        }`}
      />
      <span
        className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
          open ? "-translate-y-[0.42rem] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 text-[15px] font-medium text-gray-700 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative overflow-hidden rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:text-[var(--teal-900)] ${
                isActive(link.href)
                  ? "font-semibold text-[var(--teal-900)]"
                  : ""
              }`}
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-[var(--bg-soft)] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 translate-x-full" />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={whatsappLink("Halo GC Plus, saya ingin konsultasi awal gratis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1fb557]"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          className={`group relative rounded-full p-2.5 text-gray-700 transition-colors duration-300 lg:hidden ${
            mobileOpen ? "text-[var(--teal-900)]" : "hover:text-[var(--teal-900)]"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="absolute inset-0 rounded-full bg-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative block">
            <Hamburger open={mobileOpen} />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x py-4">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`group relative overflow-hidden rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[var(--teal-900)]"
                    : "text-gray-700 hover:text-[var(--teal-900)]"
                }`}
              >
                <span className="absolute inset-0 -z-10 rounded-lg bg-[var(--bg-soft)] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 translate-x-full" />
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Halo GC Plus, saya ingin konsultasi awal gratis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#1fb557]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Konsultasi WA{" "}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}