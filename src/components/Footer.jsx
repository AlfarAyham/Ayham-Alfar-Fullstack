export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-6 mt-12">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-2">&copy; {new Date().getFullYear()} Ayham Al‑Far. All rights reserved.</p>
        <p>
          Built with <span className="text-indigo-600 dark:text-indigo-400 font-semibold">React & TailwindCSS</span>
        </p>
      </div>
    </footer>
  );
}
