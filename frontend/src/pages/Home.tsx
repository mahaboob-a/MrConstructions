import { Link } from "react-router-dom";
import StatsBar from "../components/StatsBar";
import { company, strengths, services } from "../content";

export default function Home() {
  return (
    <div className="overflow-hidden bg-stone-50">
      {/* HERO */}
      <section className="relative isolate min-h-[720px] overflow-hidden bg-navy-900 text-white">
        {/* Background effects */}
        <div className="hero-grid absolute inset-0 opacity-40" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-bronze/20 blur-3xl" />

        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[15%] top-24 h-3 w-3 rounded-full bg-bronze shadow-[0_0_25px_rgba(255,255,255,0.5)]" />

        <div className="absolute bottom-32 left-[12%] h-2 w-2 rounded-full bg-white/50" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-28 md:grid-cols-2 md:px-6 md:pb-28 md:pt-36">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-bronze shadow-[0_0_12px_rgba(255,255,255,0.5)]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Construction & Civil Engineering
              </p>
            </div>

            <p className="text-sm font-medium tracking-wide text-bronze-light">
              Serving {company.serviceAreas} since {company.established}
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              We build  your dream house.
              
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              Reliable residential and commercial construction with quality
              workmanship, experienced professionals, and a commitment to
              customer satisfaction — serving {company.serviceAreas} since{" "}
              {company.established}.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-xl bg-bronze px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-bronze-light"
              >
                <span className="relative z-10">
                  Get a Quote
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

              <Link
                to="/projects"
                className="rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-bronze/60 hover:bg-white/10 hover:text-bronze-light"
              >
                View Our Projects
              </Link>
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="font-display text-2xl font-semibold text-white">
                  {company.established}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Established
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="font-display text-2xl font-semibold text-white">
                  {strengths.length}+
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Key strengths
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="font-display text-2xl font-semibold text-bronze-light">
                  100%
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                  Commitment
                </p>
              </div>
            </div>
          </div>

          {/* FUTURISTIC BUILDING */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

            <div className="relative mx-auto h-[430px] w-[310px] sm:h-[500px] sm:w-[360px]">
              {/* Glass frame */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/15 bg-white/[0.04] shadow-2xl backdrop-blur-md" />

              {/* Building */}
              <div className="absolute bottom-8 left-1/2 h-[360px] w-[190px] -translate-x-1/2 rounded-t-[2rem] border border-bronze/30 bg-gradient-to-b from-white/[0.12] to-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:h-[410px] sm:w-[220px]">
                {/* Windows */}
                <div className="absolute inset-x-5 top-7 grid grid-cols-3 gap-3">
                  {Array.from({ length: 24 }).map((_, index) => (
                    <span
                      key={index}
                      className="h-7 rounded-sm border border-white/10 bg-bronze/20 shadow-[0_0_12px_rgba(255,255,255,0.08)]"
                    />
                  ))}
                </div>

                {/* Architectural lines */}
                <span className="absolute bottom-0 left-7 top-0 w-px bg-white/10" />

                <span className="absolute bottom-0 right-7 top-0 w-px bg-white/10" />

                {/* Roof */}
                <div className="absolute -left-5 -right-5 -top-4 h-5 rounded-full border border-bronze/40 bg-bronze/20 backdrop-blur-xl" />
              </div>

              {/* Floating precision card */}
              <div className="absolute -left-10 top-20 rounded-2xl border border-white/15 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl sm:-left-16">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bronze/15 text-lg text-bronze-light">
                    ◆
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Precision
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Built to last
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating quality card */}
              <div className="absolute -bottom-5 -right-8 rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl sm:-right-14">
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

              {/* Decorative rings */}
              <div className="absolute -right-8 top-8 h-20 w-20 rounded-full border border-bronze/30" />

              <div className="absolute -right-4 top-12 h-12 w-12 rounded-full border border-white/10" />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent" />
      </section>

      {/* STATS */}
      <div className="relative z-20 -mt-8 px-4 md:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/40 bg-white/80 shadow-xl backdrop-blur-xl">
          <StatsBar />
        </div>
      </div>

      {/* SERVICES */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-bronze/5 blur-3xl" />

        <div className="relative">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-bronze" />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                  What we do
                </p>
              </div>

              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
                Comprehensive construction
                <span className="block text-navy/50">
                  solutions for every need.
                </span>
              </h2>
            </div>

            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-navy"
            >
              Explore services

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={service.name}
                className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl"
              >
                <div className="absolute right-6 top-5 font-display text-5xl font-semibold text-stone-100 transition-colors duration-500 group-hover:text-bronze/10">
                  0{index + 1}
                </div>

                <div className="relative">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-bronze/20 bg-bronze/10 text-sm font-bold text-bronze">
                    0{index + 1}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-navy">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-stone-500">
                    {service.description}
                  </p>

                  <div className="mt-6 h-px w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white">
        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-light">
                Why choose us
              </p>
            </div>

            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Construction with
              <span className="block text-bronze-light">
                purpose and precision.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/55">
              We combine reliable workmanship, experienced professionals and
              a customer-first approach to deliver spaces that are built for
              the future.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:bg-white/[0.08]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-bronze/10 text-bronze-light">
                  ✓
                </div>

                <p className="font-display text-lg font-semibold">
                  {strength}
                </p>

                <div className="mt-4 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-stone-100 px-4 py-24 md:px-6">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 px-6 py-14 text-center shadow-2xl backdrop-blur-xl md:px-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-bronze-light shadow-lg">
            ◆
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
            Start your next project
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
            Let's build something great.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-stone-500">
            Have a project in mind? Talk to our team about your next
            construction or interior design project.
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