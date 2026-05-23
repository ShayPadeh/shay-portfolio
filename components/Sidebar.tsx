"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (slug: string) => pathname === `/${slug}`;

  return (
    <aside className="fixed left-0 top-0 h-full w-[160px] md:w-[240px] flex flex-col items-center pt-6 md:pt-10 pb-8 overflow-y-auto z-10 bg-white border-r border-neutral-100">
      {/* Logo / Name */}
      <Link href="/work" className="text-center mb-6 md:mb-10 block px-2">
        <div className="text-[8px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] font-light uppercase leading-relaxed text-neutral-800 hover:text-black transition-colors">
          Portfolio
          <br />
          Shay Padeh
        </div>
      </Link>

      {/* Work section */}
      <nav className="w-full text-center">
        <p className="text-[7px] md:text-[9px] tracking-[0.3em] md:tracking-[0.35em] uppercase text-neutral-500 font-light mb-3 md:mb-4">
          Work
        </p>

        <ul className="space-y-[5px] md:space-y-[6px]">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/${project.slug}`}
                className={`block text-[7px] md:text-[10px] tracking-[0.1em] md:tracking-[0.15em] transition-colors px-2 md:px-4 leading-relaxed ${
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

        {/* CV & Contact */}
        <div className="mt-6 md:mt-8 space-y-[5px] md:space-y-[6px]">
          <Link
            href="/cv"
            className={`block text-[7px] md:text-[10px] tracking-[0.1em] md:tracking-[0.15em] transition-colors px-2 md:px-4 ${
              pathname === "/cv"
                ? "text-black font-medium"
                : "text-neutral-400 font-light hover:text-black"
            }`}
          >
            CV
          </Link>
          <Link
            href="/contact"
            className={`block text-[7px] md:text-[10px] tracking-[0.1em] md:tracking-[0.15em] transition-colors px-2 md:px-4 ${
              pathname === "/contact"
                ? "text-black font-medium"
                : "text-neutral-400 font-light hover:text-black"
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </aside>
  );
}
