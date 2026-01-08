const HireDevelopers = () => {
  return (
    <section className="min-h-screen py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-6">
          Hire Developers On Demand
        </h1>

        <p className="text-slate-400 max-w-3xl mb-12">
          When our internal team is fully engaged, Skynexes provides
          vetted external developers to ensure your project deadlines
          are never compromised.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Frontend Developers (React, Angular)",
            "Backend Developers (Node, Java, Spring)",
            "Full Stack Developers",
            "Mobile App Developers",
            "DevOps & Cloud Engineers",
            "QA & Automation Engineers"
          ].map((role, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="font-semibold">{role}</h3>
              <p className="text-slate-400 text-sm mt-2">
                Available on contract, project-based, or time-based engagement.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HireDevelopers;
