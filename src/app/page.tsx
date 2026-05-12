"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";

const steps = [
  { step: "01", title: "Requirement Analysis", desc: "We understand your business goals, technical needs, and timelines before writing a single line of code." },
  { step: "02", title: "Architecture & Planning", desc: "We design scalable system architecture and break work into clear milestones." },
  { step: "03", title: "Build & Deliver", desc: "Our team builds using production best practices with regular updates and demos." },
];

const roles = [
  { icon: "💻", title: "Frontend Developers", tech: "React, Next.js, Angular" },
  { icon: "⚙️", title: "Backend Developers", tech: "Node.js, Java, Python" },
  { icon: "📱", title: "Mobile Developers", tech: "React Native, Flutter" },
  { icon: "☁️", title: "DevOps Engineers", tech: "AWS, GCP, Docker, K8s" },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#38BDF810_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block border border-secondary text-secondary text-xs px-4 py-1 rounded-full mb-6 tracking-widest uppercase">
              Enterprise Software Studio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
              Building <span className="text-secondary">Production-Ready</span>{" "}
              Solutions for Real-World Problems
            </h1>
            <p className="text-slate-400 mt-6 text-lg max-w-2xl leading-relaxed">
              Skynexes delivers scalable, secure, enterprise-grade software
              solutions and provides on-demand developers to handle complex
              real-world projects.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-secondary text-black px-8 py-3 rounded-md font-semibold hover:bg-accent transition">
                  Start a Project →
                </button>
              </Link>
              <Link href="/services">
                <button className="w-full sm:w-auto border border-slate-700 px-8 py-3 rounded-md hover:border-secondary hover:text-secondary transition">
                  View Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-900 border-y border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Core Services</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              End-to-end software solutions built for performance, scale, and reliability.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Custom Software Development", description: "Enterprise-grade, scalable software solutions tailored to complex business requirements." },
              { title: "Web & App Development", description: "Modern, secure, and high-performance web and mobile applications." },
              { title: "Backend & API Engineering", description: "Robust backend systems, authentication, integrations, and APIs." },
              { title: "Cloud & DevOps", description: "Cloud infrastructure, CI/CD pipelines, monitoring, and deployment." },
              { title: "Hire Dedicated Developers", description: "On-demand developers when internal team bandwidth is full." },
              { title: "Maintenance & Support", description: "Post-delivery support, optimization, and long-term maintenance." },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ServiceCard title={service.title} description={service.description} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <button className="border border-slate-700 px-6 py-2 rounded-md text-sm hover:border-secondary hover:text-secondary transition">
                View All Services →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">How We Work</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              A proven process that delivers results on time, every time.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary border border-slate-800 rounded-xl p-8 relative"
              >
                <span className="text-5xl font-bold text-slate-800 absolute top-6 right-6">{step.step}</span>
                <h3 className="text-xl font-semibold mb-3 text-secondary">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-we-work">
              <button className="border border-slate-700 px-6 py-2 rounded-md text-sm hover:border-secondary hover:text-secondary transition">
                See Full Process →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* HIRE DEVELOPERS */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary text-sm uppercase tracking-widest">On-Demand Talent</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Hire Developers When You Need Them
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                When your internal team is at capacity, Skynexes provides vetted
                developers to ensure your project deadlines are never compromised.
                Contract, project-based, or long-term engagements available.
              </p>
              <Link href="/hire-developer">
                <button className="bg-secondary text-black px-6 py-3 rounded-md font-semibold hover:bg-accent transition">
                  Hire a Developer →
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {roles.map((role, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-secondary transition">
                  <p className="text-2xl mb-2">{role.icon}</p>
                  <h4 className="font-semibold text-sm">{role.title}</h4>
                  <p className="text-slate-500 text-xs mt-1">{role.tech}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something <span className="text-secondary">Great?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let's discuss your project and turn your vision into reality.
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