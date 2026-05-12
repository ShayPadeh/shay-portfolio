import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProject } from "@/data/projects";
import { existsSync, readdirSync } from "fs";
import path from "path";

interface Props {
  params: Promise<{ slug: string }>;
}

// Tells Next.js which slugs to pre-render
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function getProjectImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", "projects", slug);
  try {
    if (!existsSync(dir)) return [];
    return readdirSync(dir)
      .filter(
        (f) =>
          /\.(jpg|jpeg|png|webp|gif)$/i.test(f) &&
          !/^cover\./i.test(f) // exclude Cover.jpg / cover.png etc.
      )
      .sort((a, b) => {
        // Natural numeric sort: 1, 2, 3 … 10, 11 (not 1, 10, 11, 2…)
        const numA = parseInt(a.match(/^(\d+)/)?.[1] ?? "0", 10);
        const numB = parseInt(b.match(/^(\d+)/)?.[1] ?? "0", 10);
        return numA - numB;
      })
      .map((f) => `/images/projects/${slug}/${f}`);
  } catch {
    return [];
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const images = getProjectImages(slug);

  return (
    <div className="px-16 py-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl tracking-[0.2em] font-extralight text-center mb-10 leading-tight">
        {project.displayTitle}
      </h1>

      {/* Description */}
      {project.description && (
        <p className="max-w-2xl mx-auto text-center text-[13px] leading-8 tracking-[0.05em] text-neutral-600 font-light mb-16">
          {project.description}
        </p>
      )}

      {/* Image gallery */}
      {images.length > 0 ? (
        <div className="space-y-4">
          {images.map((src) => (
            <div key={src} className="w-full relative">
              <Image
                src={src}
                alt={project.navTitle}
                width={1600}
                height={900}
                className="w-full h-auto"
                sizes="(min-width: 240px) calc(100vw - 240px)"
              />
            </div>
          ))}
        </div>
      ) : (
        /* Placeholder when no images are added yet */
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full bg-neutral-50 border border-dashed border-neutral-200 flex items-center justify-center"
              style={{ height: "50vh" }}
            >
              <p className="text-[10px] tracking-[0.25em] text-neutral-300 uppercase text-center px-8">
                Add images to
                <br />
                <span className="text-neutral-400">
                  public/images/projects/{slug}/
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Back to top */}
      <div className="text-center mt-20">
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
