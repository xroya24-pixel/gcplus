export const WHATSAPP_NUMBER = "6285286624831";

export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Solutions", href: "/solutions" },
  { label: "Mengapa GC Plus", href: "/why-gc-plus" },
  { label: "Kontak", href: "/kontak" },
];
