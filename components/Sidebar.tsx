"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (slug: string) => pathname === `/${slug}`;

  const navLinks = (
    <nav className="w-full text-center">
      <p className="text-[9px] tracking-[0.35em] uppercase text-neutral-500 font-light mb-4">
        Work
      </p>
      <ul className="space-y-[6px]">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/${project.slug}`}
              onClick={() => setMobileOpen(false)}
              className={`block text-[10px] tracking-[0.15em] transition-colors px-4 leading-relaxed ${
                isActive(project.slug)
                  ? "text-black font-medium"
                  : "text-neutral-400 font-light hover:text-black"
              }`}
            >
              {project.navTitle}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-[6px]">
        <Link
          href="/cv"
          onClick={() => setMobileOpen(false)}
          className={`block text-[10px] tracking-[0.15em] transition-colors px-4 ${
            pathname === "/cv"
              ? "text-black font-medium"
              : "text-neutral-400 font-light hover:text-black"
          }`}
        >
          CV
        </Link>
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className={`block text-[10px] tracking-[0.15em] transition-colors px-4 ${
            pathname === "/contact"
              ? "text-black font-medium"
              : "text-neutral-400 font-light hover:text-black"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[240px] flex-col items-center pt-10 pb-8 overflow-y-auto z-10 bg-white">
        <Link href="/work" className="text-center mb-10 block">
          <div className="text-[11px] tracking-[0.3em] font-light uppercase leading-relaxed text-neutral-800 hover:text-black transition-colors">
            Portfolio
            <br />
            Shay Padeh
          </div>
        </Link>
        {navLinks}
      </aside>

      {/* ── Mobile: floating hamburger button ── */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-30 bg-white/80 backdrop-blur-sm p-2 rounded"
        aria-label="Open menu"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="2" y1="5" x2="16" y2="5"/>
          <line x1="2" y1="9" x2="16" y2="9"/>
          <line x1="2" y1="13" x2="16" y2="13"/>
        </svg>
      </button>

      {/* ── Mobile: full-screen menu overlay ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white flex flex-col items-center pt-16 pb-12 overflow-y-auto">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-2 text-neutral-500"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16"/>
              <line x1="16" y1="4" x2="4" y2="16"/>
            </svg>
          </button>
          <Link href="/work" onClick={() => setMobileOpen(false)} className="text-center mb-10 block">
            <div className="text-[11px] tracking-[0.3em] font-light uppercase leading-relaxed text-neutral-800">
              Portfolio
              <br />
              Shay Padeh
            </div>
          </Link>
          {navLinks}
        </div>
      )}
    </>
  );
}
