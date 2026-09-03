import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/config";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export function PageHero({
  badge,
  title,
  subtitle,
  image,
  cta,
}: {
  badge: string;
  title: string;
  subtitle?: string;
  image?: { src: string; alt: string };
  cta?: { label: string; message?: string; href?: string };
}) {
  return (
    <section className="relative overflow-hidden rounded-b-[40px] text-white">
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04255f]/95 via-[#04255f]/85 to-[#04255f]/95" />
        </>
      )}
      {!image && (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg,#04255f 0%,#0f4a93 100%)" }}
        />
      )}
      <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-white/10 blur-xl" />
      <div className="absolute right-0 top-6 h-56 w-56 rounded-full bg-[var(--yellow)]/20 blur-2xl" />
      <div className="container-x relative py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-white"
        >
          ← Beranda
        </Link>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/70">{subtitle}</p>
        )}
        {cta && (
          <a
            href={cta.href ?? whatsappLink(cta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] px-7 py-3.5 text-base font-bold text-[var(--teal-950)] transition hover:bg-[#e09c00]"
          >
            {cta.label} <ArrowRight className="h-5 w-5" />
          </a>
        )}
        <span className="mt-6 inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--yellow)]">
          {badge}
        </span>
      </div>
    </section>
  );
}

export function WhatsAppCTA({
  message = "Halo GC Plus, saya ingin konsultasi awal gratis.",
  label = "Konsultasi WA",
  className = "",
  outline = false,
}: {
  message?: string;
  label?: string;
  className?: string;
  outline?: boolean;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
        outline
          ? "border-2 border-[var(--teal-900)] text-[var(--teal-900)] hover:bg-[var(--teal-900)] hover:text-white"
          : "bg-[#25D366] text-white hover:bg-[#1fb557]"
      } ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}

export function SectionHeading({
  title,
  desc,
  light,
}: {
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <h2
        className={`text-3xl font-bold tracking-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 ${light ? "text-white/70" : "text-gray-600"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}

export function GoldCTA({
  message = "Halo GC Plus, saya ingin konsultasi awal gratis.",
  label = "Konsultasi Awal Gratis",
  className = "",
}: {
  message?: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] px-7 py-3.5 text-base font-bold text-[var(--teal-950)] transition hover:bg-[#e09c00] ${className}`}
    >
      {label} <ArrowRight className="h-5 w-5" />
    </a>
  );
}