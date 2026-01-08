import { motion } from "framer-motion";

const steps = [
  {
    title: "Requirement Analysis",
    desc: "We understand business goals, technical needs, timelines, and risks before starting."
  },
  {
    title: "Architecture & Planning",
    desc: "We design scalable system architecture and break work into milestones."
  },
  {
    title: "Development",
    desc: "Our core or extended team builds the solution using production best practices."
  },
  {
    title: "Testing & QA",
    desc: "Manual and automated testing ensures reliability, security, and performance."
  },
  {
    title: "Deployment",
    desc: "We deploy to secure cloud infrastructure with monitoring enabled."
  },
  {
    title: "Handover & Support",
    desc: "Complete documentation, code handover, and optional long-term support."
  }
];

const HowWeWork = () => {
  return (
    <section className="min-h-screen py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          How We Work
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
