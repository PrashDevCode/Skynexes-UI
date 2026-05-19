"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  { icon: "⚡", title: "Speed Without Compromise", desc: "We move fast but never cut corners. Every line of code is production-ready from day one." },
  { icon: "🔒", title: "Security First", desc: "Security is built into our process, not bolted on at the end. Every system we build is hardened by default." },
  { icon: "📈", title: "Built to Scale", desc: "We architect systems that grow with your business — from 100 users to 10 million." },
  { icon: "🤝", title: "Client Partnership", desc: "We treat your project like our own. Full transparency, regular updates, zero surprises." },
  { icon: "🧠", title: "Deep Expertise", desc: "Our team brings years of enterprise experience across industries and tech stacks." },
  { icon: "🌍", title: "Remote-First", desc: "A globally distributed team delivering world-class software across time zones." },
];

const team = [
  { name: "Prashant Kr. Singh", role: "Founder & CEO", init: "PS" },
  // { name: "Sakshi Bharti", role: "Co-Founder", init: "SB" },
  // { name: "Rahul Verma", role: "Lead Engineer", init: "RV" },
  // { name: "Sara Khan", role: "Product Designer", init: "SK" },
];

export default function About() {
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
            <span className="text-secondary text-sm uppercase tracking-widest">Who We Are</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              We Build Software That <span className="text-secondary">Actually Works</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Skynexes is an enterprise software studio founded by engineers
              who were tired of seeing great ideas fail due to poor execution.
              We exist to bridge the gap between vision and reality — delivering
              production-ready software that scales, performs, and lasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-slate-900 border-y border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary text-sm uppercase tracking-widest">Our Mission</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                Turning Complex Problems Into Elegant Solutions
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We believe great software is the foundation of every successful
                business in the modern world. Our mission is to make
                enterprise-grade software accessible to companies of all sizes —
                not just the Fortune 500.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Every project we take on is treated with the same level of care,
                precision, and craftsmanship — whether it's a startup MVP or a
                large-scale enterprise platform.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2022", label: "Founded" },
                { value: "50+", label: "Projects Delivered" },
                { value: "15+", label: "Team Members" },
                { value: "10+", label: "Countries Served" },
              ].map((stat, i) => (
                <div key={i} className="bg-primary border border-slate-800 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Core Values</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              These aren't just words on a wall — they're how we operate every single day.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-secondary transition"
              >
                <p className="text-3xl mb-4">{value.icon}</p>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">The People</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet the Team</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Engineers, designers, and builders who care deeply about craft.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary border border-slate-800 rounded-xl p-6 text-center hover:border-secondary transition"
              >
                <div className="w-16 h-16 rounded-full bg-secondary text-black flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {member.init}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{member.role}</p>
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
              Want to Work <span className="text-secondary">With Us?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              We're always open to exciting new projects and partnerships.
            </p>
            <Link href="/contact">
              <button className="bg-secondary text-black px-10 py-4 rounded-md font-semibold text-lg hover:bg-accent transition">
                Get In Touch →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}