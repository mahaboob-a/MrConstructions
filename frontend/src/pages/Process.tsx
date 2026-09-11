import { company } from "../content";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We begin by understanding your project requirements, goals, budget, timeline, and expectations.",
      icon: "01",
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "Our team develops a clear project plan and design approach focused on functionality, quality, and efficiency.",
      icon: "02",
    },
    {
      number: "03",
      title: "Cost & Proposal",
      description:
        "We prepare a transparent proposal with project scope, estimated costs, materials, and expected timelines.",
      icon: "03",
    },
    {
      number: "04",
      title: "Construction",
      description:
        "Our experienced professionals execute the project with careful coordination, quality workmanship, and attention to detail.",
      icon: "04",
    },
    {
      number: "05",
      title: "Quality Inspection",
      description:
        "Every major stage is reviewed to ensure the work meets our quality standards and agreed project requirements.",
      icon: "05",
    },
    {
      number: "06",
      title: "Project Handover",
      description:
        "Once the work is complete, we conduct final checks and hand over the finished project to you.",
      icon: "06",
    },
  ];

  return (
    <div className="overflow-hidden bg-stone-50">

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-24 text-white md:py-32">

        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-bronze/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[15%] top-24 h-3 w-3 rounded-full bg-bronze shadow-[0_0_25px_rgba(255,255,255,0.5)]" />

        <div className="absolute bottom-24 left-[12%] h-2 w-2 rounded-full bg-white/50" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 md:grid-cols-2 md:px-6">

          {/* Hero Content */}
          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">

              <span className="h-2 w-2 animate-pulse rounded-full bg-bronze shadow-[0_0_12px_rgba(255,255,255,0.5)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Our Process
              </span>

            </div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-light">
              {company.name}
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">

              From vision

              <span className="block text-bronze-light">
                to reality.
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              A clear, structured, and transparent construction process
              designed to turn your ideas into high-quality spaces built
              for the future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-4 shadow-xl backdrop-blur-xl">

                <p className="font-display text-2xl font-semibold text-bronze-light">
                  06
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Key Stages
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-4 shadow-xl backdrop-blur-xl">

                <p className="font-display text-2xl font-semibold text-white">
                  {company.established}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Established
                </p>

              </div>

            </div>

          </div>

          {/* Futuristic Process Visual */}
          <div className="relative mx-auto h-[430px] w-full max-w-md">

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

            <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md" />

            <div className="absolute left-1/2 top-1/2 h-72 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-bronze/30 bg-gradient-to-b from-white/[0.14] to-white/[0.03] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

              <div className="flex h-full flex-col justify-between">

                <div className="flex items-center justify-between">

                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Process
                  </span>

                  <span className="text-bronze-light">
                    ◆
                  </span>

                </div>

                <div className="space-y-3">

                  {steps.slice(0, 4).map((step) => (
                    <div
                      key={step.number}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3"
                    >

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bronze/10 text-xs font-semibold text-bronze-light">
                        {step.number}
                      </div>

                      <div className="h-1 flex-1 rounded-full bg-white/10">

                        <div className="h-1 w-2/3 rounded-full bg-bronze/60" />

                      </div>

                    </div>
                  ))}

                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Project Journey
                  </p>

                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    Built with precision
                  </p>

                </div>

              </div>

            </div>

            <div className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-wider text-white/40">
                Planning
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Clear & Transparent
              </p>

            </div>

            <div className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-wider text-white/40">
                Quality
              </p>

              <p className="mt-1 font-display text-3xl font-semibold text-bronze-light">
                100%
              </p>

              <p className="mt-1 text-xs text-white/40">
                Customer focused
              </p>

            </div>

            <div className="absolute right-4 top-5 h-16 w-16 rounded-full border border-bronze/30" />

            <div className="absolute right-8 top-9 h-8 w-8 rounded-full border border-white/10" />

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent" />

      </section>

      {/* ================= PROCESS INTRO ================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-bronze/5 blur-3xl" />

        <div className="relative grid gap-10 md:grid-cols-2 md:items-end">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                How we work
              </p>

            </div>

            <h2 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">

              A smarter way to

              <span className="block text-navy/50">
                build your project.
              </span>

            </h2>

          </div>

          <p className="max-w-xl leading-8 text-stone-500 md:justify-self-end">

            From the first conversation to the final handover, our process
            keeps every stage organized, transparent, and focused on
            delivering quality results.

          </p>

        </div>

      </section>

      {/* ================= PROCESS STEPS ================= */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 md:px-6">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {steps.map((step, index) => (

            <div
              key={step.number}
              className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl"
            >

              {/* Background Number */}
              <div className="absolute right-5 top-3 font-display text-7xl font-semibold text-stone-100 transition-colors duration-500 group-hover:text-bronze/10">
                {step.number}
              </div>

              {/* Card Content */}
              <div className="relative">

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-sm font-semibold text-bronze-light shadow-lg">
                    {step.icon}
                  </div>

                  <span className="text-sm font-medium text-stone-300">
                    STEP {index + 1}
                  </span>

                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold text-navy">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-500">
                  {step.description}
                </p>

                <div className="mt-7 h-px w-10 bg-bronze transition-all duration-500 group-hover:w-full" />

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= TIMELINE ================= */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white">

        <div className="hero-grid absolute inset-0 opacity-20" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-bronze/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-light">
                Project flow
              </p>

            </div>

            <h2 className="font-display text-4xl font-semibold md:text-5xl">

              Every stage.

              <span className="block text-bronze-light">
                One clear direction.
              </span>

            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/55">
              We coordinate each phase of your project so that decisions,
              construction, quality checks, and handover remain connected
              from beginning to end.
            </p>

          </div>

          <div className="relative mt-16">

            {/* Timeline Line */}
            <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />

            <div className="space-y-8">

              {steps.map((step) => (

                <div
                  key={step.number}
                  className="group relative md:pl-16"
                >

                  <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-bronze/40 bg-navy text-xs font-semibold text-bronze-light md:flex">
                    {step.number}
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition duration-500 hover:border-bronze/40 hover:bg-white/[0.08]">

                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-[0.2em] text-bronze-light">
                          Stage {step.number}
                        </p>

                        <h3 className="mt-2 font-display text-2xl font-semibold">
                          {step.title}
                        </h3>

                      </div>

                      <span className="text-3xl text-white/10 transition-colors duration-500 group-hover:text-bronze/40">
                        ◆
                      </span>

                    </div>

                    <p className="mt-4 max-w-3xl leading-7 text-white/50">
                      {step.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY OUR PROCESS ================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
              ✓
            </div>

            <h3 className="mt-7 font-display text-xl font-semibold text-navy">
              Transparent
            </h3>

            <p className="mt-3 leading-7 text-stone-500">
              Clear communication and project expectations at every stage.
            </p>

          </div>

          <div className="rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
              ◆
            </div>

            <h3 className="mt-7 font-display text-xl font-semibold text-navy">
              Quality Focused
            </h3>

            <p className="mt-3 leading-7 text-stone-500">
              Attention to materials, workmanship, detail, and finishing.
            </p>

          </div>

          <div className="rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
              →
            </div>

            <h3 className="mt-7 font-display text-xl font-semibold text-navy">
              Customer First
            </h3>

            <p className="mt-3 leading-7 text-stone-500">
              Your goals remain at the center of every project decision.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-stone-100 px-4 py-24 md:px-6">

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/70 bg-white/70 px-6 py-14 text-center shadow-2xl backdrop-blur-xl md:px-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-bronze-light shadow-lg">
            ◆
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
            Start your project
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
            Ready to build your vision?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-stone-500">
            Let's discuss your requirements and take the first step toward
            creating a space built for the future.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-navy-700"
          >
            Start Your Project
            <span>→</span>
          </a>

        </div>

      </section>

    </div>
  );
}