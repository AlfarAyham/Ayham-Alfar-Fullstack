import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const location = useLocation();

  const toggleTheme = () => setIsDark(!isDark);

  const navLinkStyle = (path) =>
    location.pathname === path
      ? "bg-indigo-700 text-white"
      : "text-gray-300 hover:bg-indigo-500 hover:text-white";

  return (
    <nav className={`sticky top-0 z-50 w-full ${isDark ? "bg-gray-900" : "bg-white shadow-md"}`}>      
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-indigo-500 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span className={`text-xl font-bold ${isDark ? "text-white" : "text-indigo-800"}`}>AYHAM</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className={`${navLinkStyle("/" )} rounded-md px-3 py-2 text-sm font-medium`}>Home</Link>
                <Link to="/about" className={`${navLinkStyle("/about")} rounded-md px-3 py-2 text-sm font-medium`}>About</Link>
                <Link to="/projects" className={`${navLinkStyle("/projects")} rounded-md px-3 py-2 text-sm font-medium`}>Projects</Link>
                <Link to="/contact" className={`${navLinkStyle("/contact")} rounded-md px-3 py-2 text-sm font-medium`}>Contact</Link>
              </div>
            </div>
          </div>

          {/* Theme toggle */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-yellow-400 hover:text-yellow-500 transition-colors"
              title="Toggle Dark Mode"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link to="/" className={`${navLinkStyle("/" )} block rounded-md px-3 py-2 text-base font-medium`}>Home</Link>
            <Link to="/about" className={`${navLinkStyle("/about")} block rounded-md px-3 py-2 text-base font-medium`}>About</Link>
            <Link to="/projects" className={`${navLinkStyle("/projects")} block rounded-md px-3 py-2 text-base font-medium`}>Projects</Link>
            <Link to="/contact" className={`${navLinkStyle("/contact")} block rounded-md px-3 py-2 text-base font-medium`}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
