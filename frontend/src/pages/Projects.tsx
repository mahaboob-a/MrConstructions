import { Link } from "react-router-dom";

const projects = [
  {
    name: "Modern Residential Villa",
    category: "Residential Construction",
    location: "Andhra Pradesh",
    description:
      "A contemporary residential project focused on elegant architecture, functional spaces, quality materials, and long-term durability.",
  },
  {
    name: "Commercial Building",
    category: "Commercial Construction",
    location: "Andhra Pradesh",
    description:
      "A professionally planned commercial development designed for efficient space utilization, modern appearance, and reliable construction.",
  },
  {
    name: "Luxury Interior Renovation",
    category: "Interior & Renovation",
    location: "Andhra Pradesh",
    description:
      "A complete interior transformation combining modern aesthetics, practical layouts, premium finishes, and comfortable living spaces.",
  },
  {
    name: "Contemporary Residence",
    category: "Residential Construction",
    location: "Telangana",
    description:
      "A modern residential development created with a balance of architectural character, functionality, comfort, and construction quality.",
  },
  {
    name: "Office Development",
    category: "Commercial Construction",
    location: "Telangana",
    description:
      "A modern office space designed to provide an efficient working environment with a clean architectural identity and practical planning.",
  },
  {
    name: "Residential Renovation",
    category: "Renovation",
    location: "Andhra Pradesh",
    description:
      "A residential renovation project focused on improving functionality, appearance, comfort, and the overall value of the existing property.",
  },
];

export default function Projects() {
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

          {/* LEFT CONTENT */}

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
              Explore our construction, renovation, commercial, residential,
              and interior projects. Every project reflects our commitment
              to quality, precision, functionality, and customer satisfaction.
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

          {/* RIGHT 3D VISUAL */}

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

            {/* PROJECT CARD */}

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

            {/* QUALITY CARD */}

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

            {/* DECORATIVE RINGS */}

            <div className="absolute right-4 top-5 h-20 w-20 rounded-full border border-bronze/30" />

            <div className="absolute right-9 top-10 h-10 w-10 rounded-full border border-white/10" />

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent" />

      </section>


      {/* ================= PROJECT INTRO ================= */}

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
                From residential homes to commercial developments and
                interior transformations, our work is focused on creating
                spaces that combine aesthetics, engineering, and practical
                functionality.
              </p>

            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/70 px-6 py-4 shadow-lg backdrop-blur-xl">

              <p className="font-display text-3xl font-semibold text-navy">
                {projects.length}
              </p>

              <p className="text-xs uppercase tracking-wider text-stone-400">
                Featured Projects
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECT CARDS ================= */}

      <section className="relative mx-auto max-w-7xl px-4 pb-24 md:px-6">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <article
              key={project.name}
              className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl"
            >

              {/* VISUAL AREA */}

              <div className="relative h-64 overflow-hidden bg-navy-900">

                <div className="hero-grid absolute inset-0 opacity-30" />

                <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-bronze/20 blur-3xl transition duration-700 group-hover:scale-150" />

                <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

                {/* 3D BUILDING */}

                <div className="absolute bottom-0 left-1/2 h-48 w-32 -translate-x-1/2 rounded-t-[1.5rem] border border-bronze/30 bg-gradient-to-b from-white/[0.18] to-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition duration-700 group-hover:-translate-y-2">

                  <div className="absolute inset-x-4 top-5 grid grid-cols-3 gap-2">

                    {Array.from({ length: 12 }).map((_, windowIndex) => (
                      <span
                        key={windowIndex}
                        className="h-5 rounded-sm border border-white/10 bg-bronze/20"
                      />
                    ))}

                  </div>

                  <span className="absolute bottom-0 left-5 top-0 w-px bg-white/10" />

                  <span className="absolute bottom-0 right-5 top-0 w-px bg-white/10" />

                  <div className="absolute -left-3 -right-3 -top-3 h-4 rounded-full border border-bronze/40 bg-bronze/20" />

                </div>

                {/* NUMBER */}

                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-sm font-semibold text-bronze-light backdrop-blur-xl">
                  0{index + 1}
                </div>

                {/* CATEGORY */}

                <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-xl">
                  {project.category}
                </div>

              </div>


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

                <p className="mt-4 text-sm leading-7 text-stone-500">
                  {project.description}
                </p>

                <div className="mt-6 h-px w-10 bg-bronze transition-all duration-500 group-hover:w-full" />

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= PROCESS STRIP ================= */}

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
              We approach every project with careful planning, clear
              communication, quality execution, and attention to detail.
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
            Have a project in mind? Talk to our team about your next
            construction, renovation, commercial, residential, or interior
            design project.
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