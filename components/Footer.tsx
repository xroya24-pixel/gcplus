import Link from "next/link";
import { whatsappLink } from "@/lib/config";

const NAV = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Solutions", href: "/solutions" },
  { label: "Mengapa GC Plus", href: "/why-gc-plus" },
  { label: "Kontak", href: "/kontak" },
];

const PILLARS = [
  { label: "Pajak", href: "/layanan#tax" },
  { label: "Akuntansi", href: "/layanan#accounting" },
  { label: "Finance", href: "/layanan#finance" },
  { label: "HRD", href: "/layanan#hrd" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--teal-950)] text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="flex items-start justify-between gap-4 sm:flex-col sm:items-start lg:flex-row lg:items-center">
              <span className="text-xl leading-tight font-bold tracking-wide">
                GC Plus
              </span>
              <span className="text-[10px] tracking-widest text-[var(--yellow)] lg:ml-auto">
                TRUSTED • INTEGRITY • SOLUTIONS
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Your Business Control Partner. Pajak | Akuntansi | Finance | HRD.
            </p>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow)]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative block overflow-hidden rounded-lg px-2 py-1.5 text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    <span className="absolute inset-0 -z-10 rounded-lg bg-white/10 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 translate-x-full" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow)]">
              Empat Pilar
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PILLARS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative block overflow-hidden rounded-lg px-2 py-1.5 text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    <span className="absolute inset-0 -z-10 rounded-lg bg-white/10 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 translate-x-full" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow)]">
              Kontak
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>WhatsApp +62 852-8662-4831</li>
              <li>ganjar.consulting@gmail.com</li>
              <li>Bekasi Utara, Kota Bekasi, Jawa Barat</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © 2026 GC Plus. All Rights Reserved.
          </p>
          <a
            href={whatsappLink("Halo GC Plus, saya ingin konsultasi awal gratis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[var(--yellow)] px-5 py-2 text-sm font-medium text-[var(--teal-950)] transition hover:bg-[#e09c00] md:inline-block"
          >
            Konsultasi Awal Gratis →
          </a>
        </div>
      </div>
    </footer>
  );
}