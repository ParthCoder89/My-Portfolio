import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-black">
      {/* Left - Name */}
      <h1 className="text-3xl font-bold text-green-400 dark:text-white">
        P
        <span className="text-green-700">A</span>
        R
        <span className="text-green-700">T</span>
        H
        <span className="text-green-700"> V</span>
        A
        <span className="text-green-700">I</span>
        S
        <span className="text-green-700">H</span>
      </h1>

      {/* Center - Links */}
      <div className="flex gap-8 font-medium">
        <Link
          to="/"
          className="text-blue-600 dark:text-white hover:underline"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-blue-600 dark:text-white hover:underline"
        >
          About Me
        </Link>
        <Link
          to="/achievements"
          className="text-blue-600 dark:text-white hover:underline"
        >
          Achievements
        </Link>
        {/* <Link
          to="/skills"
          className="text-blue-600 dark:text-white hover:underline"
        >
          Skills
        </Link> */}
        <Link
          to="/projects"
          className="text-blue-600 dark:text-white hover:underline"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-blue-600 dark:text-white hover:underline"
        >
          Contact
        </Link>
      </div>

      {/* Right - Toggle Button */}
      <ThemeToggle />
    </nav>
  );
}
