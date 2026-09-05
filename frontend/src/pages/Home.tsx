import { Link } from "react-router-dom";
import StatsBar from "../components/StatsBar";
import { company, strengths, services } from "../content";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28">
          <div>
            <p className="text-sm font-medium tracking-wide text-bronze-light">
              Construction & Civil Engineering — {company.serviceAreas}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              We build your dream house.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
              Reliable residential and commercial construction with quality workmanship, experienced
              professionals, and a commitment to customer satisfaction — serving {company.serviceAreas} since{" "}
              {company.established}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="bg-bronze px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-bronze-light">
                Get a Quote
              </Link>
              <Link to="/projects" className="border border-white/40 px-6 py-3 text-sm font-semibold hover:border-bronze-light hover:text-bronze-light">
                View Our Projects
              </Link>
            </div>
          </div>

          <div className="border border-white/10 bg-white/5 p-6">
            <p className="font-display text-lg font-semibold text-bronze-light">Why clients choose us</p>
            <ul className="mt-4 space-y-3">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-white/85">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-bronze" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="text-sm font-medium tracking-wide text-bronze">Our Services</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
          Comprehensive construction solutions for every need
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="border border-stone-200 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-navy">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.description}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="mt-8 inline-block text-sm font-semibold text-navy underline decoration-bronze underline-offset-4">
          See all services
        </Link>
      </section>

      <section className="bg-stone-200">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Let's build something great.</h2>
          <p className="mx-auto mt-3 max-w-xl text-stone-600">
            Have a project in mind? Talk to our team about your next construction or interior design project.
          </p>
          <Link to="/contact" className="mt-6 inline-block bg-navy px-8 py-3 text-sm font-semibold text-white hover:bg-navy-700">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
