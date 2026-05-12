"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-secondary text-sm uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Let's Build Something <span className="text-secondary">Great Together</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours
              with a clear plan of action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">

            {/* LEFT - FORM */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="bg-slate-900 border border-secondary rounded-xl p-10 text-center h-full flex flex-col items-center justify-center">
                  <p className="text-5xl mb-4">✅</p>
                  <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                  <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-xl p-8 grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-slate-400 mb-1 block">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-primary border border-slate-700 p-3 rounded-md text-sm focus:outline-none focus:border-secondary transition"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 mb-1 block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full bg-primary border border-slate-700 p-3 rounded-md text-sm focus:outline-none focus:border-secondary transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-1 block">Company (Optional)</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full bg-primary border border-slate-700 p-3 rounded-md text-sm focus:outline-none focus:border-secondary transition"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-1 block">Project Type</label>
                    <select className="w-full bg-primary border border-slate-700 p-3 rounded-md text-sm focus:outline-none focus:border-secondary transition">
                      <option>Select a service</option>
                      <option>Custom Software Development</option>
                      <option>Web & App Development</option>
                      <option>Backend / API Engineering</option>
                      <option>Cloud & DevOps</option>
                      <option>Hire Dedicated Developers</option>
                      <option>Maintenance & Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-1 block">Budget Range</label>
                    <select className="w-full bg-primary border border-slate-700 p-3 rounded-md text-sm focus:outline-none focus:border-secondary transition">
                      <option>Select budget range</option>
                      <option>Under $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-1 block">Project Description</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full bg-primary border border-slate-700 p-3 rounded-md text-sm focus:outline-none focus:border-secondary transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-secondary text-black py-3 rounded-md font-semibold hover:bg-accent transition"
                  >
                    Send Request →
                  </button>
                </form>
              )}
            </motion.div>

            {/* RIGHT - INFO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-6">Why Work With Skynexes?</h3>
                <div className="space-y-4">
                  {[
                    { icon: "⚡", title: "24hr Response", desc: "We respond to every inquiry within 24 hours — no ghosting, ever." },
                    { icon: "🎯", title: "No Obligation", desc: "First consultation is completely free with no strings attached." },
                    { icon: "🔒", title: "NDA Available", desc: "We sign NDAs before any project discussion if required." },
                    { icon: "🌍", title: "Global Clients", desc: "We work with clients across 10+ countries in multiple time zones." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-secondary transition">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Contact Details</h3>
                <div className="space-y-3 text-sm text-slate-400">
                  <p>📧 <span className="text-white">hello@skynexes.com</span></p>
                  <p>📍 <span className="text-white">Indore, Madhya Pradesh, India</span></p>
                  <p>🕐 <span className="text-white">Mon–Sat, 9AM–7PM IST</span></p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}