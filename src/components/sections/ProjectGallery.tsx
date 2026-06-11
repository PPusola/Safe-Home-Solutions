"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Project {
  title: string;
  location: string;
  category: string;
  summary: string;
  workDone: string[];
  image: { src: string; alt: string };
}

const CATEGORIES = [
  "All",
  "Water Damage Restoration",
  "Mold Remediation",
  "Storm & Flood Damage",
  "Emergency Water Removal",
  "Structural Damage",
  "Oxidizing Services",
];

const PROJECTS: Project[] = [
  {
    title: "Corridor flooring after pipe leak",
    location: "Edmonton",
    category: "Water Damage Restoration",
    summary: "A sustained pipe leak caused water migration under finished flooring and into the subfloor cavity across multiple corridor sections.",
    workDone: ["Water extraction from flooring surface", "Moisture mapping of subfloor and baseboard zones", "Industrial air mover placement for structural drying", "Dehumidification over 3-day dry cycle", "Daily moisture readings logged", "Photo documentation for insurance claim"],
    image: { src: "/case-images/water-damage/corridor-floor-water-damage.jpg", alt: "Water damaged corridor flooring before restoration" },
  },
  {
    title: "Tile floor staining from water intrusion",
    location: "Edmonton",
    category: "Water Damage Restoration",
    summary: "Water intrusion through grout lines caused tile staining and elevated moisture beneath the finished floor surface.",
    workDone: ["Surface moisture assessment", "Targeted drying under tile layer", "Moisture boundary mapping", "Photo documentation of full affected extent"],
    image: { src: "/case-images/water-damage/damaged-tiles-water-stain.jpg", alt: "Stained tiles from water damage before restoration" },
  },
  {
    title: "Peeling flooring after water damage",
    location: "Edmonton",
    category: "Water Damage Restoration",
    summary: "Water exposure caused flooring adhesive to fail, with material peeling and moisture trapped between floor layers.",
    workDone: ["Extraction of trapped moisture", "Removal of compromised flooring sections", "Subfloor drying with air movers", "Moisture clearance readings before reinstall prep", "Scope documented for flooring contractor"],
    image: { src: "/case-images/water-damage/flooring-peeling-water-damage.jpg", alt: "Peeling flooring before water damage restoration" },
  },
  {
    title: "Floor staining from slow water leak",
    location: "Edmonton",
    category: "Water Damage Restoration",
    summary: "A slow pipe fitting leak went undetected for weeks, causing widespread floor staining and elevated subfloor moisture across the affected zone.",
    workDone: ["Leak source identified and isolated", "Moisture mapping of full affected area", "Drying equipment placement", "Daily moisture tracking until clearance", "Documentation for contractor handoff"],
    image: { src: "/case-images/water-damage/floor-staining-water-damage.jpg", alt: "Floor staining from water leak before restoration" },
  },
  {
    title: "Baseboard water staining at wall corner",
    location: "Edmonton",
    category: "Water Damage Restoration",
    summary: "Water wicking from a slow leak stained baseboards and elevated moisture in the adjacent wall cavity.",
    workDone: ["Moisture readings at wall cavity and baseboard", "Targeted drying at wall-floor junction", "Dehumidifier placement", "Moisture readings logged over full dry cycle"],
    image: { src: "/case-images/water-damage/baseboard-water-stain.jpg", alt: "Baseboard water staining before restoration" },
  },
  {
    title: "Floor damage and debris after pipe burst",
    location: "Edmonton",
    category: "Water Damage Restoration",
    summary: "A burst pipe released high-volume water that spread across finished flooring and displaced debris across the space.",
    workDone: ["Emergency extraction of standing water", "Debris removal and site clean-up", "Subfloor moisture mapping", "Air mover and dehumidifier placement", "Daily monitoring over dry cycle", "Full insurance documentation package"],
    image: { src: "/case-images/water-damage/floor-debris-water-damage.jpg", alt: "Floor damage and debris before restoration" },
  },
  {
    title: "Mold at wall and floor junction",
    location: "Sherwood Park",
    category: "Mold Remediation",
    summary: "A slow pipe fitting leak behind the wall created sustained moisture conditions leading to visible mold growth at the wall-floor junction.",
    workDone: ["Leak source traced and isolated", "Containment barrier installed", "Affected drywall and baseboard removed", "HEPA air scrubbing during removal", "Antimicrobial treatment applied to framing", "Clearance documentation provided"],
    image: { src: "/case-images/mold-remediation/wall-floor-mold-growth.jpg", alt: "Mold growth at wall and floor junction before remediation" },
  },
  {
    title: "Mold and structural damage at baseboard",
    location: "Edmonton",
    category: "Mold Remediation",
    summary: "Long-term moisture accumulation at the baseboard caused structural degradation and significant mold colonization in the cavity behind.",
    workDone: ["Containment of affected area", "Structural assessment of wall cavity", "Removal of affected materials and framing", "HEPA filtration maintained during work", "Antimicrobial treatment applied", "Rebuild scope documented for contractor"],
    image: { src: "/case-images/mold-remediation/baseboard-mold-structural.jpg", alt: "Mold and structural damage at baseboard before remediation" },
  },
  {
    title: "Mold growth in bathroom grout",
    location: "Edmonton",
    category: "Mold Remediation",
    summary: "Persistent mold colonization in shower grout and tile joints, with moisture elevated behind the tile substrate.",
    workDone: ["Moisture testing behind tile surface", "Grout and tile removed in affected zone", "HEPA air scrubbing throughout", "Antimicrobial treatment of substrate", "Drying of substrate before regrout prep"],
    image: { src: "/case-images/mold-remediation/grout-mold-bathroom.jpg", alt: "Mold in bathroom grout before remediation" },
  },
  {
    title: "Structural mold damage at wall base",
    location: "Edmonton",
    category: "Mold Remediation",
    summary: "A slow long-term leak caused structural wood rot and mold growth at the base of an exterior wall.",
    workDone: ["Containment barrier set up", "Affected drywall and framing removed", "HEPA filtration during demolition", "Antimicrobial treatment of remaining framing", "Moisture monitoring post-removal", "Documentation for insurance and contractor"],
    image: { src: "/case-images/mold-remediation/wall-base-mold-structural.jpg", alt: "Structural mold damage at wall base before remediation" },
  },
  {
    title: "Water seepage at exterior steps",
    location: "Edmonton",
    category: "Storm & Flood Damage",
    summary: "Storm-driven water entered through the gap between exterior steps and the foundation, causing pooling in the adjacent interior space.",
    workDone: ["Water extraction at entry zone", "Moisture mapping of adjacent floor and wall", "Drying equipment placed at entry point", "Entry source documented for contractor repair"],
    image: { src: "/case-images/storm-flood/exterior-steps-water-seepage.jpg", alt: "Water seepage at exterior steps before restoration" },
  },
  {
    title: "Exterior concrete flooding after storm",
    location: "Edmonton",
    category: "Storm & Flood Damage",
    summary: "A heavy storm overwhelmed site drainage and caused water to pool across the exterior surface and seep under the entry threshold.",
    workDone: ["Extraction at entry zone", "Drying setup at concrete-to-interior transition", "Moisture readings at floor slab", "Photo documentation of full extent"],
    image: { src: "/case-images/storm-flood/exterior-concrete-flooding.jpg", alt: "Flooded exterior concrete before restoration" },
  },
  {
    title: "Storm flooding at property entry",
    location: "Edmonton",
    category: "Storm & Flood Damage",
    summary: "Storm-driven flooding overwhelmed the entry threshold, with water entering the vestibule and spreading across the entryway floor.",
    workDone: ["Emergency water extraction", "Entry zone drying setup", "Moisture mapping of spread area", "Daily monitoring over full dry cycle", "Insurance documentation package"],
    image: { src: "/case-images/storm-flood/exterior-steps-door-flooding.jpg", alt: "Storm flooding at property entry before restoration" },
  },
  {
    title: "Odor and contamination oxidation treatment",
    location: "Edmonton",
    category: "Oxidizing Services",
    summary: "Persistent odor and surface contamination from water damage and organic material required oxidizing treatment to neutralize the source.",
    workDone: ["Odor source identified and mapped", "Oxidizing agent applied to all affected surfaces", "HEPA air scrubbing during treatment", "Post-treatment clearance verification"],
    image: { src: "/case-images/mold-remediation/wall-base-mold-structural.jpg", alt: "Affected wall base before oxidizing treatment" },
  },
  {
    title: "Water pooling at garage floor",
    location: "Edmonton",
    category: "Emergency Water Removal",
    summary: "Storm-driven water entered through the garage door threshold and pooled across the concrete floor, with the door seal confirmed compromised.",
    workDone: ["Emergency water extraction", "Concrete floor drying setup", "Entry point documented for contractor repair", "Moisture clearance readings", "Photo documentation for insurance"],
    image: { src: "/case-images/emergency-water-removal/garage-floor-water-pooling.jpg", alt: "Water pooling at garage floor before emergency removal" },
  },
  {
    title: "Structural decay at wall base",
    location: "Edmonton",
    category: "Structural Damage",
    summary: "Long-term water exposure caused wood rot and structural failure at the base of an interior wall, requiring removal and drying before rebuild.",
    workDone: ["Structural assessment of wall base", "Removal of decayed framing and drywall", "Drying of remaining structure", "Moisture tracking post-removal", "Scope documented for contractor"],
    image: { src: "/case-images/structural-damage/wall-base-structural-decay.jpg", alt: "Structural decay at wall base before restoration" },
  },
  {
    title: "Structural damage at wall corner",
    location: "Edmonton",
    category: "Structural Damage",
    summary: "Water intrusion at a wall corner compromised the structural framing, with significant material damage and active moisture in the cavity.",
    workDone: ["Moisture mapping of corner cavity", "Removal of damaged materials", "Structural drying setup", "Daily readings during dry cycle", "Full documentation for insurance and contractor handoff"],
    image: { src: "/case-images/structural-damage/wall-corner-structural-damage.jpg", alt: "Structural damage at wall corner before restoration" },
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[1.25rem] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
        >
          <X size={16} />
        </button>

        <div className="grid sm:grid-cols-[1.1fr_0.9fr]">
          <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden bg-slate-100">
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 p-8 sm:overflow-y-auto sm:max-h-[620px]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{project.category}</span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500">{project.location}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold leading-snug">{project.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{project.summary}</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Work completed
              </p>
              <ul className="space-y-2">
                {project.workDone.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group surface-card w-full overflow-hidden rounded-[1rem] border border-slate-200/70 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 animate-[img-fade_0.3s_ease]"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 right-3 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          View details
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">{project.category}</span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-500">{project.location}</span>
        </div>
        <h3 className="mt-2 text-base font-bold leading-snug">{project.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-6 text-slate-500">{project.summary}</p>
      </div>
    </button>
  );
}

const PAGE_SIZE = 3;

export function ProjectGallery({ initialCategory = "All" }: { initialCategory?: string }) {
  const resolved = CATEGORIES.includes(initialCategory) ? initialCategory : "All";
  const [activeCategory, setActiveCategory] = useState(resolved);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (resolved !== "All") {
      const el = document.getElementById("project-examples");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [resolved]);

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
    <>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      <div>
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

        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard
              key={`${project.category}-${project.title}`}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

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
    </>
  );
}
