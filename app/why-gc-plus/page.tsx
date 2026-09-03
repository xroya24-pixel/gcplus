import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GoldCTA } from "@/components/CTA";
import {
  Layers,
  Award,
  MessageSquare,
  RefreshCcw,
  Ear,
  Eye,
  FolderTree,
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mengapa GC Plus",
  description:
    "GC Plus adalah mitra yang memahami bahwa di balik setiap pekerjaan terdapat kebutuhan bisnis yang nyata.",
};

const reasons = [
  {
    icon: Layers,
    title: "TERPADU",
    sub: "Empat Pilar dalam Satu Mitra",
    desc: "Pajak. Akuntansi. Finance. HRD. Kebutuhan yang saling berhubungan dapat dikelola secara lebih selaras melalui satu mitra.",
  },
  {
    icon: Award,
    title: "BERPENGALAMAN",
    sub: "Pengalaman yang Dibangun Selama Hampir Dua Dekade",
    desc: "Kami terbiasa menangani kebutuhan klien lintas sektor, termasuk kebutuhan perpajakan, akuntansi, finance, HRD, serta pendampingan pemeriksaan dan pengawasan pajak. Pengalaman memberi kami perspektif.",
  },
  {
    icon: MessageSquare,
    title: "KOMUNIKATIF",
    sub: "Hal yang Kompleks Tidak Harus Sulit Dipahami",
    desc: "Kami menjelaskan kebutuhan dan pekerjaan dengan bahasa yang mudah dipahami. Karena Anda berhak memahami apa yang sedang dikerjakan untuk bisnis Anda.",
  },
  {
    icon: RefreshCcw,
    title: "TERKINI",
    sub: "Mengikuti Perkembangan Regulasi",
    desc: "Kebutuhan bisnis terus berubah. Begitu pula regulasi perpajakan dan ketenagakerjaan. Kami mengikuti perkembangan yang relevan dengan layanan dan kebutuhan bisnis Anda.",
  },
];

const context = [
  "Satu angka dapat memiliki banyak arti.",
  "Satu kesalahan administrasi dapat menimbulkan konsekuensi.",
  "Satu keputusan dapat memengaruhi banyak bagian bisnis.",
];

const workFlow = [
  { icon: Ear, t: "LISTEN", d: "Mendengarkan kebutuhan Anda." },
  { icon: Eye, t: "UNDERSTAND", d: "Memahami kondisi bisnis." },
  { icon: FolderTree, t: "ORGANIZE", d: "Menata informasi dan proses." },
  { icon: Lightbulb, t: "SOLVE", d: "Menentukan solusi yang relevan." },
  { icon: HeartHandshake, t: "SUPPORT", d: "Mendukung kebutuhan yang berkembang." },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: "TRUSTED",
    desc: "Proses yang jelas dan dapat diandalkan.",
  },
  {
    icon: BadgeCheck,
    title: "INTEGRITY",
    desc: "Ketelitian, transparansi, dan tanggung jawab.",
  },
  {
    icon: Lightbulb,
    title: "SOLUTIONS",
    desc: "Solusi yang disesuaikan dengan kebutuhan nyata bisnis.",
  },
];

export default function WhyGcPlusPage() {
  return (
    <>
      <PageHero
        badge="MENGAPA GC PLUS?"
        title="Mengapa GC Plus?"
        subtitle="Karena Anda membutuhkan lebih dari sekadar penyedia jasa. Anda membutuhkan mitra yang memahami bahwa di balik setiap pekerjaan terdapat kebutuhan bisnis yang nyata."
      />

      {/* ALASAN */}
      <section className="bg-white">
        <div className="container-x py-14 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="card-hover rounded-2xl border border-gray-100 bg-[var(--bg-soft)] p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--teal-900)] text-[var(--yellow)]">
                  <r.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-bold tracking-wide text-gray-900">
                  {r.title}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[var(--teal-accent)]">
                  {r.sub}
                </p>
                <p className="mt-4 text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTEKS */}
      <section style={{ background: "var(--bg-soft)" }}>
        <div className="container-x py-16 md:py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
            BUKAN SEKADAR MENGERJAKAN.{" "}
            <span className="text-[var(--teal-accent)]">
              KAMI MEMAHAMI KONTEKSNYA.
            </span>
          </h2>
          <div className="mx-auto mt-10 max-w-2xl space-y-3">
            {context.map((c) => (
              <p key={c} className="rounded-xl bg-white p-5 text-center font-medium text-gray-800 shadow-sm">
                “{c}”
              </p>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-gray-600">
            Karena itu, kami berusaha memahami konteks di balik pekerjaan, bukan
            sekadar menyelesaikan tugas.
          </p>
        </div>
      </section>

      {/* CARA KAMI BEKERJA */}
      <section className="bg-white">
        <div className="container-x py-14 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
            CARA KAMI BEKERJA
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
            {workFlow.map((w) => (
              <div
                key={w.t}
                className="card-hover rounded-2xl border border-gray-100 bg-[var(--bg-soft)] p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal-900)] text-[var(--yellow)]">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-bold tracking-widest text-[var(--teal-900)]">
                  {w.t}
                </h3>
                <p className="mt-1.5 text-sm text-gray-600">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMITMEN */}
      <section style={{ background: "var(--bg-soft)" }}>
        <div className="container-x py-14 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
            KOMITMEN KAMI
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="card-glow rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal-900)] text-[var(--yellow)]">
                  <c.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-wide text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg,#04255f 0%,#1050a0 100%)" }}>
        <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[var(--yellow)]/20 blur-2xl" />
        <div className="container-x relative py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">GC Plus</h2>
          <p className="mt-4 text-lg text-white/80">
            Hampir dua dekade pengalaman. Empat pilar layanan. Satu mitra untuk
            kebutuhan bisnis Anda.
          </p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--yellow)]">
            Your Business Control Partner
          </p>
          <p className="mt-2 text-sm text-white/60">
            Trusted • Integrity • Solutions
          </p>
          <div className="mt-10 flex justify-center">
            <GoldCTA label="Konsultasi Awal Gratis" />
          </div>
        </div>
      </section>
    </>
  );
}