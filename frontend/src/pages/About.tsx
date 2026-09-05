import { company, mission, vision, values, team } from "../content";

export default function About() {
  return (
    <div>
      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-medium tracking-wide text-bronze-light">About Us</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">Engineering with purpose.</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            {company.name} is a team of engineers, planners and builders serving {company.serviceAreas} since{" "}
            {company.established}, committed to delivering quality construction with integrity, transparency and
            excellence.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="border border-stone-200 bg-white p-6">
          <h2 className="font-display text-xl font-semibold text-navy">Our Mission</h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">{mission}</p>
        </div>
        <div className="border border-stone-200 bg-white p-6">
          <h2 className="font-display text-xl font-semibold text-navy">Our Vision</h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">{vision}</p>
        </div>
      </section>

      <section className="bg-stone-200 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl font-semibold text-navy">Core Values</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {values.map((v) => (
              <span key={v} className="border border-navy px-4 py-2 text-sm font-medium text-navy">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-2xl font-semibold text-navy">Team</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="border border-stone-200 bg-white p-5">
              <p className="font-display text-lg font-semibold text-navy">{t.name}</p>
              <p className="mt-1 text-sm text-bronze">{t.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
