const Contact = () => {
  return (
    <section className="min-h-screen py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-6">
          Start a Project
        </h1>

        <p className="text-slate-400 mb-10">
          Tell us about your project requirements and we’ll get back to you.
        </p>

        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-slate-900 border border-slate-800 p-3 rounded-md"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-slate-900 border border-slate-800 p-3 rounded-md"
          />

          <select className="bg-slate-900 border border-slate-800 p-3 rounded-md">
            <option>Project Type</option>
            <option>Web Application</option>
            <option>Mobile App</option>
            <option>Backend / API</option>
            <option>Hire Developers</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe your project"
            className="bg-slate-900 border border-slate-800 p-3 rounded-md"
          />

          <button
            type="submit"
            className="bg-secondary text-black py-3 rounded-md font-semibold"
          >
            Submit Request
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
