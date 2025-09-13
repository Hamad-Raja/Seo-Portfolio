import { useRef } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm("service_j3woqyz", "template_r3ukf3f", form.current, "a6wWen54KPfxFKWOh") // main email to you
  .then(
    (result) => {
      // Auto-reply to user
      emailjs.sendForm("service_j3woqyz", "template_axo3cfi", form.current, "a6wWen54KPfxFKWOh");

      alert("Message sent successfully!");
      form.current.reset();
    },
    (error) => {
      alert("Failed to send message. Please try again.");
    }
  );
  };

  return (
    <>
      <Navbar />
      <main className="container-px mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Request a proposal"
          subtitle="Tell me about your goals and constraints"
        />

        <form ref={form} onSubmit={sendEmail} className="card p-6 grid gap-4 md:grid-cols-2">
          {/* Subject */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Subject</label>
            <input
              name="title"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="Project subject"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Work Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="you@company.com"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="text-sm font-medium">Company</label>
            <input
              name="company"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="Your company name"
            />
          </div>

          {/* Website */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Website</label>
            <input
              name="website"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="https://"
            />
          </div>

          {/* Current SEO Status */}
          <div>
            <label className="text-sm font-medium">Current SEO Status</label>
            <select
              name="Status"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              <option value="">Select one</option>
              <option value="new">New Website (No SEO)</option>
              <option value="basic">Basic SEO Done</option>
              <option value="advanced">Advanced SEO Running</option>
            </select>
          </div>

          {/* SEO Goals */}
          <div>
            <label className="text-sm font-medium">SEO Goals</label>
            <input
              name="goals"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="e.g., Local SEO, traffic growth"
            />
          </div>

          {/* Target Market */}
          <div>
            <label className="text-sm font-medium">Target Market</label>
            <select
              name="targetMarket"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              <option value="">Select</option>
              <option value="local">Local</option>
              <option value="national">National</option>
              <option value="international">International</option>
            </select>
          </div>

          {/* Keywords */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Target Keywords</label>
            <textarea
              name="keywords"
              rows="2"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="Keywords you want to rank for"
            />
          </div>

          {/* Competitors */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Competitors</label>
            <textarea
              name="competitors"
              rows="2"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="Competitor websites"
            />
          </div>

          {/* Timeline */}
          <div>
            <label className="text-sm font-medium">Timeline</label>
            <select
              name="timeline"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              <option value="">Select</option>
              <option value="1-3 months">1-3 Months</option>
              <option value="3-6 months">3-6 Months</option>
              <option value="ongoing">Ongoing</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm font-medium">Budget</label>
            <select
              name="budget"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              <option value="">Select</option>
              <option value="<500">&lt;$500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000+">$1000+</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Project Details</label>
            <textarea
              rows="5"
              name="message"
              className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-brand/40"
              placeholder="Goals, timeline, budget…"
              required
            />
          </div>

          {/* Hidden time field */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          {/* Submit */}
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="btn-brand">
              Send Request
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
