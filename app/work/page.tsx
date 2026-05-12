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
    <div>
      {projects.map((project) => {
        const hasImage = imageExists(project.coverImage);
        return (
          <Link
            key={project.slug}
            href={`/${project.slug}`}
            className="project-card block relative w-full h-screen overflow-hidden"
          >
            {/* Background image or placeholder */}
            {hasImage ? (
              <Image
                src={project.coverImage}
                alt={project.navTitle}
                fill
                className="object-cover"
                sizes="calc(100vw - 240px)"
                quality={90}
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                <p className="text-[10px] tracking-[0.3em] text-neutral-300 uppercase">
                  Add cover image →{" "}
                  <span className="text-neutral-400">
                    public{project.coverImage}
                  </span>
                </p>
              </div>
            )}

            {/* Centered square hover overlay with title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="hover-box w-80 h-80 bg-white/60 flex flex-col items-center justify-center">
                {project.year && (
                  <p className="text-[11px] tracking-[0.3em] text-neutral-500 mb-3 font-light">
                    {project.year}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl tracking-[0.2em] font-extralight text-neutral-900 text-center px-6">
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
