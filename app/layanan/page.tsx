import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WhatsAppCTA } from "@/components/CTA";
import {
  Receipt,
  BookOpenCheck,
  Wallet,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "GC Plus membantu individu dan perusahaan mengelola kebutuhan Pajak, Akuntansi, Finance, dan HRD melalui layanan profesional yang komprehensif.",
};

type SubBlock = { title: string; items: string[] };
type Pillar = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  intro: string;
  blocks: SubBlock[];
};

const pillars: Pillar[] = [
  {
    id: "tax",
    label: "PAJAK",
    icon: Receipt,
    tagline: "Kepatuhan, pendampingan, dan strategi pajak yang tepat",
    intro:
      "Kami membantu perusahaan memenuhi kewajiban perpajakan dengan benar, tertib, dan sesuai regulasi.",
    blocks: [
      {
        title: "Kepatuhan Pajak Rutin",
        items: [
          "Penghitungan dan pelaporan SPT Masa (PPh 21/23/26, PPN, PPh Final)",
          "Penyusunan dan pelaporan SPT Tahunan (Orang Pribadi & Badan)",
          "Rekonsiliasi fiskal dan koreksi laba rugi komersial ke fiskal",
        ],
      },
      {
        title: "Pendampingan Pemeriksaan & Sengketa Pajak",
        items: [
          "Pendampingan menjawab Surat Permintaan Penjelasan atas Data dan/atau Keterangan (SP2DK)",
          "Pendampingan dalam pemeriksaan pajak dan pemeriksaan bukti permulaan",
          "Penyusunan surat keberatan, banding, dan pengajuan Pengadilan Pajak",
          "Analisis risiko pajak sebelum dan selama proses pemeriksaan",
        ],
      },
      {
        title: "Perencanaan Pajak (Tax Planning)",
        items: [
          "Strategi efisiensi pajak yang legal dan sesuai regulasi",
          "Tax due diligence untuk akuisisi, merger, atau investasi",
          "Review struktur transaksi dan dampak pajaknya",
        ],
      },
      {
        title: "Administrasi & Konsultasi",
        items: [
          "Pengurusan NPWP, PKP, dan perubahan data perpajakan",
          "Konsultasi rutin atas pertanyaan/isu perpajakan harian",
          "Update dan sosialisasi peraturan pajak terbaru yang relevan dengan bisnis Anda",
        ],
      },
    ],
  },
  {
    id: "accounting",
    label: "AKUNTANSI",
    icon: BookOpenCheck,
    tagline: "Pencatatan rapi, laporan akurat, tata kelola yang tertib",
    intro:
      "Kami menyusun pembukuan dan laporan keuangan yang dapat diandalkan untuk mendukung keputusan bisnis.",
    blocks: [
      {
        title: "Pembukuan & Pencatatan",
        items: [
          "Pencatatan transaksi harian (bulanan/mingguan sesuai kebutuhan)",
          "Penyusunan jurnal, buku besar, dan neraca saldo",
          "Rekonsiliasi bank dan kas",
        ],
      },
      {
        title: "Penyusunan Laporan Keuangan",
        items: [
          "Laporan Laba Rugi, Neraca, Arus Kas, dan Perubahan Ekuitas",
          "Laporan keuangan sesuai standar SAK EMKM / SAK ETAP / PSAK",
          "Laporan keuangan konsolidasi (untuk grup perusahaan)",
        ],
      },
      {
        title: "Sistem & Tata Kelola Akuntansi",
        items: [
          "Penyusunan atau perapihan Chart of Account (CoA)",
          "Implementasi software akuntansi (Accurate, Zahir, atau sistem lain)",
          "Penyusunan SOP keuangan dan pengendalian internal",
        ],
      },
      {
        title: "Audit Kesiapan (Audit Readiness)",
        items: [
          "Persiapan dokumen sebelum audit oleh auditor independen",
          "Pendampingan proses audit tahunan",
        ],
      },
    ],
  },
  {
    id: "finance",
    label: "FINANCE",
    icon: Wallet,
    tagline: "Perencanaan, analisis, dan dukungan permodalan",
    intro:
      "Kami membantu Anda merencanakan, menganalisis, dan mengelola keuangan bisnis dengan lebih terkendali.",
    blocks: [
      {
        title: "Perencanaan & Analisis Keuangan",
        items: [
          "Penyusunan anggaran (budgeting) dan proyeksi keuangan",
          "Analisis rasio keuangan dan kesehatan bisnis",
          "Cash flow forecasting dan manajemen likuiditas",
        ],
      },
      {
        title: "Financial Modelling & Valuasi",
        items: [
          "Penyusunan model keuangan untuk rencana bisnis atau investasi",
          "Analisis kelayakan usaha (feasibility study)",
          "Valuasi bisnis sederhana",
        ],
      },
      {
        title: "Pendampingan Permodalan",
        items: [
          "Penyusunan dokumen keuangan untuk pengajuan kredit/pinjaman bank",
          "Pendampingan pencarian investor atau mitra usaha",
          "Review struktur permodalan perusahaan",
        ],
      },
      {
        title: "Manajemen Biaya",
        items: [
          "Analisis efisiensi biaya operasional",
          "Rekomendasi optimalisasi struktur biaya",
        ],
      },
    ],
  },
  {
    id: "hrd",
    label: "HRD",
    icon: Users,
    tagline: "Administrasi, kebijakan, dan pengembangan SDM",
    intro:
      "Kami membantu menata administrasi, kebijakan, dan pengembangan sumber daya manusia sesuai regulasi.",
    blocks: [
      {
        title: "Administrasi Kepegawaian",
        items: [
          "Penyusunan kontrak kerja (PKWT/PKWTT) sesuai UU Ketenagakerjaan",
          "Perhitungan dan administrasi payroll (gaji, THR, lembur)",
          "Pengurusan BPJS Ketenagakerjaan dan BPJS Kesehatan karyawan",
        ],
      },
      {
        title: "Kebijakan & Struktur Organisasi",
        items: [
          "Penyusunan Peraturan Perusahaan (PP) atau Perjanjian Kerja Bersama (PKB)",
          "Penyusunan struktur organisasi dan uraian jabatan (job description)",
          "Penyusunan sistem remunerasi dan grading jabatan",
        ],
      },
      {
        title: "Rekrutmen & Pengembangan",
        items: [
          "Bantuan proses rekrutmen (screening, wawancara, seleksi)",
          "Penyusunan sistem penilaian kinerja (KPI/performance appraisal)",
          "Rekomendasi program pelatihan dan pengembangan karyawan",
        ],
      },
      {
        title: "Kepatuhan Ketenagakerjaan",
        items: [
          "Review kepatuhan terhadap peraturan ketenagakerjaan terbaru",
          "Pendampingan penanganan perselisihan hubungan industrial",
          "Prosedur PHK yang sesuai regulasi",
        ],
      },
    ],
  },
];

export default function LayananPage() {
  return (
    <>
      <PageHero
        badge="LAYANAN KAMI"
        title="Layanan Kami"
        subtitle="Mitra Terpadu untuk Empat Pilar Penting Bisnis Anda"
      />

      {/* INTRO */}
      <section className="bg-white">
        <div className="container-x py-14 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
              Tentang Layanan Kami
            </h2>
            <p className="mt-3 text-gray-600">
              Kami hadir sebagai mitra terpercaya bagi individu dan perusahaan
              dalam mengelola empat pilar penting operasional bisnis: Pajak,
              Akuntansi, Keuangan (Finance), dan Sumber Daya Manusia (HRD).
              Dengan pendekatan yang komprehensif dan bahasa yang mudah
              dipahami, kami membantu Anda fokus mengembangkan bisnis sementara
              urusan administratif dan kepatuhan ditangani secara profesional.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {pillars.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--teal-800)]/30 bg-[var(--bg-soft)] px-4 py-2 text-sm font-semibold text-[var(--teal-900)] transition hover:bg-[var(--teal-900)] hover:text-white"
                >
                  <p.icon className="h-4 w-4" /> {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILAR DETAIL */}
      {pillars.map((p, idx) => (
        <section
          key={p.id}
          id={p.id}
          className={idx % 2 === 0 ? "bg-white" : "bg-[var(--bg-soft)]"}
        >
          <div className="container-x py-14 md:py-16">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--teal-900)] text-[var(--yellow)]">
                <p.icon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-widest text-[var(--teal-accent)]">
                  LAYANAN {p.label}
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                  {p.tagline}
                </h2>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-gray-600">{p.intro}</p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {p.blocks.map((b) => (
                <div
                  key={b.title}
                  className="card-hover rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
                >
                  <h3 className="font-bold text-gray-900">{b.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {b.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--yellow)]" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-white">
        <div className="container-x pb-16">
          <div
            className="flex flex-col items-start justify-between gap-6 rounded-3xl p-8 text-white sm:flex-row sm:items-center md:p-10"
            style={{ background: "linear-gradient(135deg,#04255f,#0f4a93)" }}
          >
            <div>
              <h3 className="text-2xl font-bold">
                Tidak yakin layanan apa yang Anda butuhkan?
              </h3>
              <p className="mt-2 text-white/70">
                Mulai dari satu kebutuhan, atau kelola keempatnya sekaligus.
              </p>
            </div>
            <WhatsAppCTA
              label="Konsultasi Awal Gratis"
              className="bg-[var(--yellow)] text-[var(--teal-950)] hover:bg-[#e09c00] shrink-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}