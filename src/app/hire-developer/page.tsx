"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const roles = [
  { icon: "💻", title: "Frontend Developers", tech: "React, Next.js, Angular, Vue", desc: "Pixel-perfect UI builders with a deep understanding of performance and UX." },
  { icon: "⚙️", title: "Backend Developers", tech: "Node.js, Java, Python, Spring", desc: "API architects and database experts who build reliable, scalable systems." },
  { icon: "🔁", title: "Full Stack Developers", tech: "MERN, MEAN, Next.js + Node", desc: "End-to-end engineers who own the entire product from frontend to database." },
  { icon: "📱", title: "Mobile Developers", tech: "React Native, Flutter, Swift", desc: "Cross-platform and native mobile developers for iOS and Android." },
  { icon: "☁️", title: "DevOps & Cloud Engineers", tech: "AWS, GCP, Docker, Kubernetes", desc: "Infrastructure experts who automate, monitor, and scale your systems." },
  { icon: "🧪", title: "QA & Automation Engineers", tech: "Selenium, Cypress, Playwright", desc: "Quality gatekeepers who ensure nothing broken ever reaches production." },
];

const models = [
  { title: "Project-Based", desc: "Fixed scope, fixed timeline. Ideal for well-defined projects with clear deliverables.", tag: "Most Popular" },
  { title: "Time & Material", desc: "Pay for actual hours worked. Best for evolving projects where scope changes often.", tag: "" },
  { title: "Dedicated Team", desc: "A full-time team embedded in your workflow. Perfect for long-term product development.", tag: "Best Value" },
];

export default function HireDeveloper() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">On-Demand Talent</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Hire <span className="text-secondary">Vetted Developers</span> When You Need Them
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              When your internal team is at capacity, Skynexes provides
              pre-vetted, experienced developers ready to plug into your
              workflow from day one — no lengthy hiring process required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-secondary text-black px-8 py-3 rounded-md font-semibold hover:bg-accent transition">
                  Hire a Developer →
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto border border-slate-700 px-8 py-3 rounded-md hover:border-secondary hover:text-secondary transition">
                  Talk to Us First
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">Available Talent</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Developers We Provide</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Every developer is pre-vetted, technically tested, and ready to contribute from day one.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-secondary transition group"
              >
                <p className="text-4xl mb-4">{role.icon}</p>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-secondary transition">{role.title}</h3>
                <p className="text-secondary text-xs mb-3">{role.tech}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">Flexibility</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Engagement Models</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Choose the model that fits your project and budget.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8">
            {models.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary border border-slate-800 rounded-xl p-7 hover:border-secondary transition relative"
              >
                {model.tag && (
                  <span className="absolute top-4 right-4 bg-secondary text-black text-xs px-3 py-1 rounded-full font-semibold">
                    {model.tag}
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-3 text-secondary">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Developer <span className="text-secondary">This Week?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Tell us your requirements and we'll match you with the right developer within 48 hours.
            </p>
            <Link href="/contact">
              <button className="bg-secondary text-black px-10 py-4 rounded-md font-semibold text-lg hover:bg-accent transition">
                Get Matched Now →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}