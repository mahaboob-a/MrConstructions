import { useState } from "react";
import { NavLink } from "react-router-dom";
import { company } from "../content";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-bronze" : "text-white/85 hover:text-bronze-light"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-navy-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
       <NavLink to="/" className="flex items-center gap-3">
  <img src="/logo.jpg" alt={`${company.name} logo`} className="h-10 w-auto sm:h-12" />
  <span className="hidden flex-col leading-tight sm:flex">
    <span className="font-display text-lg font-semibold text-white">
      {company.name.toUpperCase()}
    </span>
    <span className="text-xs text-bronze-light">{company.tagline}</span>
  </span>
</NavLink>

        <nav className="hidden md:flex md:items-center">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-3 border border-bronze px-4 py-2 text-sm font-medium text-bronze-light transition-colors hover:bg-bronze hover:text-navy-900"
          >
            Get a Quote
          </NavLink>
        </nav>

        <button
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-white/10 bg-navy-900 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 border border-bronze px-4 py-2 text-center text-sm font-medium text-bronze-light"
          >
            Get a Quote
          </NavLink>
        </nav>
      )}
    </header>
  );
}
