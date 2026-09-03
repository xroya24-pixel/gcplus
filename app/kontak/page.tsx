import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoldCTA } from "@/components/CTA";
import {
  Receipt,
  BookOpenCheck,
  Wallet,
  Users,
  Layers,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi GC Plus untuk konsultasi awal gratis. WhatsApp, email, dan alamat.",
};

const needs = [
  "Jasa perpajakan.",
  "Jasa pembukuan dan akuntansi.",
  "Jasa laporan keuangan.",
  "Jasa finance dan financial modelling.",
  "Jasa payroll dan HRD.",
  "Atau Anda membutuhkan beberapa layanan sekaligus.",
];

const needCards = [
  { label: "TAX", icon: Receipt, q: "Butuh bantuan mengelola kewajiban atau pemeriksaan pajak?" },
  { label: "ACCOUNTING", icon: BookOpenCheck, q: "Membutuhkan pembukuan atau laporan keuangan yang lebih tertata?" },
  { label: "FINANCE", icon: Wallet, q: "Ingin memahami cash flow, budgeting, atau proyeksi bisnis?" },
  { label: "HRD", icon: Users, q: "Membutuhkan payroll, administrasi karyawan, atau sistem HR?" },
  { label: "COMBINATION", icon: Layers, q: "Membutuhkan beberapa layanan dalam satu mitra?" },
];

const consultTopics = [
  "Kondisi bisnis Anda saat ini.",
  "Kebutuhan yang sedang dihadapi.",
  "Layanan yang diperlukan.",
  "Ruang lingkup pekerjaan.",
  "Tahapan kerja sama.",
];

const pillars = [
  { label: "PAJAK", desc: "Kepatuhan & pendampingan" },
  { label: "AKUNTANSI", desc: "Pembukuan & laporan" },
  { label: "FINANCE", desc: "Perencanaan & analisis" },
  { label: "HRD", desc: "Administrasi & SDM" },
];

export default function KontakPage() {
  return (
    <>
      <PageHero
        badge="KONTAK"
        title="Mari Mulai dari Kebutuhan Anda"
        subtitle="Setiap bisnis memiliki kebutuhan yang berbeda."
      />

      {/* KEBUTUHAN */}
      <section className="bg-white">
        <div className="container-x py-14 md:py-16">
          <p className="text-gray-600">Mungkin Anda sedang mencari:</p>
          <ul className="mt-4 space-y-2">
            {needs.map((n) => (
              <li key={n} className="flex items-center gap-3 text-gray-700">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--yellow)]" />
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl font-medium text-gray-800">
            Ceritakan kepada kami. Kami akan membantu memahami kebutuhan Anda
            dan menentukan ruang lingkup layanan yang paling sesuai.
          </p>
        </div>
      </section>

      {/* WHAT DO YOU NEED */}
      <section style={{ background: "var(--bg-soft)" }}>
        <div className="container-x py-14 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
            WHAT DO YOU NEED?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {needCards.map((n) => (
              <div
                key={n.label}
                className="card-hover flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--teal-900)] text-[var(--yellow)]">
                  <n.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-[var(--teal-900)]">
                    {n.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-600">{n.q}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-2xl p-6 text-center text-white sm:col-span-2 lg:col-span-1" style={{ background: "linear-gradient(135deg,#04255f,#0f4a93)" }}>
              <a
                href={whatsappLink("Halo GC Plus, saya ingin menceritakan kebutuhan bisnis saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--yellow)] hover:underline"
              >
                Ceritakan kebutuhan Anda →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KONSULTASI AWAL */}
      <section className="bg-white">
        <div className="container-x py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
                KONSULTASI AWAL
              </h2>
              <p className="mt-2 font-semibold text-[var(--teal-accent)]">
                Gratis untuk memahami kebutuhan Anda.
              </p>
              <p className="mt-4 text-gray-600">
                Dalam konsultasi awal, kita dapat membicarakan:
              </p>
              <ul className="mt-5 space-y-3">
                {consultTopics.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--yellow)]" />
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-gray-600">
                Setelah itu, kami dapat melakukan assessment dan menyusun
                proposal sesuai kebutuhan.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-[var(--bg-soft)] p-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-[28px]">
                MULAI DARI SATU KEBUTUHAN.{" "}
                <span className="text-[var(--teal-accent)]">
                  ATAU KEEMPATNYA SEKALIGUS.
                </span>
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm"
                  >
                    <h3 className="text-sm font-bold tracking-widest text-[var(--teal-900)]">
                      {p.label}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUBUNGI GC PLUS */}
      <section style={{ background: "var(--bg-soft)" }}>
        <div className="container-x py-14 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
            HUBUNGI GC PLUS
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <a
              href={whatsappLink("Halo GC Plus, saya ingin menjadwalkan konsultasi awal.")}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-gray-900">WhatsApp</h3>
                <p className="mt-1 text-gray-600">+62 852-8662-4831</p>
                <p className="mt-1 text-xs text-gray-400">
                  Klik untuk langsung memulai percakapan.
                </p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--teal-900)] text-[var(--yellow)]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">ganjar.consulting@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--teal-900)] text-[var(--yellow)]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-gray-900">Alamat</h3>
                <p className="mt-1 text-gray-600">
                  Indonesia (konsultasi online dan on-site tersedia)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--teal-900)] text-[var(--yellow)]">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-gray-900">Jam Operasional</h3>
                <p className="mt-1 text-gray-600">
                  Senin–Jumat (dapat dihubungi via WhatsApp)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <GoldCTA label="Jadwalkan Konsultasi" />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg,#04255f 0%,#1050a0 100%)" }}>
        <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[var(--yellow)]/20 blur-2xl" />
        <div className="container-x relative py-16 text-center md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--yellow)]">
            GC Plus
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
            YOUR BUSINESS CONTROL PARTNER
          </h2>
          <p className="mt-3 text-white/70">
            Pajak • Akuntansi • Finance • HRD
          </p>
          <p className="mt-2 text-sm text-white/60">Trusted • Integrity • Solutions</p>
          <p className="mx-auto mt-8 max-w-xl text-white/80">
            Bisnis Anda memiliki banyak hal untuk dipikirkan. Biarkan kami
            membantu mengelola bagian yang membutuhkan ketelitian, keteraturan,
            dan perhatian profesional.
          </p>
          <div className="mt-10 flex justify-center">
            <GoldCTA label="Konsultasi Awal Gratis" />
          </div>
        </div>
      </section>
    </>
  );
}