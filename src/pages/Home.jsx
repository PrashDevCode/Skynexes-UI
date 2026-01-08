import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import HireDevelopers from "../pages/HireDevelopers";
import HowWeWork from "../pages/HowWeWork";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center bg-primary">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Building <span className="text-secondary">Production-Ready</span><br />
              Solutions for Real-World Problems
            </h1>

            <p className="text-slate-400 mt-6 text-base sm:text-lg max-w-2xl">
              Skynexes delivers scalable, secure, enterprise-grade software
              solutions and provides on-demand developers to handle complex
              real-world projects.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto bg-secondary text-black px-6 py-3 rounded-md font-semibold">
                Start a Project
              </button>
              <button className="w-full sm:w-auto border border-slate-700 px-6 py-3 rounded-md">
                View Services
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Custom Software Development"
              description="Enterprise-grade, scalable software solutions tailored to complex business requirements."
            />
            <ServiceCard
              title="Web & App Development"
              description="Modern, secure, and high-performance web and mobile applications."
            />
            <ServiceCard
              title="Backend & API Engineering"
              description="Robust backend systems, authentication, integrations, and APIs."
            />
            <ServiceCard
              title="Cloud & DevOps"
              description="Cloud infrastructure, CI/CD pipelines, monitoring, and deployment."
            />
            <ServiceCard
              title="Hire Dedicated Developers"
              description="On-demand developers when internal team bandwidth is full."
            />
            <ServiceCard
              title="Maintenance & Support"
              description="Post-delivery support, optimization, and long-term maintenance."
            />
          </div>

        </div>
        <HireDevelopers/>
        <HowWeWork/>
      </section>
    </>
  );
};

export default Home;
