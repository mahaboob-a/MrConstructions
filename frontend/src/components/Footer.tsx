import { Link } from "react-router-dom";
import { company } from "../content";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <p className="font-display text-lg font-semibold text-white">{company.name.toUpperCase()}</p>
          <p className="mt-1 text-sm text-bronze-light">{company.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed">
            Reliable residential and commercial construction across {company.serviceAreas}, building since{" "}
            {company.established}.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-bronze-light">About</Link></li>
            <li><Link to="/services" className="hover:text-bronze-light">Services</Link></li>
            <li><Link to="/projects" className="hover:text-bronze-light">Projects</Link></li>
            <li><Link to="/process" className="hover:text-bronze-light">Process</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li>{company.address}</li>
            <li>{company.hours}</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Service Areas</p>
          <p className="text-sm">{company.serviceAreas}</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
