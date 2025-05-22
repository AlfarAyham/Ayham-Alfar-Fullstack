import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  // ⚙️ OPTIONAL: replace with env vars (Vite prefix required)
  const SERVICE_ID = "service_3cdsn0k";
  const TEMPLATE_ID = "template_9j3t9vj";
  const AUTO_REPLY_TEMPLATE_ID = "template_vswrsdm";
  const PUBLIC_KEY = "3HlKBk75Z6V-AOotR";

  // ────────────────────────────────────────────────────────────────────────────
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
        // Hide checkmark after 4 s
        setTimeout(() => setSuccess(false), 4000);
      } catch (err) {
        console.error("EmailJS error", err);
        alert("Failed to send. Please try again later.");
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white py-20 px-6 overflow-hidden">
      {/* decorative wave */}
      <svg className="absolute top-0 left-0 w-full h-64 text-purple-500 opacity-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,106.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128V0H0Z" />
      </svg>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg">Get in Touch</h1>

        {submitted && success && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center bg-green-100/20 border border-green-400 rounded-lg p-4 text-green-200 mb-8"
          >
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p>Your message has been sent successfully!</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full p-3 rounded-lg bg-white text-gray-900 focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-lg bg-white text-gray-900 focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 rounded-lg bg-white text-gray-900 resize-none focus:outline-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
