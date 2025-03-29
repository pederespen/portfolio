import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-10 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">Your Name</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#hero"
              className="hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-blue-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
