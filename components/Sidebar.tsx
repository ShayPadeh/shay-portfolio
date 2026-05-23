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
      {/* ── Desktop sidebar (hidden on mobile) ── */}
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

      {/* ── Mobile top bar (hidden on desktop) ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-20 bg-white border-b border-neutral-100 flex items-center justify-between px-6 py-4">
        <Link href="/work" onClick={() => setMobileOpen(false)}>
          <div className="text-[11px] tracking-[0.3em] font-light uppercase leading-tight text-neutral-800">
            Portfolio · Shay Padeh
          </div>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-neutral-600 hover:text-black transition-colors p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            /* X icon */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16"/>
              <line x1="16" y1="4" x2="4" y2="16"/>
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="17" y2="6"/>
              <line x1="3" y1="10" x2="17" y2="10"/>
              <line x1="3" y1="14" x2="17" y2="14"/>
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile menu overlay ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-10 bg-white flex flex-col items-center pt-24 pb-12 overflow-y-auto">
          {navLinks}
        </div>
      )}
    </>
  );
}
