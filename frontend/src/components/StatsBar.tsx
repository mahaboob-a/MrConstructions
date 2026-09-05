import { stats } from "../content";

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 divide-y divide-white/10 border-t border-white/10 bg-navy-900 text-white sm:grid-cols-4 sm:divide-x sm:divide-y-0">
      {stats.map((s) => (
        <div key={s.label} className="px-4 py-6 text-center">
          <p className="font-display text-3xl font-semibold text-bronze-light">{s.value}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-white/70">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
