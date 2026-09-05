import ContactForm from "../components/ContactForm";
import { company } from "../content";

export default function Contact() {
  return (
    <div>
      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-medium tracking-wide text-bronze-light">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">Let's build something great.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="font-display text-xl font-semibold text-navy">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-600">
            <li><span className="font-medium text-stone-800">Phone / WhatsApp:</span> {company.phone}</li>
            <li><span className="font-medium text-stone-800">Email:</span> {company.email}</li>
            <li><span className="font-medium text-stone-800">Address:</span> {company.address}</li>
            <li><span className="font-medium text-stone-800">Hours:</span> {company.hours}</li>
            <li><span className="font-medium text-stone-800">Service Areas:</span> {company.serviceAreas}</li>
          </ul>
        </div>
        <div className="border border-stone-200 bg-white p-6">
          <h2 className="font-display text-xl font-semibold text-navy">Request a quote</h2>
          <p className="mt-1 mb-6 text-sm text-stone-600">
            Share a few details about your project and we'll get back to you.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
