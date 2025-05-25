import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ refs }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = () => setIsDark(!isDark);

  const scrollTo = (ref, section) => {
    setIsOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section); // Update manually on click
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = [
      refs.homeRef,
      refs.aboutRef,
      refs.projectsRef,
      refs.technologiesRef,
      refs.contactRef,
    ];

    sections.forEach((ref) => {
      if (ref.current) sectionObserver.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) sectionObserver.unobserve(ref.current);
      });
    };
  }, [refs]);

  const linkStyle = (section) =>
    `cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isDark
        ? section === activeSection
          ? "text-yellow-300"
          : "text-white hover:bg-gray-700"
        : section === activeSection
          ? "text-indigo-700 font-bold"
          : "text-gray-700 hover:bg-indigo-500 hover:text-white"
    }`;

  return (
    <nav className={`sticky top-0 z-50 w-full ${isDark ? "bg-gray-900" : "bg-white shadow-md"}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-indigo-500 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and desktop nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span className={`text-xl font-bold ${isDark ? "text-white" : "text-indigo-800"}`}>AYHAM</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
  <button onClick={() => scrollTo(refs.homeRef, "home")} className={`${linkStyle("home")} text-indigo-800 dark:text-white`}>Home</button>
  <button onClick={() => scrollTo(refs.aboutRef, "about")} className={`${linkStyle("about")} text-indigo-800 dark:text-white`}>About</button>
    <button onClick={() => scrollTo(refs.technologiesRef, "technologies")} className={`${linkStyle("technologies")} text-indigo-800 dark:text-white`}>Technologies</button>
  <button onClick={() => scrollTo(refs.projectsRef, "projects")} className={`${linkStyle("projects")} text-indigo-800 dark:text-white`}>Projects</button>
  <button onClick={() => scrollTo(refs.contactRef, "contact")} className={`${linkStyle("contact")} text-indigo-800 dark:text-white`}>Contact</button>
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
            <button onClick={() => scrollTo(refs.homeRef, "home")} className={`${linkStyle("home")} block w-full text-left`}>Home</button>
            <button onClick={() => scrollTo(refs.aboutRef, "about")} className={`${linkStyle("about")} block w-full text-left`}>About</button>
                        <button onClick={() => scrollTo(refs.technologiesRef, "technologies")} className={`${linkStyle("technologies")} block w-full text-left`}>Technologies</button>
            <button onClick={() => scrollTo(refs.projectsRef, "projects")} className={`${linkStyle("projects")} block w-full text-left`}>Projects</button>
            <button onClick={() => scrollTo(refs.contactRef, "contact")} className={`${linkStyle("contact")} block w-full text-left`}>Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
