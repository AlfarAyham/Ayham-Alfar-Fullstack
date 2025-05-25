import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactRef = useRef(null);

  const sectionProps = {
    homeRef,
    aboutRef,
    projectsRef,
    technologiesRef,
    contactRef,
  };

    useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);


  return (
    
    <div
  className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
  style={{ position: "relative" }}
>

      {/* SVG background */}
      <svg
        className="absolute top-0 left-0 w-full h-64 text-purple-500 opacity-10 pointer-events-none select-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 0 }}
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,106.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
        />
      </svg>
      <Navbar refs={sectionProps} />
      <main className="flex-grow">
        <section ref={homeRef}><Home /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={technologiesRef}><Technologies /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={contactRef}><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
