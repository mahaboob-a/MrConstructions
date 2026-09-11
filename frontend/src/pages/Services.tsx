import { Link } from "react-router-dom";
import { company, services } from "../content";

export default function Services() {
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

          {/* Left Content */}
          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-bronze" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Our Services
              </span>
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-light">
              {company.name}
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Building
              <span className="block text-bronze-light">
                possibilities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              From planning and construction to finishing and design,
              we deliver reliable solutions with quality workmanship,
              experienced professionals, and attention to detail.
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
                View Projects
              </Link>

            </div>

          </div>

          {/* 3D Glass Construction Visual */}
          <div className="relative mx-auto h-[450px] w-full max-w-md">

            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

            {/* Glass Frame */}
            <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md" />

            {/* Main Structure */}
            <div className="absolute left-1/2 top-1/2 h-72 w-48 -translate-x-1/2 -translate-y-1/2 rounded-t-[2rem] border border-bronze/30 bg-gradient-to-b from-white/[0.16] to-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

              {/* Roof */}
              <div className="absolute -left-6 -right-6 -top-4 h-5 rounded-full border border-bronze/40 bg-bronze/20 backdrop-blur-xl" />

              {/* Windows */}
              <div className="absolute inset-x-5 top-7 grid grid-cols-3 gap-3">

                {Array.from({ length: 18 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-8 rounded-sm border border-white/10 bg-bronze/20 shadow-[0_0_14px_rgba(255,255,255,0.08)]"
                  />
                ))}

              </div>

              {/* Architectural Lines */}
              <span className="absolute bottom-0 left-7 top-0 w-px bg-white/10" />
              <span className="absolute bottom-0 right-7 top-0 w-px bg-white/10" />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-wider text-white/40">
                Services
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Built with precision
              </p>

            </div>

            {/* Floating Card 2 */}
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

            {/* Decorative Rings */}
            <div className="absolute right-4 top-5 h-20 w-20 rounded-full border border-bronze/30" />

            <div className="absolute right-9 top-10 h-10 w-10 rounded-full border border-white/10" />

            <div className="absolute bottom-16 left-8 h-8 w-8 rounded-full border border-bronze/20" />

          </div>

        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent" />

      </section>


      {/* ================= SERVICES INTRO ================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-bronze/5 blur-3xl" />

        <div className="relative">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                What we do
              </p>
            </div>

            <h2 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Complete construction
              <span className="block text-navy/50">
                solutions under one roof.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-stone-500">
              Our services are designed to support your project from
              concept to completion. We focus on quality, efficiency,
              transparency, and long-term value.
            </p>

          </div>


          {/* Service Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <div
                key={service.name}
                className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white/80 p-7 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-bronze/40 hover:shadow-2xl"
              >

                {/* Background Number */}
                <div className="absolute right-5 top-3 font-display text-7xl font-semibold text-stone-100 transition-colors duration-500 group-hover:text-bronze/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-bronze/20 bg-bronze/10 text-sm font-bold text-bronze shadow-sm transition duration-500 group-hover:bg-bronze group-hover:text-navy-900">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Service Name */}
                  <h3 className="mt-7 font-display text-xl font-semibold text-navy">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-stone-500">
                    {service.description}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-7 h-px w-10 bg-bronze transition-all duration-500 group-hover:w-full" />

                  {/* Learn More */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/60 transition-colors group-hover:text-bronze">
                    Professional service
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROCESS STRIP ================= */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white">

        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-light">
                Our approach
              </p>
            </div>

            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              From idea
              <span className="text-bronze-light">
                {" "}to reality.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/55">
              Every project is handled with a structured approach that
              keeps communication clear and quality at the center.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Consultation",
                text: "Understanding your requirements, ideas, and project goals.",
              },
              {
                number: "02",
                title: "Planning",
                text: "Developing the right approach, timeline, and construction strategy.",
              },
              {
                number: "03",
                title: "Execution",
                text: "Delivering the project with professional workmanship and attention to detail.",
              },
              {
                number: "04",
                title: "Completion",
                text: "Final inspection and delivery with a focus on customer satisfaction.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/40 hover:bg-white/[0.08]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-bronze/20 bg-bronze/10 text-sm font-semibold text-bronze-light">
                    {step.number}
                  </div>

                  <span className="text-2xl text-white/10 transition-colors duration-500 group-hover:text-bronze/40">
                    ◆
                  </span>

                </div>

                <h3 className="mt-7 font-display text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {step.text}
                </p>

                <div className="mt-6 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHY OUR SERVICES ================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="relative grid gap-12 md:grid-cols-2 md:items-center">

          {/* Left */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                Why choose our services
              </p>
            </div>

            <h2 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Designed around
              <span className="block text-navy/50">
                your project.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-stone-500">
              We combine construction knowledge, practical planning,
              quality materials, and experienced professionals to
              deliver dependable results.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-navy-700"
            >
              Discuss Your Project
              <span>→</span>
            </Link>

          </div>


          {/* Right Glass Cards */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="group rounded-3xl border border-stone-200 bg-white/80 p-7 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
                Q
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                Quality
              </h3>

              <p className="mt-3 text-sm leading-7 text-stone-500">
                Attention to detail and dependable workmanship across
                every stage of your project.
              </p>

            </div>


            <div className="group rounded-3xl border border-stone-200 bg-white/80 p-7 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
                E
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                Experience
              </h3>

              <p className="mt-3 text-sm leading-7 text-stone-500">
                Practical experience helping projects move from
                planning to successful completion.
              </p>

            </div>


            <div className="group rounded-3xl border border-stone-200 bg-white/80 p-7 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
                T
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                Transparency
              </h3>

              <p className="mt-3 text-sm leading-7 text-stone-500">
                Clear communication and a straightforward approach
                throughout the project.
              </p>

            </div>


            <div className="group rounded-3xl border border-stone-200 bg-white/80 p-7 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light">
                R
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                Reliability
              </h3>

              <p className="mt-3 text-sm leading-7 text-stone-500">
                A customer-focused approach built around dependable
                project delivery.
              </p>

            </div>

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
            Have a construction project in mind?
            Talk to the {company.name} team about your requirements.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-navy-700"
          >
            Get Started
            <span>→</span>
          </Link>

        </div>

      </section>

    </div>
  );
}