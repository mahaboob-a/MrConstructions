import { FormEvent, useState } from "react";

const projectTypes = ["Residential", "Commercial", "Industrial", "Renovation", "Civil / Other"];
const budgetRanges = ["Under ₹10L", "₹10L–₹25L", "₹25L–₹50L", "Above ₹50L", "Not sure yet"];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      projectType: data.get("projectType"),
      budgetRange: data.get("budgetRange"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-bronze bg-white p-6 text-navy">
        <p className="font-display text-lg font-semibold">Request received.</p>
        <p className="mt-2 text-sm text-stone-600">
          Thanks for reaching out — our team will contact you shortly at the number or email you provided.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-stone-200 bg-white px-3 py-2 text-sm text-stone-800 focus:border-navy focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium">Full name</label>
        <input id="fullName" name="fullName" required className={inputClass} />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-1 block text-sm font-medium">Email address</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone number</label>
        <input id="phone" name="phone" required className={inputClass} />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="projectType" className="mb-1 block text-sm font-medium">Project type</label>
        <select id="projectType" name="projectType" required className={inputClass} defaultValue="">
          <option value="" disabled>Select a project type</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="budgetRange" className="mb-1 block text-sm font-medium">Budget range</label>
        <select id="budgetRange" name="budgetRange" className={inputClass} defaultValue="">
          <option value="" disabled>Select a range</option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1 block text-sm font-medium">Tell us about your project</label>
        <textarea id="message" name="message" rows={4} required className={inputClass} />
      </div>

      {status === "error" && <p className="sm:col-span-2 text-sm text-red-700">{errorMsg}</p>}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-bronze px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-bronze-light disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Start Your Project"}
        </button>
      </div>
    </form>
  );
}
