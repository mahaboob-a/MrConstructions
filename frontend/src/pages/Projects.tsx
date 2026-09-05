import { useEffect, useState } from "react";
import ProjectCard, { Project } from "../components/ProjectCard";
import { projectCategories } from "../content";

// Fallback sample data shown if the API isn't running yet (e.g. static preview).
const fallbackProjects: Project[] = [
  { name: "Green Valley Residence", category: "Residential", location: "Nandyala", year: 2024, description: "A modern family home combining open-plan living with durable, low-maintenance finishes." },
  { name: "Metro Business Center", category: "Commercial", location: "Kurnool", year: 2024, description: "A multi-tenant commercial building delivered with full civil and MEP coordination." },
  { name: "Urban Renewal Project", category: "Renovation", location: "Nandyala", year: 2023, description: "Structural and interior renovation of an existing property to modern standards." },
];

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== "All") params.set("category", category);

    fetch(`/api/projects?${params.toString()}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setProjects(data.items?.length ? data.items : fallbackProjects))
      .catch(() => setProjects(fallbackProjects))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-medium tracking-wide text-bronze-light">Our Projects</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">Selected projects that define quality</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                category === c ? "bg-navy text-white" : "border border-stone-200 text-stone-600 hover:border-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="text-sm text-stone-600">Loading projects…</p>
          ) : (
            projects.map((p, i) => <ProjectCard key={p._id || i} project={p} />)
          )}
        </div>
      </section>
    </div>
  );
}
