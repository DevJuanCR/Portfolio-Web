function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* placeholder del avatar */}
          <div className="w-48 h-48 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-blue-500/30 flex items-center justify-center shrink-0">
            <span className="text-6xl">👨‍💻</span>
          </div>

          {/* en movil centramos el texto y en desktop lo alineamos a la izquierda */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-center md:text-left">
            <p>
              Junior Developer with a double technical degree in
              {' '}<span className="text-blue-600 dark:text-blue-400">Application Development (DAM)</span> and
              {' '}<span className="text-blue-600 dark:text-blue-400">IT Systems & Networking (SMR)</span>.
            </p>
            <p>
              I build backend architectures with Java and Spring Boot,
              automate tasks with Python, and create interactive frontends
              with JavaScript and React.
            </p>
            <p>
              I'm comfortable working with Docker, CI/CD pipelines, and
              Linux environments. I like building things that actually work
              and learning whatever I need along the way.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About