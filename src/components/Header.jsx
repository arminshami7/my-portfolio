import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">

        {/* لوگو / اسم */}
        <div className="text-xl sm:text-2xl font-bold font-mono border-2 rounded-xl px-4 py-1">
          <a href="#">Armin Sahami</a>
        </div>

        {/* منوی دسکتاپ */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* دکمه همبرگر موبایل */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* منوی موبایل */}
      {open && (
        <ul className="md:hidden bg-gray-800/50 backdrop-blur-md text-white flex flex-col items-center gap-6 p-6
        rounded-lg shadow-lg mx-2.5 ">
          <li>
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;