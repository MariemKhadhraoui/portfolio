"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg z-50 transition-colors dark:from-gray-900 dark:to-gray-800">

      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link href="/" className="hover:underline">
            Mariem&apos;s Portfolio
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link href="#about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-200 transition">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-gray-200 transition">
          Skills
          </Link>
          <Link href="#contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
          <Link
            href="./file/Mariem-Khadhraoui CV.pdf"
            target="_blank"
            className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 hover:shadow-md transition"
          >
            Resume
          </Link>
        </nav>

        {/* Theme & Menu Buttons */}
        <div className="flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-label={`Toggle to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-700 text-center py-6 space-y-4 text-lg">
          <Link
            href="#about"
            className="block hover:text-gray-200 transition"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block hover:text-gray-200 transition"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="block hover:text-gray-200 transition"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="block hover:text-gray-200 transition"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="./file/Mariem-Khadhraoui CV.pdf"
            target="_blank"
            className="block px-4 py-2 mx-auto w-3/4 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 hover:shadow-md transition"
            onClick={toggleMenu}
          >
            Resume
          </Link>
        </div>
      )}
    </header>
  );
}
