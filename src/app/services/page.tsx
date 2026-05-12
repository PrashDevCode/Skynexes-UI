"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "🖥️",
    title: "Custom Software Development",
    desc: "Enterprise-grade, scalable software solutions tailored to complex business requirements. From architecture to deployment, we own the full lifecycle.",
    features: ["System Architecture", "API Design", "Database Design", "Code Review"],
  },
  {
    icon: "🌐",
    title: "Web & App Development",
    desc: "Modern, secure, and high-performance web and mobile applications built with the latest technologies and best practices.",
    features: ["React / Next.js", "React Native", "Progressive Web Apps", "E-commerce"],
  },
  {
    icon: "⚙️",
    title: "Backend & API Engineering",
    desc: "Robust backend systems, authentication, third-party integrations, and high-performance APIs built for scale.",
    features: ["REST & GraphQL APIs", "Auth & Security", "Microservices", "Third-party Integrations"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure setup, CI/CD pipelines, container orchestration, monitoring, and automated deployments.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Alerts"],
  },
  {
    icon: "👨‍💻",
    title: "Hire Dedicated Developers",
    desc: "On-demand vetted developers to augment your team when internal bandwidth is full. Flexible engagement models available.",
    features: ["Frontend Developers", "Backend Developers", "Full Stack", "DevOps Engineers"],
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    desc: "Post-delivery support, performance optimization, bug fixes, and long-term maintenance to keep your systems running smoothly.",
    features: ["24/7 Monitoring", "Bug Fixes", "Performance Tuning", "Security Updates"],
  },
];

export default function Services() {
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
            <span className="text-secondary text-sm uppercase tracking-widest">What We Offer</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Services Built for <span className="text-secondary">Real Business</span> Needs
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              From idea to production — we cover every layer of modern software
              development with a focus on quality, performance, and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-secondary transition group"
              >
                <p className="text-4xl mb-4">{service.icon}</p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="text-secondary">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">Why Skynexes</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Companies Choose Us</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚀", title: "Fast Delivery", desc: "We ship on time without sacrificing quality." },
              { icon: "🔒", title: "Secure by Default", desc: "Security is baked into every layer we build." },
              { icon: "📊", title: "Transparent Process", desc: "Regular updates, demos, and full visibility." },
              { icon: "💰", title: "Cost Effective", desc: "Enterprise quality at startup-friendly pricing." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary border border-slate-800 rounded-xl p-6 text-center hover:border-secondary transition"
              >
                <p className="text-3xl mb-3">{item.icon}</p>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
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
              Ready to Get <span className="text-secondary">Started?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <Link href="/contact">
              <button className="bg-secondary text-black px-10 py-4 rounded-md font-semibold text-lg hover:bg-accent transition">
                Start a Project Today →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}