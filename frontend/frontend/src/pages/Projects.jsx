import { motion } from "framer-motion";


const projects = [
  {
    id: 1,
    title: "Hotel Booking Web",
    description:
      "Hotel Booking Web",
    image: "https://unsplash.com/photos/KMn4VEeEPR8/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ3OTE2NDExfA&force=true",
  },
  {
    id: 2,
    title: "Full-Stack Portfolio",
    description:
      "React + Tailwind + Node.js + PostgreSQL portfolio project with dynamic routing and animations.",
    image: "https://unsplash.com/photos/koOdUvfGr4c/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ3OTE4NDAyfA&force=true",
  },
  {
    id: 3,
    title: "IoT Temperature Monitor",
    description:
      "If you need a different style, let me know!",
    image: "https://unsplash.com/photos/-9Wx8GA2yVs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ3OTE4NjMwfA&force=true",
  },
];

function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Animated SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-64 text-purple-500 opacity-10"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,106.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
        />
      </svg>

      {/* Main container */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-10 text-white drop-shadow-lg text-center">
          Projects
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map(({ id, title, description, image }) => (
            <motion.div
              key={id}
              className="bg-white/20 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.15, duration: 0.5 }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
                <p className="text-gray-200">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
