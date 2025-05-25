import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const SERVICE_ID = "service_3cdsn0k";
  const TEMPLATE_ID = "template_9j3t9vj";
  const AUTO_REPLY_TEMPLATE_ID = "template_vswrsdm";
  const PUBLIC_KEY = "3HlKBk75Z6V-AOotR";

  const validate = () => {
    const newErr = {};
    if (!formData.name.trim()) newErr.name = "Name is required.";
    if (!formData.email.trim()) {
      newErr.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErr.email = "Email format is invalid.";
    }
    if (!formData.message.trim()) newErr.message = "Message is required.";
    return newErr;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErr = validate();
    setErrors(newErr);

    if (Object.keys(newErr).length === 0) {
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
        await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, formData, PUBLIC_KEY);

        setSubmitted(true);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 4000);
      } catch (err) {
        console.error("EmailJS error", err);
        alert("Failed to send. Please try again later.");
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <div
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 bg-white dark:bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 dark:border-white/10"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-10 text-indigo-800 dark:text-white text-center drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          Get in Touch
        </h1>

        {submitted && success && (
          <div
            data-aos="fade-up"
            className="flex flex-col items-center bg-green-100 dark:bg-green-800/20 border border-green-400 dark:border-green-500 rounded-lg p-4 text-green-700 dark:text-green-300 mb-8"
          >
            <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p>Your message has been sent successfully!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="200">
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-100" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-100" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-100" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
