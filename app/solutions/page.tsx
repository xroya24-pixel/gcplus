import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoldCTA, WhatsAppCTA } from "@/components/CTA";
import { Receipt, BookOpenCheck, Wallet, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Pilihan paket layanan GC Plus yang dapat disesuaikan dengan skala dan tahap pertumbuhan bisnis Anda.",
};

const packages = [
  {
    name: "Starter",
    for: "UMKM / usaha baru",
    scope: "Pembukuan dasar + lapor pajak bulanan & tahunan + konsultasi ringan",
  },
  {
    name: "Growth",
    for: "Perusahaan berkembang",
    scope:
      "Starter + laporan keuangan lengkap + payroll & administrasi HRD dasar + tax planning ringan",
  },
  {
    name: "Enterprise",
    for: "Perusahaan menengah–besar",
    scope:
      "Growth + pendampingan pemeriksaan pajak + financial modelling + kebijakan HRD lengkap + audit readiness",
  },
  {
    name: "Custom",
    for: "Kebutuhan spesifik",
    scope:
      "Kombinasi layanan sesuai kebutuhan Anda (misalnya khusus pendampingan SP2DK, atau khusus payroll)",
  },
];

const process = [
  {
    no: "01",
    title: "Konsultasi Awal (Gratis)",
    desc: "Diskusi kebutuhan dan kondisi bisnis Anda saat ini",
  },
  {
    no: "02",
    title: "Assessment & Proposal",
    desc: "Kami memetakan kebutuhan dan menyusun proposal serta estimasi biaya",
  },
  {
    no: "03",
    title: "Kesepakatan & Onboarding",
    desc: "Penandatanganan perjanjian kerja sama dan pengumpulan data awal",
  },
  {
    no: "04",
    title: "Pelaksanaan Layanan",
    desc: "Pengerjaan rutin sesuai paket yang dipilih, dengan pelaporan berkala",
  },
  {
    no: "05",
    title: "Review & Evaluasi",
    desc: "Evaluasi berkala untuk memastikan layanan tetap relevan dengan perkembangan bisnis Anda",
  },
];

const pillars = [
  { label: "PAJAK", href: "/layanan#tax", icon: Receipt, desc: "Kepatuhan & pendampingan" },
  { label: "ACCOUNTING", href: "/layanan#accounting", icon: BookOpenCheck, desc: "Pembukuan & laporan" },
  { label: "FINANCE", href: "/layanan#finance", icon: Wallet, desc: "Perencanaan & analisis" },
  { label: "HRD", href: "/layanan#hrd", icon: Users, desc: "Administrasi & SDM" },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="SOLUTIONS"
        title="Solusi Sesuai Kebutuhan Bisnis"
        subtitle="Tidak setiap bisnis membutuhkan layanan yang sama. Karena itu, kami menyediakan beberapa pilihan yang dapat disesuaikan dengan skala dan tahap pertumbuhan bisnis Anda."
      />

      {/* PAKET LAYANAN */}
      <section className="bg-white">
        <div className="container-x py-14 md:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
            PILIHAN PAKET LAYANAN
          </h2>
          <p className="mt-2 text-gray-600">
            Sesuaikan dengan skala dan tahap pertumbuhan bisnis Anda.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse overflow-hidden rounded-2xl text-left shadow-sm">
              <thead>
                <tr className="bg-[var(--teal-900)] text-white">
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">
                    Paket
                  </th>
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">
                    Cocok Untuk
                  </th>
                  <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">
                    Cakupan Utama
                  </th>
                </tr>
              </thead>
              <tbody>
                {packages.map((p, i) => (
                  <tr
                    key={p.name}
                    className={i % 2 === 0 ? "bg-white" : "bg-[var(--bg-soft)]"}
                  >
                    <td className="border-t border-gray-100 px-6 py-5">
                      <span className="font-bold text-[var(--teal-900)]">
                        {p.name}
                      </span>
                    </td>
                    <td className="border-t border-gray-100 px-6 py-5 text-gray-600">
                      {p.for}
                    </td>
                    <td className="border-t border-gray-100 px-6 py-5 text-gray-600">
                      {p.scope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl rounded-xl bg-[var(--bg-soft)] p-5 text-sm text-gray-600">
            Rincian harga dan ruang lingkup detail akan disesuaikan setelah sesi
            konsultasi awal (assessment kebutuhan) untuk memastikan paket yang
            paling tepat bagi kondisi bisnis Anda.
          </p>

          <div className="mt-8">
            <GoldCTA label="Konsultasi Awal Gratis" />
          </div>
        </div>
      </section>

      {/* PROSES KERJA SAMA */}
      <section style={{ background: "var(--bg-soft)" }}>
        <div className="container-x py-14 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
            PROSES KERJA SAMA
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Alur kerja yang transparan dari awal hingga berjalan.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((s) => (
              <div
                key={s.no}
                className="card-hover rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-bold tracking-widest text-[var(--yellow)]">
                  {s.no}
                </span>
                <h3 className="mt-3 font-bold leading-snug text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SATU KEBUTUHAN ATAU EMPAT PILAR */}
      <section className="bg-white">
        <div className="container-x py-14 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
            SATU KEBUTUHAN ATAU EMPAT PILAR SEKALIGUS?
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Tidak masalah. Anda dapat menggunakan satu layanan, kombinasi
            beberapa layanan, atau mengelola keempatnya bersama kami.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="card-hover rounded-2xl border border-gray-100 bg-[var(--bg-soft)] p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal-900)] text-[var(--yellow)]">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-bold tracking-widest text-[var(--teal-900)]">
                  {p.label}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <Link
                  href={p.href}
                  className="mt-4 inline-block text-xs font-semibold text-[var(--teal-accent)] hover:text-[var(--teal-900)]"
                >
                  Pelajari →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center font-semibold text-gray-900">
            Semuanya dapat disesuaikan dengan kebutuhan bisnis Anda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppCTA label="Konsultasi Via WhatsApp" />
            <GoldCTA label="Ceritakan Kebutuhan Anda" />
          </div>
        </div>
      </section>
    </>
  );
}