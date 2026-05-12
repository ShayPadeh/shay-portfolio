"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (slug: string) =>
    pathname === `/${slug}`;

  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] flex flex-col items-center pt-10 pb-8 overflow-y-auto z-10 bg-white">
      {/* Logo / Name */}
      <Link href="/work" className="text-center mb-10 block">
        <div className="text-[11px] tracking-[0.3em] font-light uppercase leading-relaxed text-neutral-800 hover:text-black transition-colors">
          Portfolio
          <br />
          Shay Padeh
        </div>
      </Link>

      {/* Work section */}
      <nav className="w-full text-center">
        <p className="text-[9px] tracking-[0.35em] uppercase text-neutral-500 font-light mb-4">
          Work
        </p>

        <ul className="space-y-[6px]">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/${project.slug}`}
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

        {/* CV & Contact */}
        <div className="mt-8 space-y-[6px]">
          <Link
            href="/cv"
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
    </aside>
  );
}
