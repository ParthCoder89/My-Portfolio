import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [shownav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 py-4 shadow-md bg-white dark:bg-gray-950">
      {/* Left - Name */}
      <h1 className=" md:text-2xl font-bold text-green-400 dark:text-white">
        P<span className="text-green-700">A</span>R
        <span className="text-green-700">T</span>H
        <span className="text-green-700"> V</span>A
        <span className="text-green-700">I</span>S
        <span className="text-green-700">H</span>
      </h1>

      {/* Center - Links (hidden on mobile) */}
      <div className="hidden md:flex gap-4 font-medium">
        <Link to="/" className="text-blue-600 dark:text-white hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 dark:text-white hover:underline">
          About Me
        </Link>
        <Link to="/achievements" className="text-blue-600 dark:text-white hover:underline">
          Achievements
        </Link>
        <Link to="/projects" className="text-blue-600 dark:text-white hover:underline">
          Projects
        </Link>
        <Link to="/contact" className="text-blue-600 dark:text-white hover:underline">
          Contact
        </Link>
      </div>
      <div>

        {/* Right - Toggle Button */}
        <ThemeToggle />

        {/* Mobile menu button (only visible on mobile) */}
        <button
          className="md:hidden text-3xl dark:text-white ml-6 mr-3"
          onClick={() => setShowNav(!shownav)}
        >
          &#9776;
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`slide-nav ${shownav ? "active-slide-nav" : ""} md:hidden 
        fixed z-50 bg-black text-white dark:text-black dark:bg-white transition-transform duration-300`}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="text-xl md:text-2xl absolute top-4 right-4 font-bold"
            onClick={() => setShowNav(false)}
            aria-label="Close navigation menu"
          >
            ×
          </button>
          <h1 className="text-xl md:text-2xl mt-6 text-center font-bold text-green-400 ">
            P<span className="text-green-700">A</span>R
            <span className="text-green-700">T</span>H
            <span className="text-green-700"> V</span>A
            <span className="text-green-700">I</span>S
            <span className="text-green-700">H</span>
          </h1>
          <ul className="flex flex-col items-center gap-8 mt-20 font-medium text-xl px-20">
            <li><Link to="/" onClick={() => setShowNav(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setShowNav(false)}>About Me</Link></li>
            <li><Link to="/achievements" onClick={() => setShowNav(false)}>Achievements</Link></li>
            <li><Link to="/projects" onClick={() => setShowNav(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setShowNav(false)}>Contact</Link></li>
          </ul>
          <div className="flex flex-col items-center gap-4 mt-20">
            <a
              href="https://www.linkedin.com/in/parth-vaish-46b51533a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ParthCoder89"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
