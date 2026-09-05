import { processSteps } from "../content";

export default function Process() {
  return (
    <div>
      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-medium tracking-wide text-bronze-light">Our Process</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">From concept to completion.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <ol className="space-y-8 border-l-2 border-stone-200 pl-8">
          {processSteps.map((s) => (
            <li key={s.step} className="relative">
              <span className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center bg-navy font-display text-sm font-semibold text-bronze-light">
                {s.step}
              </span>
              <h2 className="font-display text-lg font-semibold text-navy">{s.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{s.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
