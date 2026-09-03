import { whatsappLink } from "@/lib/config";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Halo GC Plus, saya ingin konsultasi mengenai bisnis saya.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  );
}

