"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We deep-dive into your business goals, technical needs, timelines, and risks. No assumptions — just clarity before we write a single line of code.",
    details: ["Stakeholder interviews", "Technical feasibility", "Risk assessment", "Timeline planning"],
  },
  {
    step: "02",
    title: "Architecture & Planning",
    desc: "We design a scalable system architecture and break the work into clear, achievable milestones with defined deliverables.",
    details: ["System design", "Tech stack selection", "Milestone breakdown", "Resource planning"],
  },
  {
    step: "03",
    title: "Development",
    desc: "Our team builds the solution using production best practices — clean code, code reviews, and regular client demos at every milestone.",
    details: ["Agile sprints", "Daily standups", "Code reviews", "Client demos"],
  },
  {
    step: "04",
    title: "Testing & QA",
    desc: "Manual and automated testing ensures reliability, security, and performance before anything ships to production.",
    details: ["Unit & integration tests", "Security audits", "Performance testing", "UAT support"],
  },
  {
    step: "05",
    title: "Deployment",
    desc: "We deploy to secure cloud infrastructure with monitoring, alerting, and zero-downtime deployment pipelines in place.",
    details: ["CI/CD pipelines", "Cloud deployment", "Monitoring setup", "Zero downtime"],
  },
  {
    step: "06",
    title: "Handover & Support",
    desc: "Complete documentation, code handover, team training, and optional long-term support to ensure your success post-launch.",
    details: ["Full documentation", "Code handover", "Team training", "Ongoing support"],
  },
];

export default function HowWeWork() {
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
            <span className="text-secondary text-sm uppercase tracking-widest">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              A Process Built for <span className="text-secondary">Predictable</span> Delivery
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              No surprises. No missed deadlines. Every project follows a proven
              6-step process that keeps clients informed and delivers results
              on time, every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-secondary transition relative group"
              >
                <span className="text-6xl font-bold text-slate-800 absolute top-5 right-5 group-hover:text-slate-700 transition">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-secondary">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.desc}</p>
                <ul className="space-y-1">
                  {step.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="text-secondary text-xs">→</span> {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The Skynexes Guarantee</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "📅", title: "On-Time Delivery", desc: "We've never missed a committed deadline. Your timeline is our priority." },
              { icon: "💬", title: "Full Transparency", desc: "Weekly updates, demo calls, and access to project dashboards at all times." },
              { icon: "🛡️", title: "Quality Assured", desc: "Every deliverable goes through rigorous QA before it reaches your hands." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary border border-slate-800 rounded-xl p-7 text-center hover:border-secondary transition"
              >
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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
              Let's Build Something <span className="text-secondary">Together</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Ready to start your project with a team you can trust?
            </p>
            <Link href="/contact">
              <button className="bg-secondary text-black px-10 py-4 rounded-md font-semibold text-lg hover:bg-accent transition">
                Start a Project →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}