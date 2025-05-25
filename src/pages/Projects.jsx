import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../context/ThemeContext";

// Import images with distinct names
import patrickImg from "../assets/patrick.jpg";
import seanImg from "../assets/sean.jpg";
import safarImg from "../assets/safar.jpg";

const projects = [
  {
    id: 1,
    title: "Hotel Booking Web",
    description: "Hotel Booking Web",
    image: seanImg,
  },
  {
    id: 2,
    title: "Full-Stack Portfolio",
    description:
      "React + Tailwind + Node.js + PostgreSQL portfolio project with dynamic routing and animations.",
    image: safarImg,
  },
  {
    id: 3,
    title: "SoloPro",
    description: "If you need a different style, let me know!",
    image: patrickImg,
  },
];

function Projects() {
  const { isDark } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
  AOS.init({ duration: 800, once: false });
  AOS.refresh(); // Important to re-calculate positions
}, [isDark]);


  // Colors based on theme
  const containerBg = isDark ? "bg-gray-900" : "bg-white";
  const cardBg = isDark ? "bg-gray-800/70" : "bg-white/20";
  const cardText = isDark ? "text-gray-200" : "text-indigo-800";
  const cardTitle = isDark ? "text-gray-200" : "text-indigo-800";
  const shadowHover = isDark
    ? "0 10px 20px rgba(255,255,255,0.3)"
    : "0 10px 20px rgba(0,0,0,0.3)";

  return (
    <div className={`relative min-h-screen overflow-hidden ${containerBg}`}>
      <motion.div
        className={`relative z-10 max-w-6xl mx-auto px-6 py-24 backdrop-blur-md rounded-3xl shadow-2xl ${
          isDark ? "bg-gray-800/60" : "bg-white/10"
        }`}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-10 drop-shadow-lg text-center text-indigo-800 dark:text-white">
          Projects
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map(({ id, title, description, image }) => (
            <motion.div
              key={id}
              data-aos="fade-right"
              data-aos-delay={id * 100}
              className={`${cardBg} rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300`}
              whileHover={{ scale: 1.05, boxShadow: shadowHover }}
            >
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className={`text-xl font-bold mb-2 ${cardTitle}`}>{title}</h2>
                <p className={`${cardText}`}>{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
