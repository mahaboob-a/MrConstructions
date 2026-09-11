import { company, mission, vision, values, team } from "../content";

export default function About() {
  return (
    <div className="overflow-hidden bg-stone-50">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-24 text-white md:py-32">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="hero-grid absolute inset-0" />
        </div>

        {/* Background glow */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-bronze/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Decorative lights */}
        <div className="absolute right-[15%] top-24 h-3 w-3 rounded-full bg-bronze shadow-[0_0_25px_rgba(255,255,255,0.5)]" />
        <div className="absolute bottom-24 left-[12%] h-2 w-2 rounded-full bg-white/50" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 md:grid-cols-2 md:px-6">
          {/* Left content */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-bronze" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                About Us
              </span>
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-light">
              {company.name}
            </p>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Engineering
              <span className="block text-bronze-light">
                with purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              {company.name} is a team of engineers, planners and builders
              serving {company.serviceAreas} since {company.established},
              committed to delivering quality construction with integrity,
              transparency and excellence.
            </p>

            {/* Company information */}
            <div className="mt-9 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-4 shadow-xl backdrop-blur-xl">
                <p className="font-display text-2xl font-semibold text-bronze-light">
                  {company.established}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Established
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-4 shadow-xl backdrop-blur-xl">
                <p className="font-display text-2xl font-semibold text-white">
                  {company.serviceAreas}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Service Area
                </p>
              </div>
            </div>
          </div>

          {/* Futuristic 3D building */}
          <div className="relative mx-auto h-[430px] w-full max-w-md">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

            {/* Glass frame */}
            <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md" />

            {/* Building */}
            <div className="absolute left-1/2 top-1/2 h-72 w-44 -translate-x-1/2 -translate-y-1/2 rounded-t-[2rem] border border-bronze/30 bg-gradient-to-b from-white/[0.16] to-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              {/* Roof */}
              <div className="absolute -left-5 -right-5 -top-4 h-5 rounded-full border border-bronze/40 bg-bronze/20 backdrop-blur-xl" />

              {/* Windows */}
              <div className="absolute inset-x-5 top-7 grid grid-cols-3 gap-3">
                {Array.from({ length: 18 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-8 rounded-sm border border-white/10 bg-bronze/20 shadow-[0_0_14px_rgba(255,255,255,0.08)]"
                  />
                ))}
              </div>

              {/* Architectural lines */}
              <span className="absolute bottom-0 left-6 top-0 w-px bg-white/10" />

              <span className="absolute bottom-0 right-6 top-0 w-px bg-white/10" />
            </div>

            {/* Floating vision card */}
            <div className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl">
              <p className="text-xs uppercase tracking-wider text-white/40">
                Vision
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Building the future
              </p>
            </div>

            {/* Floating excellence card */}
            <div className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl">
              <p className="text-xs uppercase tracking-wider text-white/40">
                Excellence
              </p>

              <p className="mt-1 font-display text-3xl font-semibold text-bronze-light">
                100%
              </p>
            </div>

            {/* Decorative rings */}
            <div className="absolute right-4 top-5 h-16 w-16 rounded-full border border-bronze/30" />

            <div className="absolute right-8 top-9 h-8 w-8 rounded-full border border-white/10" />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent" />
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-bronze/5 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="group rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl md:p-10">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
                M
              </div>

              <span className="font-display text-5xl font-semibold text-stone-100">
                01
              </span>
            </div>

            <h2 className="mt-8 font-display text-3xl font-semibold text-navy">
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-stone-600">
              {mission}
            </p>

            <div className="mt-7 h-px w-12 bg-bronze transition-all duration-500 group-hover:w-full" />
          </div>

          {/* Vision */}
          <div className="group rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl md:p-10">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
                V
              </div>

              <span className="font-display text-5xl font-semibold text-stone-100">
                02
              </span>
            </div>

            <h2 className="mt-8 font-display text-3xl font-semibold text-navy">
              Our Vision
            </h2>

            <p className="mt-4 leading-8 text-stone-600">
              {vision}
            </p>

            <div className="mt-7 h-px w-12 bg-bronze transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-light">
                What defines us
              </p>
            </div>

            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Our core
              <span className="text-bronze-light"> values.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value}
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
                  {value}
                </h3>

                <div className="mt-5 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                The people behind the work
              </p>
            </div>

            <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
              Meet our team.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl"
            >
              {/* Background number */}
              <div className="absolute right-5 top-4 font-display text-6xl font-semibold text-stone-100 transition-colors duration-500 group-hover:text-bronze/10">
                0{index + 1}
              </div>

              <div className="relative">
                {/* Member icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-lg font-semibold text-bronze-light shadow-lg">
                  {member.name.charAt(0)}
                </div>

                <h3 className="mt-7 font-display text-xl font-semibold text-navy">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-bronze">
                  {member.position}
                </p>

                <div className="mt-7 h-px w-10 bg-bronze transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-stone-100 px-4 py-24 md:px-6">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/70 bg-white/70 px-6 py-14 text-center shadow-2xl backdrop-blur-xl md:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-bronze-light shadow-lg">
            ◆
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
            MR Constructions
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
            Building with purpose.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-stone-500">
            Engineering, construction, and design brought together to create
            spaces built for the future.
          </p>
        </div>
      </section>
    </div>
  );
}