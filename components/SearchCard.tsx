"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
import { whatsappLink } from "@/lib/config";

const FUNCTIONS = [
  { label: "Pajak", anchor: "tax" },
  { label: "Akuntansi", anchor: "accounting" },
  { label: "Finance", anchor: "finance" },
  { label: "HRD", anchor: "hrd" },
];

export function SearchCard() {
  const router = useRouter();
  const [func, setFunc] = useState(FUNCTIONS[0].label);
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = FUNCTIONS.find((f) => f.label === func) ?? FUNCTIONS[0];
    const problem = query.trim();
    if (problem) {
      window.open(
        whatsappLink(
          `Halo GC Plus, saya membutuhkan bantuan terkait ${target.label.toLowerCase()}. Masalah saya: ${problem}`
        ),
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      router.push(`/layanan#${target.anchor}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-3xl items-center gap-2 rounded-3xl bg-white p-3 shadow-2xl sm:gap-0 sm:p-4 md:items-center"
    >
      <div className="flex-1 px-2 sm:py-2 sm:pr-4 sm:pl-4 sm:border-r sm:border-gray-200">
        <label
          htmlFor="search-fungsi"
          className="text-[11px] font-medium text-gray-400"
        >
          Fungsi Bisnis
        </label>
        <div className="relative mt-0.5">
          <select
            id="search-fungsi"
            value={func}
            onChange={(e) => setFunc(e.target.value)}
            className="w-full appearance-none bg-transparent pr-4 text-xs font-medium text-gray-800 outline-none sm:pr-5 sm:text-sm"
          >
            {FUNCTIONS.map((f) => (
              <option key={f.label} value={f.label}>
                {f.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-400 sm:h-3.5 sm:w-3.5" />
        </div>
      </div>
      <div className="flex-1 px-2 sm:py-2 sm:px-4">
        <label
          htmlFor="search-masalah"
          className="text-[11px] font-medium text-gray-400"
        >
          Masalah Anda
        </label>
        <input
          id="search-masalah"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pajak, cash flow, payroll..."
          className="mt-0.5 w-full bg-transparent text-xs font-medium text-gray-800 outline-none placeholder:text-gray-400 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[var(--teal-900)] px-3.5 py-3 text-xs font-medium whitespace-nowrap text-white transition hover:bg-[var(--teal-950)] sm:gap-2 sm:px-6 sm:text-sm"
      >
        <Search className="h-4 w-4 text-white" /> Mulai
      </button>
    </form>
  );
}
