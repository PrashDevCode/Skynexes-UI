import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-secondary">
          Skynexes
        </h1>

        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link to="/" className="hover:text-secondary">Home</Link></li>
          <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
          <li><Link to="/about" className="hover:text-secondary">About</Link></li>
          <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
        </ul>

        <button className="hidden md:block bg-secondary text-black px-4 py-2 rounded-md text-sm font-semibold">
          Start Project
        </button>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link><br />
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link><br />
          <Link to="/about" onClick={() => setOpen(false)}>About</Link><br />
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
