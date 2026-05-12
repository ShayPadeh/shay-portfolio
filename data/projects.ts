export interface Project {
  slug: string;
  navTitle: string;
  displayTitle: string;
  year?: string;
  description?: string;
  images: string[]; // filenames inside /public/images/projects/<slug>/
  coverImage: string;
}

export const projects: Project[] = [
  {
    slug: "final-plan-b",
    navTitle: "Final _ Plan B",
    displayTitle: "FINAL _ PLAN B",
    year: "2025",
    description: "",
    images: [],
    coverImage: "/images/projects/final-plan-b/Cover.jpg",
  },
  {
    slug: "xl-heritage-project-torino-italy",
    navTitle: "XL | Heritage Project | Torino Italy",
    displayTitle: "XL | HERITAGE PROJECT | TORINO ITALY",
    year: "",
    description:
      "Located adjacent to Italy's prestigious Reggia di Venaria Reale, aims to preserve historical architecture while integrating modern urban functionalities. Began with a detailed look into the area's history, demographics, culture, and economic aspects to inform its development. Guided by the principles of preservation, accessibility, and relevance, the project includes a diverse mix of facilities such as a hotel, library, archive, exhibition hall, office spaces, shops, and restaurants. Additionally, The new park aims to revive areas that were overlooked before. The final phase involved conducting an economic analysis to confirm the financial viability of the project.",
    images: [],
    coverImage: "/images/projects/xl-heritage-project-torino-italy/Cover.jpg",
  },
  {
    slug: "xl-urban-studio-tel-aviv",
    navTitle: "XL | Urban Studio | Tel Aviv",
    displayTitle: "XL | URBAN STUDIO | TEL AVIV",
    year: "2024",
    description: "",
    images: [],
    coverImage: "/images/projects/xl-urban-studio-tel-aviv/Cover.png",
  },
  {
    slug: "l-residential-project-sde-dov",
    navTitle: "L | Residential Project | Sde Dov",
    displayTitle: "L | RESIDENTIAL PROJECT | SDE DOV",
    year: "",
    description:
      "150-unit residential building, specifically investigating the spaces between ways and places to enhance the living quality. By analyzing these in-between areas, the project aims to innovate and elevate the residential experience. This approach signifies a progressive shift in urban residential design, recognizing the value of previously overlooked spaces.",
    images: [],
    coverImage: "/images/projects/l-residential-project-sde-dov/Cover.png",
  },
  {
    slug: "m-centro-botin-spain",
    navTitle: "M | Centro Botin | Spain",
    displayTitle: "M | CENTRO BOTIN | SPAIN",
    year: "",
    description: "",
    images: [],
    coverImage: "/images/projects/m-centro-botin-spain/Cover.png",
  },
  {
    slug: "xs-art-pavilion",
    navTitle: "XS | Art Pavilion",
    displayTitle: "XS | ART PAVILION",
    year: "",
    description: "",
    images: [],
    coverImage: "/images/projects/xs-art-pavilion/Cover.png",
  },
  {
    slug: "xs-22pcs-stool",
    navTitle: "XS | 22PCS Stool",
    displayTitle: "XS | 22PCS STOOL",
    year: "",
    description: "",
    images: [],
    coverImage: "/images/projects/xs-22pcs-stool/Cover.jpg",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
