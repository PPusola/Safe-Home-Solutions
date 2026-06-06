"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  location: string;
  category: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

const CATEGORIES = [
  "All",
  "Water Damage Restoration",
  "Mold Remediation",
  "Storm & Flood Damage",
  "Emergency Water Removal",
  "Structural Damage",
];

const PROJECTS: Project[] = [
  // Water Damage Restoration
  {
    title: "Corridor flooring after pipe leak",
    location: "Edmonton",
    category: "Water Damage Restoration",
    before: { src: "/case-images/water-damage/corridor-floor-water-damage.jpg", alt: "Water damaged corridor flooring before restoration" },
    after: { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Clean corridor flooring after restoration" },
  },
  {
    title: "Tile floor staining from water intrusion",
    location: "Edmonton",
    category: "Water Damage Restoration",
    before: { src: "/case-images/water-damage/damaged-tiles-water-stain.jpg", alt: "Stained tiles from water damage before restoration" },
    after: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Clean tiled floor after restoration" },
  },
  {
    title: "Peeling flooring after water damage",
    location: "Edmonton",
    category: "Water Damage Restoration",
    before: { src: "/case-images/water-damage/flooring-peeling-water-damage.jpg", alt: "Peeling flooring before water damage restoration" },
    after: { src: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Restored flooring after water damage mitigation" },
  },
  {
    title: "Floor staining from slow water leak",
    location: "Edmonton",
    category: "Water Damage Restoration",
    before: { src: "/case-images/water-damage/floor-staining-water-damage.jpg", alt: "Floor staining from water leak before restoration" },
    after: { src: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Clean floor after water damage restoration" },
  },
  {
    title: "Baseboard water staining at wall corner",
    location: "Edmonton",
    category: "Water Damage Restoration",
    before: { src: "/case-images/water-damage/baseboard-water-stain.jpg", alt: "Baseboard water staining before restoration" },
    after: { src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Restored baseboard and wall after water damage" },
  },
  {
    title: "Floor damage and debris after pipe burst",
    location: "Edmonton",
    category: "Water Damage Restoration",
    before: { src: "/case-images/water-damage/floor-debris-water-damage.jpg", alt: "Floor damage and debris before restoration" },
    after: { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Clean floor after water damage restoration" },
  },

  // Mold Remediation
  {
    title: "Mold at wall and floor junction",
    location: "Sherwood Park",
    category: "Mold Remediation",
    before: { src: "/case-images/mold-remediation/wall-floor-mold-growth.jpg", alt: "Mold growth at wall and floor junction before remediation" },
    after: { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Clean wall and floor after mold remediation" },
  },
  {
    title: "Mold and structural damage at baseboard",
    location: "Edmonton",
    category: "Mold Remediation",
    before: { src: "/case-images/mold-remediation/baseboard-mold-structural.jpg", alt: "Mold and structural damage at baseboard before remediation" },
    after: { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Restored baseboard area after mold remediation" },
  },
  {
    title: "Mold growth in bathroom grout",
    location: "Edmonton",
    category: "Mold Remediation",
    before: { src: "/case-images/mold-remediation/grout-mold-bathroom.jpg", alt: "Mold in bathroom grout before remediation" },
    after: { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Clean bathroom after mold remediation" },
  },
  {
    title: "Structural mold damage at wall base",
    location: "Edmonton",
    category: "Mold Remediation",
    before: { src: "/case-images/mold-remediation/wall-base-mold-structural.jpg", alt: "Structural mold damage at wall base before remediation" },
    after: { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Restored wall base after mold remediation" },
  },

  // Storm & Flood Damage
  {
    title: "Water seepage at exterior steps",
    location: "Edmonton",
    category: "Storm & Flood Damage",
    before: { src: "/case-images/storm-flood/exterior-steps-water-seepage.jpg", alt: "Water seepage at exterior steps before restoration" },
    after: { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Dry exterior steps after storm damage mitigation" },
  },
  {
    title: "Exterior concrete flooding after storm",
    location: "Edmonton",
    category: "Storm & Flood Damage",
    before: { src: "/case-images/storm-flood/exterior-concrete-flooding.jpg", alt: "Flooded exterior concrete before restoration" },
    after: { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Clean exterior concrete after storm damage mitigation" },
  },
  {
    title: "Storm flooding at property entry",
    location: "Edmonton",
    category: "Storm & Flood Damage",
    before: { src: "/case-images/storm-flood/exterior-steps-door-flooding.jpg", alt: "Storm flooding at property entry before restoration" },
    after: { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Restored property entry after storm damage mitigation" },
  },

  // Emergency Water Removal
  {
    title: "Water pooling at garage floor",
    location: "Edmonton",
    category: "Emergency Water Removal",
    before: { src: "/case-images/emergency-water-removal/garage-floor-water-pooling.jpg", alt: "Water pooling at garage floor before emergency removal" },
    after: { src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Dry garage floor after emergency water removal" },
  },

  // Structural Damage
  {
    title: "Structural decay at wall base",
    location: "Edmonton",
    category: "Structural Damage",
    before: { src: "/case-images/structural-damage/wall-base-structural-decay.jpg", alt: "Structural decay at wall base before restoration" },
    after: { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Restored wall base after structural repair" },
  },
  {
    title: "Structural damage at wall corner",
    location: "Edmonton",
    category: "Structural Damage",
    before: { src: "/case-images/structural-damage/wall-corner-structural-damage.jpg", alt: "Structural damage at wall corner before restoration" },
    after: { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&h=600&crop=center&q=80", alt: "Restored wall corner after structural repair" },
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [phase, setPhase] = useState<"before" | "after">("before");
  const isAfter = phase === "after";

  return (
    <div className="surface-card overflow-hidden rounded-[1rem] border border-slate-200/70">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          key={phase}
          src={project[phase].src}
          alt={project[phase].alt}
          className="h-full w-full object-cover animate-[img-fade_0.3s_ease]"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Before / After pill */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <div className="flex overflow-hidden rounded-full border border-white/30 bg-black/50 backdrop-blur-md">
            <button
              onClick={() => setPhase("before")}
              className={`px-5 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                !isAfter ? "bg-[var(--color-accent)] text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setPhase("after")}
              className={`px-5 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                isAfter ? "bg-[var(--color-brand)] text-white" : "text-white/70 hover:text-white"
              }`}
            >
              After
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{project.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-500">{project.location}</span>
        </div>
        <h3 className="mt-2 text-base font-bold leading-snug">{project.title}</h3>
      </div>
    </div>
  );
}

const PAGE_SIZE = 3;

export function ProjectGallery({ initialCategory = "All" }: { initialCategory?: string }) {
  const resolved = CATEGORIES.includes(initialCategory) ? initialCategory : "All";
  const [activeCategory, setActiveCategory] = useState(resolved);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (resolved !== "All") {
      const el = document.getElementById("project-examples");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const filtered = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  function changeCategory(cat: string) {
    setActiveCategory(cat);
    setPage(0);
  }

  return (
    <div>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-colors ${
              activeCategory === cat
                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={`${project.category}-${project.title}`} project={project} />
        ))}
      </div>

      {/* Arrows + dots on same row */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          aria-label="Previous projects"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "w-6 bg-[var(--color-accent)]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page >= totalPages - 1}
          aria-label="Next projects"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
