import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/profile.jpg"; // Replace with your actual path

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Animated SVG Background */}
      <svg className="absolute top-0 left-0 w-full h-64 text-purple-500 opacity-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="1" d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,106.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z" />
      </svg>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile picture */}
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">About Me</h1>
          <p className="text-lg mb-3 text-gray-200 leading-relaxed">
            I'm a recent graduate in <strong>Electrical Computer Engineering</strong> with strong skills in
            full-stack development, embedded systems, and automation. I thrive at the intersection of
            software and hardware, always aiming to build impactful, real-world solutions.
          </p>
          <p className="text-lg mb-3 text-gray-200 leading-relaxed">
            My graduation project focused on <strong>Automated Manufacturing Quality Control</strong> using
            ESP32-CAM and image processing, merging IoT, computer vision, and robotics.
          </p>
          <p className="text-lg mb-3 text-gray-200 leading-relaxed">
            I develop full-stack projects using <strong>React, Tailwind, Node.js, and PostgreSQL</strong> to
            strengthen my practical web development experience. I’m constantly learning and building!
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            Outside of coding, I enjoy experimenting with tech, reading documentation, and working on
            passion projects to push my skills forward.
          </p>

          {/* Social icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/AlfarAyham/Ayham-portfolio-fullstack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/ayham-alfar-5a9212318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;