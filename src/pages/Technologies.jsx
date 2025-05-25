import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiJavascript,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiVercel,
  SiFigma,
  SiSimpleicons,
  SiFramer,
  SiHeroku,
  SiCodepen,
  SiVite,
  SiBootstrap,
  SiNpm,
} from "react-icons/si";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Technologies() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const techs = [
    { name: "React", icon: <SiReact size={48} className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={48} className="text-sky-400" /> },
    { name: "Node.js", icon: <SiNodedotjs size={48} className="text-green-500" /> },
    { name: "Express", icon: <SiExpress size={48} className="text-gray-700 dark:text-gray-300" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={48} className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript size={48} className="text-yellow-400" /> },
    { name: "C++", icon: <SiCplusplus size={48} className="text-blue-400" /> },
    { name: "HTML5", icon: <SiHtml5 size={48} className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 size={48} className="text-blue-500" /> },
    { name: "GitHub", icon: <SiGithub size={48} className="text-gray-800 dark:text-white" /> },
    { name: "Vercel", icon: <SiVercel size={48} className="text-cyan-300" /> },
    { name: "Figma", icon: <SiFigma size={48} className="text-pink-400" /> },
    { name: "Framer Motion", icon: <SiFramer size={48} className="text-gray-800 dark:text-white" /> },
    { name: "Heroku", icon: <SiHeroku size={48} className="text-indigo-400" /> },
    { name: "VS Code", icon: <SiCodepen size={48} className="text-blue-400" /> },
    { name: "Simpleicons", icon: <SiSimpleicons size={48} className="text-orange-400" /> },
    { name: "Vite", icon: <SiVite size={48} className="text-yellow-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={48} className="text-indigo-500" /> },
    { name: "NPM", icon: <SiNpm size={48} className="text-indigo-500" /> }
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-indigo-800 dark:text-white drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          Technologies & Tools
        </h1>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center hover:scale-110 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 50}
            >
              {tech.icon}
              <span className="text-gray-800 dark:text-gray-100 text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
