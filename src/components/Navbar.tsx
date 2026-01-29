import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full text-white z-50" style={{ background: 'linear-gradient(180deg, rgba(11,12,18,0.95) 0%, rgba(14,20,34,0.9) 100%)', backdropFilter: 'blur(8px)' }}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <a href="/" className="flex items-center space-x-2">
      <img src="/logo.png" alt="Mohcen.dev logo" loading="lazy" className="h-10 w-auto" />
    </a>


        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8" style={{ fontFamily: 'var(--font-mono)' }}>
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm tracking-wide"
              onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border px-3 py-1 rounded"
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center pb-4 space-y-3" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(11,12,18,0.98)' }}>
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors py-1"
              onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
