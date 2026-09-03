# PRD — Website GC Plus

**Product Requirements Document**
Versi: 1.0 | Tanggal: 1 September 2026
Author: GC Plus / Developer

---

## 1. Ringkasan Eksekutif

Website GC Plus adalah **corporate landing website** (multipage) untuk
mempromosikan jasa GC Plus sebagai **Business Control Partner** bagi para Owner
bisnis. Fokus utama situs adalah:

- Menjelaskan positioning GC Plus sebagai mitra kontrol bisnis (Tax, Finance &
  Accounting, HRD).
- Mengedukasi calon klien tentang pentingnya sistem kontrol back-office.
- Mengarahkan pengunjung untuk melakukan **konsultasi via WhatsApp**.

Situs bersifat **informatif + conversion-focused** dengan CTA utama berupa
tombol WhatsApp.

---

## 2. Tujuan & Sasaran

### Tujuan Bisnis
1. Membangun kredibilitas GC Plus sebagai partner kontrol bisnis.
2. Menghasilkan lead melalui konsultasi WhatsApp.
3. Menjelaskan nilai (value) tiap layanan kepada calon klien.

### Sasaran/Goal Metrik (rekomendasi)
- Waktu muat halaman < 3 detik (mobile).
- SEO-friendly: meta tags, semantic HTML, structured data pada tiap halaman.
- Fully responsive (mobile, tablet, desktop).

---

## 3. Target Audiens

- **Primary**: Owner / pemilik bisnis menengah yang sedang berkembang.
- Ciri-ciri:
  - Transaksi bisnis semakin banyak.
  - Karyawan mulai bertambah.
  - Administrasi semakin kompleks.
  - Kesulitan mengontrol cash flow.
  - Ingin laporan keuangan rapi / pajak tertata.
  - Ingin fungsi back-office tidak bergantung penuh pada Owner.

---

## 4. Sitemap & Navigasi

```
/                          → Beranda
/layanan/tax               → Layanan Tax
/layanan/finance-accounting→ Layanan Finance & Accounting
/layanan/hrd               → Layanan HRD
/tentang-kami              → Tentang Kami
/insight                   → Insight
/resources                 → Resources
/kontak                    → Kontak
```

### Navigasi Utama (Navbar)
Beranda | Layanan | Tentang Kami | Insight | Resources | Kontak

- Menu **Layanan** berupa dropdown (Tax, Finance & Accounting, HRD).
- Sisi kanan navbar: tombol CTA **"Konsultasi Via WhatsApp"**.

---

## 5. Konten per Halaman

### 5.1 Beranda (`/`)
- **Hero**: "GC PLUS — BUSINESS CONTROL PARTNER" + tagline "Pajak Lebih
  Terkendali. Keuangan Lebih Jelas. Bisnis Lebih Tenang." + CTA WhatsApp.
- **Intro**: "Tell us what's happening in your business..."
- **"Is Your Business Under Control?"**: 4 pertanyaan kunci (Tax, Cash Flow,
  Numbers, HR).
- **"What's Holding Your Business Back?"**: 3 kartu masalah (Tax, Finance,
  HRD) dengan CTA masing-masing.
- **"Beyond Administration. Building Business Control."**: diagram alur
  Tax → Accounting → Finance → HRD → Owner.
- **Our Services**: 3 kartu layanan + link ke halaman layanan.
- **"We Start With Your Problem"**: proses 7 langkah
  (Tell us → Map → Identify → Prioritize → Recommend → Implement → Monitor).
- **Business Control Check-up**: 4 area penilaian (Tax, Finance, Accounting,
  HRD).
- **Who We Help**: daftar kriteria Owner.
- **Why GC Plus**: TRUSTED / INTEGRITY / SOLUTIONS.
- **CTA Akhir**: "Ready to Take Back Control?" + tombol WhatsApp.

### 5.2 Layanan Tax (`/layanan/tax`)
- Deskripsi layanan "Tax Management & Compliance".
- List kebutuhan: konsultasi & perencanaan, administrasi, perhitungan &
  pelaporan, PPh 21, PPh Badan, SPT, rekonsiliasi, dokumentasi, pendampingan.
- CTA WhatsApp + "Pelajari" internal.

### 5.3 Layanan Finance & Accounting (`/layanan/finance-accounting`)
- Dua sub-blok: **Accounting** (pencatatan, rekonsiliasi bank, pembukuan,
  piutang/hutang, laba rugi, neraca, financial reporting) dan **Finance**
  (monitoring cash flow, penerimaan & pengeluaran, kontrol piutang, monitoring
  kewajiban, financial monitoring, analisis keuangan).
- CTA WhatsApp.

### 5.4 Layanan HRD (`/layanan/hrd`)
- Deskripsi "HR Administration & Payroll".
- List: data karyawan, kontrak, absensi & cuti, payroll, BPJS, PPh 21,
  administrasi HR, konsultasi ketenagakerjaan.
- CTA WhatsApp.

### 5.5 Tentang Kami (`/tentang-kami`)
- Filosofi GC Plus (Business Control Partner).
- Nilai-nilai: Trusted, Integrity, Solutions.
- Pesan "Behind every growing business...".

### 5.6 Insight (`/insight`)
- Halaman/blog placeholder: section "Business Insight", "Tax Insight",
  "Finance & Accounting Insight", "HR Insight".
- Konten artikel statis placeholder (dapat diperluas dengan CMS di kemudian
  hari).

### 5.7 Resources (`/resources`)
- Section sumber daya: Business, Tax, Finance & Accounting, HR.
- Placeholder untuk download/file yang akan datang.

### 5.8 Kontak (`/kontak`)
- Form kontak (nama, email, WhatsApp, pesan — client-side only, tanpa database).
- Detail kontak: WhatsApp +62 852-8662-4831, email, alamat.
- Tombol langsung ke WhatsApp.

---

## 6. Persyaratan Fungsional

| ID | Kebutuhan |
|----|-----------|
| F1 | Navbar sticky, responsive, dengan mobile drawer menu. |
| F2 | Tombol CTA WhatsApp di navbar dan footer (membuka wa.me). |
| F3 | Floating WhatsApp button di mobile (bottom, fixed). |
| F4 | Semua halaman responsive (mobile-first). |
| F5 | Dropdown menu Layanan (desktop) & akses pada mobile. |
| F6 | Form kontak client-side (validasi + open mailto/whatsapp). |
| F7 | Active state pada menu sesuai halaman aktif. |

### Nomor WhatsApp
- Format link: `https://wa.me/6285286624831`
- Prefill pesan, misal: "Halo GC Plus, saya ingin konsultasi."

---

## 7. Persyaratan Non-Fungsional

- **Performa**: static generation (SSG) di mana memungkinkan.
- **SEO**: masing-masing halaman memiliki `title`, `description`,
  `og:image`, JSON-LD (Organization).
- **Aksesibilitas**: kontras warna memadai, atribut `aria` pada menu, heading
  berurutan.
- **Tanpa database**: seluruh konten statis.

---

## 8. Desain & Branding

### Warna
- **Primary (Navy/Dark)**: `#1a1a2e` (atau variasi gelap).
- **Accent (Gold)**: `#c9a24b` / `#d4af37` (kesan premium/profesional).
- **Neutral**: putih / abu-abu terang untuk latar section.
- **Text**: gelap di latar terang, terang di latar gelap.

### Tipografi
- **Font**: Inter (Google Fonts) — profesional dan mudah dibaca.
- Skala heading besar untuk hero, body ~16px.

### Gaya Visual
- Corporate, clean, modern.
- Banyak whitespace.
- Kartu (card) dengan elegan untuk layanan & fitur.
- Tipografi tegas ("BUSINESS CONTROL PARTNER" uppercase).

---

## 9. Tech Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: next/font (Inter)
- **Database**: TIDAK ADA (statis)
- **Deployment**: Vercel (free tier)
- **Icons**: lucide-react

---

## 10. Acceptance Criteria

- [ ] Seluruh 8 halaman dapat diakses dengan route yang benar.
- [ ] Navbar & footer tampil konsisten di semua halaman.
- [ ] Tombol WhatsApp berfungsi (membuka wa.me dengan nomor benar).
- [ ] Responsive hingga lebar layar mobile (≥360px).
- [ ] Tidak ada error build (`next build` sukses).
- [ ] Meta tags SEO ada di tiap halaman.
- [ ] Desain sesuai identitas (navy + gold, font Inter).

---

## 11. Scope & Deliverables

### In-Scope
- 8 halaman utama (sesuai sitemap).
- Komponen navbar, footer, floating WhatsApp, kartu layanan.
- Konten lengkap sesuai brief.
- File PRD ini.

### Out-of-Scope (fase berikutnya)
- CMS / blog dinamis untuk Insight & Resources.
- Integrasi form ke backend / CRM.
- Multi-bahasa.
- Fitur autentikasi/admin.

---

## 12. Catatan Tambahan

- Kontak resmi: **WhatsApp +62 852-8662-4831**.
- Copyright di footer: **© 2026 GC Plus. All Rights Reserved.**
- Tagline utama: **"Business Control Partner for Owners."**
