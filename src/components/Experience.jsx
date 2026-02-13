const experiences = [
  {
    role: 'Web Developer',
    company: 'Infomesidess, Reus',
    date: 'Sept 2024 — Apr 2025',
    badge: 'FCT Internship',
    tasks: [
      'Built corporate websites and e-commerce stores with WordPress and WooCommerce',
      'Backend customization with PHP and server configuration (.htaccess)',
      'Performance optimization: improved load times and Core Web Vitals',
    ],
  },
  {
    role: 'IT Support & Systems Technician',
    company: 'OneSystem IT-Servicios',
    date: 'May 2022 — Sept 2022',
    badge: 'FCT Internship',
    tasks: [
      'Windows/Linux workstation administration and local network setup',
      'Hardware diagnostics and Level 1/2 incident resolution',
      'Deployment and configuration of end-user work environments',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">
          Experience
        </h2>

        <div className="relative">
          {/* linea vertical del timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : '' // alterna izquierda y derecha
              }`}
            >
              {/* punto en el timeline */}
              <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 hidden md:block" />

              {/* spacer para el lado vacio */}
              <div className="hidden md:block md:w-1/2" />

              {/* card */}
              <div className="md:w-1/2 bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {exp.role}
                  </h3>
                  <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded font-medium">
                    {exp.badge}
                  </span>
                </div>

                <p className="text-blue-400 text-sm mb-1">{exp.company}</p>
                <p className="text-slate-500 text-sm mb-4">{exp.date}</p>

                <ul className="space-y-2">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="text-slate-400 text-sm flex gap-2">
                      <span className="text-blue-500 mt-1 shrink-0">▸</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience