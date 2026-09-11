import { company } from "../content";

export default function Contact() {
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
                Contact Us
              </span>

            </div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-bronze-light">
              {company.name}
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">

              Let's build

              <span className="block text-bronze-light">
                your vision.
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              Have a construction, renovation, interior, or development
              project in mind? Tell us about it and our team will help you
              take the next step.
            </p>

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

          {/* Futuristic Contact Visual */}
          <div className="relative mx-auto h-[430px] w-full max-w-md">

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl" />

            <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md" />

            <div className="absolute left-1/2 top-1/2 h-72 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-bronze/30 bg-gradient-to-b from-white/[0.14] to-white/[0.03] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

              <div className="flex h-full flex-col justify-between">

                <div className="flex items-center justify-between">

                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Connect
                  </span>

                  <span className="text-bronze-light">
                    ◆
                  </span>

                </div>

                <div className="space-y-4">

                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">

                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Discuss
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Your Project
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">

                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Plan
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Your Future Space
                    </p>

                  </div>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Next Step
                  </p>

                  <p className="mt-1 font-display text-xl font-semibold text-bronze-light">
                    Start a conversation
                  </p>

                </div>

              </div>

            </div>

            <div className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-wider text-white/40">
                Response
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Let's talk
              </p>

            </div>

            <div className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl">

              <p className="text-xs uppercase tracking-wider text-white/40">
                Focus
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


      {/* ================= CONTACT SECTION ================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-6">

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-bronze/5 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="lg:col-span-2">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                Get in touch
              </p>

            </div>

            <h2 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">

              Let's discuss

              <span className="block text-navy/50">
                your project.
              </span>

            </h2>

            <p className="mt-6 leading-8 text-stone-500">
              Whether you are planning a new construction, renovation,
              commercial development, or interior project, we're ready
              to hear your ideas.
            </p>

            <div className="mt-10 space-y-4">

              <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-bronze/30">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-bronze-light">
                    @
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-wider text-stone-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-navy">
                      Contact our team
                    </p>

                  </div>

                </div>

              </div>


              <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-bronze/30">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-bronze-light">
                    +
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-wider text-stone-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-navy">
                      Speak with our team
                    </p>

                  </div>

                </div>

              </div>


              <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-bronze/30">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-bronze-light">
                    ◇
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-wider text-stone-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-navy">
                      {company.serviceAreas}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="lg:col-span-3">

            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-2xl backdrop-blur-xl md:p-10">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                    Project enquiry
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                    Tell us about your project
                  </h3>

                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-navy text-bronze-light sm:flex">
                  ◆
                </div>

              </div>


              <form className="mt-8 space-y-6">

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-stone-500"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-stone-200 bg-white/70 px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-stone-400 focus:border-bronze focus:ring-2 focus:ring-bronze/10"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-stone-500"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-stone-200 bg-white/70 px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-stone-400 focus:border-bronze focus:ring-2 focus:ring-bronze/10"
                    />

                  </div>

                </div>


                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-wider text-stone-500"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="mt-2 w-full rounded-xl border border-stone-200 bg-white/70 px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-stone-400 focus:border-bronze focus:ring-2 focus:ring-bronze/10"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="projectType"
                      className="text-xs font-semibold uppercase tracking-wider text-stone-500"
                    >
                      Project Type
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-stone-200 bg-white/70 px-4 py-3.5 text-sm text-navy outline-none transition focus:border-bronze focus:ring-2 focus:ring-bronze/10"
                    >

                      <option value="" disabled>
                        Select project type
                      </option>

                      <option value="residential">
                        Residential Construction
                      </option>

                      <option value="commercial">
                        Commercial Construction
                      </option>

                      <option value="renovation">
                        Renovation
                      </option>

                      <option value="interior">
                        Interior Design
                      </option>

                      <option value="other">
                        Other
                      </option>

                    </select>

                  </div>

                </div>


                <div>

                  <label
                    htmlFor="budget"
                    className="text-xs font-semibold uppercase tracking-wider text-stone-500"
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-stone-200 bg-white/70 px-4 py-3.5 text-sm text-navy outline-none transition focus:border-bronze focus:ring-2 focus:ring-bronze/10"
                  >

                    <option value="" disabled>
                      Select budget range
                    </option>

                    <option value="small">
                      Under ₹10 Lakhs
                    </option>

                    <option value="medium">
                      ₹10 Lakhs – ₹25 Lakhs
                    </option>

                    <option value="large">
                      ₹25 Lakhs – ₹50 Lakhs
                    </option>

                    <option value="premium">
                      ₹50 Lakhs – ₹1 Crore
                    </option>

                    <option value="custom">
                      ₹1 Crore+
                    </option>

                  </select>

                </div>


                <div>

                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-stone-500"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project, requirements, location, timeline, and anything else we should know..."
                    className="mt-2 w-full resize-none rounded-xl border border-stone-200 bg-white/70 px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-stone-400 focus:border-bronze focus:ring-2 focus:ring-bronze/10"
                  />

                </div>


                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-navy px-7 py-4 text-sm font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-navy-700"
                >

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Project Enquiry
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-bronze/20 transition-transform duration-500 group-hover:translate-x-0" />

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECT TYPES ================= */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white">

        <div className="hero-grid absolute inset-0 opacity-20" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-bronze/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-bronze" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-light">
                What can we build?
              </p>

            </div>

            <h2 className="font-display text-4xl font-semibold md:text-5xl">

              Bring us your

              <span className="block text-bronze-light">
                next challenge.
              </span>

            </h2>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/40 hover:bg-white/[0.08]">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bronze/10 text-bronze-light">
                01
              </div>

              <h3 className="mt-7 font-display text-xl font-semibold">
                Residential
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Homes and residential spaces designed and built around
                your requirements.
              </p>

              <div className="mt-6 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full" />

            </div>


            <div className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/40 hover:bg-white/[0.08]">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bronze/10 text-bronze-light">
                02
              </div>

              <h3 className="mt-7 font-display text-xl font-semibold">
                Commercial
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Functional commercial environments created for modern
                businesses and organizations.
              </p>

              <div className="mt-6 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full" />

            </div>


            <div className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/40 hover:bg-white/[0.08]">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bronze/10 text-bronze-light">
                03
              </div>

              <h3 className="mt-7 font-display text-xl font-semibold">
                Renovation
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Transforming existing spaces through thoughtful renovation
                and modern upgrades.
              </p>

              <div className="mt-6 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full" />

            </div>


            <div className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-bronze/40 hover:bg-white/[0.08]">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bronze/10 text-bronze-light">
                04
              </div>

              <h3 className="mt-7 font-display text-xl font-semibold">
                Interiors
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Interior environments combining practical planning,
                aesthetics, and quality finishing.
              </p>

              <div className="mt-6 h-px w-8 bg-bronze transition-all duration-500 group-hover:w-full" />

            </div>

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
            {company.name}
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
            Your project starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-stone-500">
            Tell us what you want to build. We'll help turn your idea
            into a clear plan and a space built for the future.
          </p>

          <a
            href="#name"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-navy-700"
          >
            Start Your Enquiry
            <span>→</span>
          </a>

        </div>

      </section>

    </div>
  );
}