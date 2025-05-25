import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  const { isDark } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, [isDark]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-indigo-800 dark:text-white drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Full‑Stack Developer",
            2000,
            "Front End Dev",
            2000,
            "React & Tailwind Enthusiast",
            2000,
            "Passionate Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-purple-600 dark:text-purple-300 mb-6 font-medium"
        />

        <motion.p
          className="text-lg md:text-xl text-indigo-800 dark:text-purple-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I blend code and creativity to build modern, responsive web experiences that
          don’t just work — they vibe.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          
          {/* <a
            href="#about"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            Contact
          </a> */}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
