import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { existsSync } from "fs";
import path from "path";

function imageExists(src: string): boolean {
  try {
    const filePath = path.join(process.cwd(), "public", src);
    return existsSync(filePath);
  } catch {
    return false;
  }
}

export default function WorkPage() {
  return (
    <div className="md:space-y-0 space-y-[3px]">
      {projects.map((project) => {
        const hasImage = imageExists(project.coverImage);
        return (
          <Link
            key={project.slug}
            href={`/${project.slug}`}
            className="project-card block relative w-full overflow-hidden h-[75vw] md:h-screen"
          >
            {/* Background image */}
            {hasImage ? (
              <Image
                src={project.coverImage}
                alt={project.navTitle}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, calc(100vw - 240px)"
                quality={90}
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                <p className="text-[10px] tracking-[0.3em] text-neutral-300 uppercase">
                  Add cover image
                </p>
              </div>
            )}

            {/* Mobile: always-visible title at bottom */}
            <div className="md:hidden absolute inset-x-0 bottom-0 pb-8 pt-16 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center">
              <h2 className="text-[13px] tracking-[0.2em] font-light text-white text-center px-8">
                {project.displayTitle}
              </h2>
            </div>

            {/* Desktop: hover square overlay */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
              <div className="hover-box w-[520px] h-[520px] bg-white/60 flex items-center justify-center">
                <h2 className="text-3xl tracking-[0.2em] font-extralight text-neutral-900 text-center px-12">
                  {project.displayTitle}
                </h2>
              </div>
            </div>
          </Link>
        );
      })}

      {/* Back to top */}
      <div className="text-center py-16">
        <a
          href="#"
          className="text-[10px] tracking-[0.3em] text-neutral-400 hover:text-black transition-colors uppercase"
        >
          ↑ Back to Top
        </a>
      </div>
    </div>
  );
}
