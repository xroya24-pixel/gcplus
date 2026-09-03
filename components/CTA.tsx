import { whatsappLink } from "@/lib/config";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ArrowRight } from "lucide-react";

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