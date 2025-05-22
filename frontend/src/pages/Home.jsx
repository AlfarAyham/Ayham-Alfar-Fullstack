import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Decorative SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-64 text-purple-500 opacity-10"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,106.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128V0H0Z"
        />
      </svg>

      {/* Main content card */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Full‑Stack Developer",
            2000,
            "Embedded Systems Engineer",
            2000,
            "React & Tailwind Enthusiast",
            2000,
            "Passionate Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-purple-300 mb-6 font-medium"
        />

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I blend code and creativity to build modern, responsive web experiences and real‑world embedded
          solutions.
        </motion.p>

        <motion.div
          className="flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            to="/about"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
