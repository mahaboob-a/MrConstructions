import { company, mission, vision, values, team } from "../content";

export default function About() {
  const managingDirector = {
    name: "Mahammad Hussain.D",
    position: "Managing Director",
    // qualification: "B.Tech (Civil Engineering)",
    description:
      "With a strong vision and years of industry experience, Mahaboob Basha leads our team with a commitment to quality, innovation and excellence. His strategic direction drives the growth and success of MR Constructions.",
    image: "/md.jpg",
  };

  return (
    <main className="bg-stone-50 text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="hero-grid absolute inset-0" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-bronze">
              About Us
            </p>

            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
              Engineering with purpose.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">
              {company.name} is a construction and interior design company
              serving {company.serviceAreas}, delivering quality-focused
              solutions with practical engineering and professional execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-stone-200 backdrop-blur">
                Established {company.established}
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-stone-200 backdrop-blur">
                {company.serviceAreas}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-2">

            {/* Mission */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-xl font-bold text-bronze">
                M
              </div>

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-bronze">
                Our Mission
              </p>

              <h2 className="font-display text-3xl font-bold text-navy-900">
                Building with purpose.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                {mission}
              </p>
            </div>

            {/* Vision */}
            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-xl font-bold text-bronze">
                V
              </div>

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-bronze">
                Our Vision
              </p>

              <h2 className="font-display text-3xl font-bold text-navy-900">
                Creating lasting value.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                {vision}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-bronze">
              What guides us
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold text-navy-900 md:text-5xl">
              Our core values.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value}
                className="group rounded-3xl border border-slate-200 bg-stone-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-lg"
              >
                <span className="text-4xl font-black text-bronze/30">
                  0{index + 1}
                </span>

                <h3 className="mt-6 font-display text-xl font-bold text-navy-900">
                  {value}
                </h3>

                <div className="mt-5 h-1 w-10 rounded-full bg-bronze transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          OUR TEAM
      ====================================================== */}
      <section className="relative overflow-hidden bg-stone-50 py-24">

        {/* Background decoration */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-bronze/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-navy-900/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section heading */}
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-bronze" />

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-bronze">
                Our Team
              </span>

              <span className="h-[2px] w-10 bg-bronze" />
            </div>

            <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-navy-900 md:text-6xl">
              Meet our team.
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Skilled professionals, dedicated to building your vision.
            </p>
          </div>

          {/* =================================================
              MANAGING DIRECTOR FEATURE
          ================================================== */}
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 shadow-2xl">

            {/* Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="hero-grid absolute inset-0" />
            </div>

            <div className="relative grid lg:grid-cols-[320px_1fr_280px]">

              {/* MD IMAGE */}
              <div className="relative p-5 sm:p-7">

                <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border-2 border-bronze bg-slate-800">

                  <img
                    src={managingDirector.image}
                    alt={managingDirector.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Fallback */}
                  <div className="absolute inset-0 -z-10 flex items-center justify-center bg-slate-800">
                    <span className="text-7xl font-black text-bronze">
                      MB
                    </span>
                  </div>

                  {/* MD badge */}
                  <div className="absolute bottom-0 left-0 rounded-tr-3xl bg-bronze px-7 py-5 text-navy-900">
                    <div className="text-xs font-black uppercase tracking-widest">
                      ★ Our MD
                    </div>
                  </div>
                </div>

              </div>

              {/* MD INFORMATION */}
              <div className="flex flex-col justify-center px-7 py-10 lg:px-8">

                <div className="mb-5 h-[2px] w-14 bg-bronze" />

                <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
                  {managingDirector.name}
                </h3>

                <p className="mt-2 text-lg font-bold uppercase tracking-wider text-bronze">
                  {managingDirector.position}
                </p>

                {/* Qualification
                <div className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-bronze/60 bg-white/5 px-5 py-3 text-sm text-stone-200">
                  <span className="text-lg text-bronze">🎓</span>
                  <span>{managingDirector.qualification}</span>
                </div> */}

                <p className="mt-7 max-w-2xl leading-7 text-stone-300">
                  {managingDirector.description}
                </p>

              </div>

              {/* RIGHT VISUAL */}
              <div className="relative hidden min-h-[360px] overflow-hidden lg:block">

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="relative h-64 w-56 rotate-[-7deg] overflow-hidden rounded-xl border-4 border-white/80 shadow-2xl">
                    <div className="flex h-full items-center justify-center bg-stone-300">
                      <span className="text-center text-sm font-bold text-navy-900">
                        MR
                        <br />
                        CONSTRUCTIONS
                      </span>
                    </div>
                  </div>

                  <div className="absolute right-8 top-20 h-40 w-48 rotate-[8deg] overflow-hidden rounded-xl border-4 border-white/80 bg-stone-200 shadow-2xl">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-5xl">🏗️</span>
                    </div>
                  </div>

                  <div className="absolute bottom-10 right-20 h-32 w-40 rotate-[-5deg] overflow-hidden rounded-xl border-4 border-white/80 bg-stone-100 shadow-2xl">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-5xl">🏠</span>
                    </div>
                  </div>

                </div>

                <div className="absolute right-5 top-5 max-w-[150px] rotate-[-8deg] font-serif text-3xl italic text-bronze">
                  Building
                  <br />
                  Better
                  <br />
                  Tomorrow
                </div>

              </div>

            </div>
          </div>

          {/* =================================================
              TEAM MEMBER CARDS
          ================================================== */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {team.map((member, index) => (

              <div
                key={member.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Number */}
                <div className="absolute right-5 top-3 select-none text-6xl font-black text-bronze/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Avatar */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-xl font-black text-bronze">
                  {member.name.charAt(0)}
                </div>

                {/* Name */}
                <h3 className="relative mt-6 font-display text-2xl font-bold text-navy-900">
                  {member.name}
                </h3>

                {/* Position */}
                <p className="mt-2 text-sm font-black uppercase tracking-wide text-bronze">
                  {member.position}
                </p>

                {/* Qualification */}
                {member.qualification && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-stone-50 px-4 py-2 text-xs font-medium text-slate-700">
                    <span className="text-base">🎓</span>
                    <span>{member.qualification}</span>
                  </div>
                )}

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-slate-600">
                  {member.description}
                </p>

                {/* Bottom line */}
                <div className="mt-7 h-[2px] w-12 bg-bronze transition-all duration-300 group-hover:w-20" />

              </div>

            ))}

            {/* =================================================
                VALUES CARD
            ================================================== */}
            <div className="flex min-h-[300px] flex-col justify-center rounded-3xl bg-stone-50 p-8">

              <div className="mx-auto text-center">

                <div className="mx-auto mb-5 flex items-center justify-center gap-3">
                  <span className="h-[2px] w-10 bg-bronze" />

                  <span className="text-sm font-medium text-navy-900">
                    Together we build
                  </span>

                  <span className="h-[2px] w-10 bg-bronze" />
                </div>

                <h3 className="font-display text-3xl font-bold text-navy-900">
                  stronger futures
                </h3>

                <div className="mt-8 grid grid-cols-4 gap-3">

                  <div>
                    <div className="text-2xl">🏗️</div>
                    <p className="mt-2 text-[10px] font-bold uppercase text-slate-600">
                      Safety
                    </p>
                  </div>

                  <div>
                    <div className="text-2xl">⚙️</div>
                    <p className="mt-2 text-[10px] font-bold uppercase text-slate-600">
                      Quality
                    </p>
                  </div>

                  <div>
                    <div className="text-2xl">👥</div>
                    <p className="mt-2 text-[10px] font-bold uppercase text-slate-600">
                      Teamwork
                    </p>
                  </div>

                  <div>
                    <div className="text-2xl">🛡️</div>
                    <p className="mt-2 text-[10px] font-bold uppercase text-slate-600">
                      Trust
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-bronze">
            Start your project
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            Let's build something meaningful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-stone-300">
            Tell us about your project and our team will help you plan the
            next step.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-bronze px-7 py-3 font-bold text-navy-900 transition hover:scale-105"
          >
            Contact Us
          </a>

        </div>
      </section>

    </main>
  );
}