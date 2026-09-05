import { services } from "../content";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-medium tracking-wide text-bronze-light">Our Services</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">
            Comprehensive construction solutions for every need
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="border border-stone-200 bg-white p-6">
              <h2 className="font-display text-lg font-semibold text-navy">{s.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-bronze bg-white p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-navy">Not sure which service you need?</h2>
          <p className="mt-2 text-stone-600">Tell us about your project and we'll recommend the right approach.</p>
          <Link to="/contact" className="mt-6 inline-block bg-bronze px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-bronze-light">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
