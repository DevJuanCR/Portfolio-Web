import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'devjuancr@gmail.com',
    href: 'mailto:devjuancr@gmail.com',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/devjuancr',
    href: 'https://www.linkedin.com/in/devjuancr',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/DevJuanCR',
    href: 'https://github.com/DevJuanCR',
  },
]

function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-slate-100 mb-4">
          Get In Touch
        </h2>

        <p className="text-slate-400 mb-10">
          I'm currently looking for new opportunities. Feel free to reach out
          through any of these channels.
        </p>

        <div className="flex flex-col gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-colors group"
            >
              <span className="text-2xl text-slate-400 group-hover:text-blue-400 transition-colors">
                {link.icon}
              </span>
              <div className="text-left">
                <span className="block text-sm text-slate-500">{link.label}</span>
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                  {link.value}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact