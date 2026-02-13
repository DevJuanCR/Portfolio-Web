function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700/50 py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-slate-400 dark:text-slate-500">
        <span>
          © {new Date().getFullYear()} Juan Carlos. All rights reserved. {/* el año se actualiza solo */}
        </span>
        <span>
          Built with React & Tailwind CSS
        </span>
      </div>
    </footer>
  )
}

export default Footer