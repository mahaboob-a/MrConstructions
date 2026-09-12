import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Renovation"
  | "Civil"
  | "Other";

type Project = {
  _id: string;
  name: string;
  category: ProjectCategory;
  location: string;
  year: number;
  description: string;
  images: string[];
  featured: boolean;
};

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Which image is currently displayed for each project
  const [imageIndexes, setImageIndexes] = useState<
    Record<string, number>
  >({});

  // Load projects from backend
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/api/projects?limit=50`
      );

      if (!response.ok) {
        throw new Error("Failed to load projects");
      }

      const data = await response.json();

      const projectList = data.items || [];

      setProjects(projectList);

      // Start every project gallery at image 0
      const indexes: Record<string, number> = {};

      projectList.forEach((project: Project) => {
        indexes[project._id] = 0;
      });

      setImageIndexes(indexes);
    } catch (error) {
      console.error("Failed to load projects:", error);

      setError(
        "Unable to load projects. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  // Previous image
  const previousImage = (projectId: string, totalImages: number) => {
    setImageIndexes((current) => {
      const currentIndex = current[projectId] || 0;

      return {
        ...current,
        [projectId]:
          currentIndex === 0
            ? totalImages - 1
            : currentIndex - 1,
      };
    });
  };

  // Next image
  const nextImage = (projectId: string, totalImages: number) => {
    setImageIndexes((current) => {
      const currentIndex = current[projectId] || 0;

      return {
        ...current,
        [projectId]:
          currentIndex === totalImages - 1
            ? 0
            : currentIndex + 1,
      };
    });
  };

  return (
    <div className="overflow-hidden bg-stone-50">

      {/* ================= HERO ================= */}

      <section className="relative isolate overflow-hidden bg-navy-900 py-24 text-white md:py-32">

        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-bronze/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[15%] top-24 h-3 w-3 rounded-full bg-bronze shadow-[0_0_25px_rgba(255,255,255,0.5)]" />

        <div className="absolute bottom-24 left-[12%] h-2 w-2 rounded-full bg-white/40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 md:grid-cols-2 md:px-6">

          {/* LEFT */}

          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">

              <span className="h-2 w-2 animate-pulse rounded-full bg-bronze shadow-[0_0_12px_rgba(255,255,255,0.5)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Our Projects
              </span>

            </div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-light">
              MR Constructions
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">

              Spaces built

              <span className="block text-bronze-light">
                for the future.
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              Explore our construction, renovation, commercial,
              residential, and interior projects. Every project
              reflects our commitment to quality, precision,
              functionality, and customer satisfaction.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-bronze px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-bronze-light"
              >
                <span className="relative z-10">
                  Start Your Project
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-bronze/60 hover:bg-white/10 hover:text-bronze-light"
              >
                Explore Services
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative mx-auto h-[430px] w-full max-w-md">

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

            <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md" />

            <div className="absolute left-1/2 top-1/2 h-72 w-48 -translate-x-1/2 -translate-y-1/2 rounded-t-[2rem] border border-bronze/30 bg-gradient-to-b from-white/[0.16] to-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

              <div className="absolute -left-5 -right-5 -top-4 h-5 rounded-full border border-bronze/40 bg-bronze/20 backdrop-blur-xl" />

              <div className="absolute inset-x-5 top-7 grid grid-cols-3 gap-3">

                {Array.from({ length: 21 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-7 rounded-sm border border-white/10 bg-bronze/20 shadow-[0_0_14px_rgba(255,255,255,0.08)]"
                  />
                ))}

              </div>

              <span className="absolute bottom-0 left-7 top-0 w-px bg-white/10" />

              <span className="absolute bottom-0 right-7 top-0 w-px bg-white/10" />

            </div>

            {/* PROJECT COUNT */}

            <div className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-wider text-white/40">
                Projects
              </p>

              <p className="mt-1 font-display text-3xl font-semibold text-bronze-light">
                {projects.length}+
              </p>

              <p className="mt-1 text-xs text-white/50">
                Built with precision
              </p>

            </div>

            {/* QUALITY */}

            <div className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-wider text-white/40">
                Quality
              </p>

              <p className="mt-1 font-display text-3xl font-semibold text-bronze-light">
                100%
              </p>

              <p className="mt-1 text-xs text-white/45">
                Customer focused
              </p>

            </div>

            <div className="absolute right-4 top-5 h-20 w-20 rounded-full border border-bronze/30" />

            <div className="absolute right-9 top-10 h-10 w-10 rounded-full border border-white/10" />

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent" />

      </section>

      {/* ================= INTRO ================= */}

      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-bronze/5 blur-3xl" />

        <div className="relative">

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-10 bg-bronze" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
              Selected work
            </p>

          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <h2 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">

                Projects designed

                <span className="block text-navy/50">
                  with purpose.
                </span>

              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-stone-500">
                From residential homes to commercial developments
                and interior transformations, our work is focused
                on creating spaces that combine aesthetics,
                engineering, and practical functionality.
              </p>

            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/70 px-6 py-4 shadow-lg backdrop-blur-xl">

              <p className="font-display text-3xl font-semibold text-navy">
                {projects.length}
              </p>

              <p className="text-xs uppercase tracking-wider text-stone-400">
                Total Projects
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="relative mx-auto max-w-7xl px-4 pb-24 md:px-6">

        {/* Loading */}

        {loading && (
          <div className="py-20 text-center">

            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-stone-200 border-t-bronze" />

            <p className="mt-4 text-stone-500">
              Loading projects...
            </p>

          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">

            <p className="font-semibold text-red-700">
              {error}
            </p>

            <button
              onClick={loadProjects}
              className="mt-4 rounded-lg bg-navy px-5 py-2 text-white"
            >
              Try Again
            </button>

          </div>
        )}

        {/* No projects */}

        {!loading &&
          !error &&
          projects.length === 0 && (
            <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center shadow-sm">

              <h3 className="text-xl font-semibold text-navy">
                No projects available
              </h3>

              <p className="mt-2 text-stone-500">
                Projects added from the admin dashboard
                will appear here.
              </p>

            </div>
          )}

        {/* Project cards */}

        {!loading &&
          !error &&
          projects.length > 0 && (

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {projects.map((project, index) => {

                const currentImage =
                  imageIndexes[project._id] || 0;

                const hasImages =
                  project.images &&
                  project.images.length > 0;

                return (

                  <article
                    key={project._id}
                    className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl"
                  >

                    {/* IMAGE AREA */}

                    <div className="relative h-64 overflow-hidden bg-navy-900">

                      {hasImages ? (

                        <img
                          src={project.images[currentImage]}
                          alt={`${project.name} - image ${
                            currentImage + 1
                          }`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          loading={
                            index < 3
                              ? "eager"
                              : "lazy"
                          }
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";
                          }}
                        />

                      ) : (

                        <div className="flex h-full items-center justify-center">

                          <div className="text-center text-white/50">

                            <div className="text-4xl">
                              ◆
                            </div>

                            <p className="mt-2 text-sm">
                              No image available
                            </p>

                          </div>

                        </div>

                      )}

                      {/* Dark overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Number */}

                      <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-sm font-semibold text-white backdrop-blur-xl">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Featured */}

                      {project.featured && (

                        <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-bronze px-3 py-1.5 text-xs font-bold text-navy-900 shadow-lg">
                          Featured
                        </div>

                      )}

                      {/* Category */}

                      <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xl">
                        {project.category}
                      </div>

                      {/* Image counter */}

                      {hasImages &&
                        project.images.length > 1 && (

                          <div className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xl">
                            {currentImage + 1} /{" "}
                            {project.images.length}
                          </div>

                        )}

                      {/* Previous */}

                      {hasImages &&
                        project.images.length > 1 && (

                          <button
                            type="button"
                            aria-label="Previous project image"
                            onClick={() =>
                              previousImage(
                                project._id,
                                project.images.length
                              )
                            }
                            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-black/60"
                          >
                            ‹
                          </button>

                        )}

                      {/* Next */}

                      {hasImages &&
                        project.images.length > 1 && (

                          <button
                            type="button"
                            aria-label="Next project image"
                            onClick={() =>
                              nextImage(
                                project._id,
                                project.images.length
                              )
                            }
                            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-black/60"
                          >
                            ›
                          </button>

                        )}

                    </div>

                    {/* IMAGE DOTS */}

                    {hasImages &&
                      project.images.length > 1 && (

                        <div className="flex justify-center gap-1.5 bg-white py-3">

                          {project.images.map(
                            (_, imageIndex) => (

                              <button
                                key={imageIndex}
                                type="button"
                                aria-label={`Show image ${
                                  imageIndex + 1
                                }`}
                                onClick={() =>
                                  setImageIndexes(
                                    (current) => ({
                                      ...current,
                                      [project._id]:
                                        imageIndex,
                                    })
                                  )
                                }
                                className={`h-2 rounded-full transition-all ${
                                  currentImage ===
                                  imageIndex
                                    ? "w-6 bg-bronze"
                                    : "w-2 bg-stone-300"
                                }`}
                              />

                            )
                          )}

                        </div>

                      )}

                    {/* CONTENT */}

                    <div className="p-7">

                      <div className="flex items-start justify-between gap-4">

                        <h3 className="font-display text-xl font-semibold text-navy">
                          {project.name}
                        </h3>

                        <span className="text-xl text-bronze transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>

                      </div>

                      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-bronze">
                        {project.location}
                      </p>

                      <p className="mt-1 text-xs text-stone-400">
                        {project.year}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-stone-500">
                        {project.description}
                      </p>

                      <div className="mt-6 h-px w-10 bg-bronze transition-all duration-500 group-hover:w-full" />

                    </div>

                  </article>

                );

              })}

            </div>

          )}

      </section>

      {/* ================= PROCESS ================= */}

      <section className="relative overflow-hidden bg-navy-900 py-24 text-white">

        <div className="hero-grid absolute inset-0 opacity-20" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-bronze/10 blur-3xl" />

        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-light">
                How we work
              </p>

            </div>

            <h2 className="font-display text-4xl font-semibold md:text-5xl">

              From concept

              <span className="block text-bronze-light">
                to completion.
              </span>

            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/55">
              We approach every project with careful planning,
              clear communication, quality execution, and
              attention to detail.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Consultation",
              "Planning & Design",
              "Construction",
              "Final Delivery",
            ].map((step, index) => (

              <div
                key={step}
                className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/40 hover:bg-white/[0.08]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-bronze/20 bg-bronze/10 text-sm font-semibold text-bronze-light">
                    0{index + 1}
                  </div>

                  <span className="text-2xl text-white/10 transition-colors duration-500 group-hover:text-bronze/40">
                    ◆
                  </span>

                </div>

                <h3 className="mt-7 font-display text-lg font-semibold">
                  {step}
                </h3>

                <div className="mt-5 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden bg-stone-100 px-4 py-24 md:px-6">

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 px-6 py-14 text-center shadow-2xl backdrop-blur-xl md:px-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-bronze-light shadow-lg">
            ◆
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
            Start your next project
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
            Let's build something great.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-stone-500">
            Have a project in mind? Talk to our team about your
            next construction, renovation, commercial,
            residential, or interior design project.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-navy-700"
          >
            Start Your Project
            <span>→</span>
          </Link>

        </div>

      </section>

    </div>
  );
}