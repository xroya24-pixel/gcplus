import Image from "next/image";
import Link from "next/link";
import { Receipt, BookOpenCheck, Wallet, Users, ArrowRight } from "lucide-react";
import { GoldCTA } from "@/components/CTA";
import { SearchCard } from "@/components/SearchCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <GrowingBusiness />
      <ConnectedPillars />
      <StartFromNeed />
      <ClosingCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[40px] text-white">
      <Image
        src="/images/hero.jpg"
        alt="Profesional mengelola kebutuhan bisnis"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04255f]/95 via-[#04255f]/85 to-[#04255f]/95" />
      <div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-white/10 blur-xl" />
      <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-purple-400/20 blur-2xl" />
      <div className="absolute left-24 bottom-8 h-40 w-40 rounded-full bg-yellow-300/20 blur-2xl" />

      <div className="container-x relative pt-10 pb-20 md:pt-12 md:pb-24">
        <div className="mx-auto max-w-3xl pt-4 text-center">
          <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-[var(--yellow)]">
            YOUR BUSINESS CONTROL PARTNER
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-[44px]">
            GC Plus —{" "}
            <span className="text-[var(--yellow)]">Bisnis tumbuh</span>
          </h1>
          <p className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Kebutuhan{" "}
            <span className="font-script font-normal text-[var(--yellow)]">
              Ikut Berkembang.
            </span>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium text-white/80 md:text-lg">
            Ketika bisnis semakin besar, semakin banyak hal yang perlu
            diperhatikan. Pajak. Akuntansi. Keuangan. HRD.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/60">
            Kami hadir sebagai mitra terpadu untuk membantu Anda mengelola empat
            pilar penting tersebut secara profesional, tertata, dan sesuai
            kebutuhan bisnis.
          </p>
          <p className="mx-auto mt-5 max-w-xl rounded-2xl border border-white/20 bg-white/10 p-3.5 text-base font-semibold text-[var(--yellow)]">
            Anda fokus pada bisnis. Kami membantu menangani hal-hal penting di
            balik operasionalnya.
          </p>

          <div className="mt-4 hidden items-center gap-3 rounded-full bg-white/10 border border-white/20 py-2 pl-4 pr-5 sm:inline-flex">
            <span className="text-sm font-bold text-[var(--yellow)]">TCS</span>
            <div className="flex -space-x-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/40 bg-soft text-[10px] font-bold text-[var(--teal-900)]">T</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/40 bg-soft text-[10px] font-bold text-[var(--teal-900)]">A</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/40 bg-soft text-[10px] font-bold text-[var(--teal-900)]">F</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white/40 bg-soft text-[10px] font-bold text-[var(--teal-900)]">H</span>
            </div>
            <span className="text-xs text-white/80">Pajak • Akuntansi • Finance • HRD</span>
          </div>
        </div>
      </div>

      <div className="container-x relative -mt-24 pb-6 md:-mt-20">
        <SearchCard />
      </div>
    </section>
  );
}

/* ---------------- EMPAT PILAR ---------------- */
function Pillars() {
  const pillars = [
    {
      label: "PAJAK",
      icon: Receipt,
      desc: "Kepatuhan, pendampingan, dan strategi pajak.",
      items: ["Kepatuhan Pajak Rutin", "Pendampingan Pemeriksaan"],
    },
    {
      label: "AKUNTANSI",
      icon: BookOpenCheck,
      desc: "Pembukuan, laporan keuangan, dan tata kelola akuntansi.",
      items: ["Pembukuan & Pencatatan", "Laporan Keuangan"],
    },
    {
      label: "FINANCE",
      icon: Wallet,
      desc: "Perencanaan, analisis, cash flow, dan dukungan permodalan.",
      items: ["Perencanaan & Analisis", "Financial Modelling"],
    },
    {
      label: "HRD",
      icon: Users,
      desc: "Administrasi, kebijakan, rekrutmen, dan pengembangan SDM.",
      items: ["Administrasi Kepegawaian", "Kebijakan & Struktur"],
    },
  ];
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-20">
        <h2 className="max-w-3xl text-center text-2xl font-bold tracking-tight text-gray-900 md:mx-auto md:text-[32px]">
          MITRA TERPADU UNTUK EMPAT PILAR PENTING BISNIS ANDA
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          Satu bisnis dapat memiliki banyak kebutuhan.
        </p>
        <ul className="mx-auto mt-4 max-w-2xl space-y-2 text-gray-600">
          <li className="flex items-center justify-center gap-2 text-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--yellow)]" />
            Ada kewajiban pajak yang harus dipenuhi.
          </li>
          <li className="flex items-center justify-center gap-2 text-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--yellow)]" />
            Ada transaksi yang harus dicatat.
          </li>
          <li className="flex items-center justify-center gap-2 text-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--yellow)]" />
            Ada arus kas yang perlu direncanakan.
          </li>
          <li className="flex items-center justify-center gap-2 text-center">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--yellow)]" />
            Ada karyawan yang perlu dikelola.
          </li>
        </ul>
        <p className="mt-6 text-center font-semibold text-gray-900">
          GC Plus mengintegrasikan empat layanan utama:
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="card-hover flex flex-col rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm sm:p-6"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--teal-900)] text-[var(--yellow)]">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-xs font-bold tracking-widest text-[var(--teal-900)] sm:mt-4 sm:text-sm">
                {p.label}
              </h3>
              <p className="mt-2 flex-1 text-xs text-gray-600 sm:text-sm">{p.desc}</p>
              <ul className="mt-3 space-y-1.5 border-t border-gray-100 pt-3 sm:mt-4 sm:pt-4">
                {p.items.map((i) => (
                  <li key={i} className="flex items-center justify-center gap-2 text-[11px] text-gray-500 sm:text-xs">
                    <ArrowRight className="h-3 w-3 shrink-0 text-[var(--yellow)]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--teal-accent)] hover:text-[var(--teal-900)] sm:text-base"
          >
            Lihat Detail Layanan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- KETIKA BISNIS BERKEMBANG ---------------- */
function GrowingBusiness() {
  const quotes = [
    "Transaksi semakin banyak, tetapi pembukuan belum tertata.",
    "Saya ingin memastikan kewajiban pajak perusahaan sudah benar.",
    "Omzet bertambah, tetapi cash flow masih terasa ketat.",
    "Karyawan bertambah, dan administrasi HR semakin kompleks.",
    "Saya membutuhkan laporan yang dapat membantu mengambil keputusan.",
  ];
  return (
    <section style={{ background: "var(--bg-soft)" }}>
      <div className="container-x py-16 md:py-20">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
          KETIKA BISNIS BERKEMBANG,{" "}
          <span className="text-[var(--teal-accent)]">
            PENGELOLAANNYA PUN PERLU BERTUMBUH.
          </span>
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Mungkin saat ini Anda sedang menghadapi:
        </p>
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory md:pb-0 md:snap-none md:overflow-visible md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3" style={{ scrollbarWidth: "none" }}>
          {quotes.map((q, i) => (
            <div
              key={q}
              className="card-hover flex min-w-[78vw] snap-center items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:min-w-[60vw] md:min-w-0 md:p-6"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--teal-900)] text-xs font-bold text-[var(--yellow)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="flex-1 text-sm font-medium leading-relaxed text-gray-800 md:text-base">
                “{q}”
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg font-semibold text-gray-900">
          Jika salah satunya terasa familiar, kita dapat mulai dari sana.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SATU BISNIS, EMPAT PILAR ---------------- */
function ConnectedPillars() {
  const steps = [
    {
      label: "TAX",
      desc: "Data akuntansi mendukung perpajakan.",
    },
    {
      label: "ACCOUNTING",
      desc: "Laporan keuangan membantu memahami kondisi finance.",
    },
    {
      label: "FINANCE",
      desc: "Payroll berhubungan dengan accounting dan pajak.",
    },
    {
      label: "HRD",
      desc: "Dan seluruhnya menjadi bagian dari operasional bisnis.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-20">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
          SATU BISNIS.{" "}
          <span className="text-[var(--teal-accent)]">
            EMPAT PILAR YANG SALING TERHUBUNG.
          </span>
        </h2>
        <div className="mt-12 grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.label}
              className="rounded-2xl p-4 text-center sm:p-6"
              style={{ background: "var(--bg-soft)" }}
            >
              <span className="text-xs font-bold tracking-widest text-[var(--teal-accent)]">
                {step.label}
              </span>
              <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-8 rounded-3xl p-8 text-center text-white md:p-10"
          style={{ background: "linear-gradient(135deg,#04255f,#0f4a93)" }}
        >
          <h3 className="text-xl font-bold md:text-2xl">
            Ketika dikelola secara selaras, bisnis menjadi lebih mudah dipahami
            dan dikendalikan.
          </h3>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MULAI DARI KEBUTUHAN ANDA ---------------- */
function StartFromNeed() {
  const flow = [
    "CONSULTATION",
    "ASSESSMENT",
    "PROPOSAL",
    "ONBOARDING",
    "IMPLEMENTATION",
    "REPORTING",
    "REVIEW",
  ];
  return (
    <section style={{ background: "var(--bg-soft)" }}>
      <div className="container-x py-16 md:py-20">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-[32px]">
          MULAI DARI KEBUTUHAN ANDA
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Anda tidak harus mengetahui layanan apa yang paling tepat. Ceritakan
          kondisi bisnis Anda. Kami akan membantu memahami kebutuhan,
          memetakan ruang lingkup, dan menentukan layanan yang sesuai.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {flow.map((f, i) => (
            <div key={f} className="flex items-center gap-1.5 sm:gap-2">
              <span className="rounded-full border border-[var(--teal-800)]/40 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[var(--teal-900)] sm:px-4 sm:py-2 sm:text-sm">
                {f}
              </span>
              {i < flow.length - 1 && (
                <ArrowRight className="h-3 w-3 text-[var(--teal-800)]/40 sm:h-4 sm:w-4" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GoldCTA label="Ceritakan Kebutuhan Anda" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- CLOSING CTA ---------------- */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg,#04255f 0%,#1050a0 100%)" }}>
      <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-[var(--yellow)]/20 blur-2xl" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-xl" />
      <div className="container-x relative py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-4xl">GC Plus</h2>
        <p className="mt-4 text-lg text-white/80">
          Pajak. Akuntansi. Finance. HRD.
        </p>
        <p className="mx-auto mt-2 max-w-xl font-medium text-white/90">
          Satu mitra untuk kebutuhan penting bisnis Anda.
        </p>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--yellow)]">
          Your Business Control Partner
        </p>
        <p className="mt-2 text-sm text-white/60">Trusted • Integrity • Solutions</p>
        <div className="mt-10 flex justify-center">
          <GoldCTA label="Konsultasi Awal Gratis" />
        </div>
      </div>
    </section>
  );
}