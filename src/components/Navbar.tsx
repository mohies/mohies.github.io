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
    <header className="fixed top-0 w-full bg-[#0f0f1f] text-white z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <a href="/" className="flex items-center space-x-2">
      <img src="/logo.png" alt="Mohcen.dev logo" loading="lazy" className="h-10 w-auto" />
    </a>


        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-mono">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-red-500 transition"
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
        <ul className="md:hidden flex flex-col items-center bg-[#1a1a2e] pb-4 space-y-2 font-mono">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-red-400"
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
