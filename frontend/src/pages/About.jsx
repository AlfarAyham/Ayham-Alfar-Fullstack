import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import profilePic from "../assets/profile.jpg";

function About() {
  const { isDark } = useTheme();

  const backgroundColor = isDark ? "bg-gray-900" : "bg-white";
  const cardBg = isDark ? "bg-white/10" : "bg-white";
  const textColor = isDark ? "text-gray-200" : "text-indigo-800";
  const headingColor = isDark ? "text-white" : "text-indigo-800";
  const iconColor = isDark ? "text-gray-200 hover:text-white" : "text-indigo-800 hover:text-indigo-600";
  const borderColor = isDark ? "border-white" : "border-gray-300";

  return (
    <div className={`relative min-h-screen overflow-hidden ${backgroundColor}`}>
      {/* Main content */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10 ${cardBg} backdrop-blur-md rounded-3xl shadow-2xl`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Profile picture */}
        <img
          src={profilePic}
          alt="Profile"
          className={`w-40 h-40 rounded-full object-cover shadow-xl border-4 ${borderColor} hover:scale-105 transition-transform duration-300`}
          data-aos="zoom-in"
          data-aos-delay="200"
        />

        {/* Text content */}
        <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="10">
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${headingColor} drop-shadow-lg`}>
            About Me
          </h1>

          <p className={`text-lg mb-3 leading-relaxed ${textColor}`} data-aos="fade-up" data-aos-delay="400">
            I'm a recent graduate in <strong>Computer Engineering</strong> with strong skills in
            full-stack development, Front End and automation...
          </p>
          <p className={`text-lg mb-3 leading-relaxed ${textColor}`} data-aos="fade-up" data-aos-delay="500">
            My graduation project focused on <strong>Booking Web</strong>...
          </p>
          <p className={`text-lg mb-3 leading-relaxed ${textColor}`} data-aos="fade-up" data-aos-delay="600">
            I develop full-stack projects using <strong>React, Tailwind, Node.js, and PostgreSQL</strong>...
          </p>
          <p className={`text-lg leading-relaxed ${textColor}`} data-aos="fade-up" data-aos-delay="700">
            Outside of coding, I enjoy experimenting with tech, reading documentation...
          </p>

          {/* Social icons */}
          <div
            className="mt-6 flex justify-center md:justify-start gap-6"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <a
              href="https://github.com/AlfarAyham/Ayham-portfolio-fullstack"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} transition-colors duration-300`}
            >
              <FaGithub size={80} />
            </a>
            <a
              href="https://linkedin.com/in/ayham-alfar-5a9212318"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} transition-colors duration-300`}
            >
              <FaLinkedin size={80} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
