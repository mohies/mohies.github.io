import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLaptopCode, FaHeadset, FaGamepad, FaRocket, FaCode, FaServer, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion'

const About = () => {
  const [text] = useTypewriter({
    words: [
      'mohcen@dev:~$ whoami',
      'Full Stack Developer 🚀',
      'mohcen@dev:~$ cat skills.txt',
      'React • Angular • Vue • Django',
      'mohcen@dev:~$ ./deploy.sh',
      'Deploying to production... ✅',
    ],
    loop: true,
    delaySpeed: 1800,
  });

  const skills = [
    { icon: <FaCode className="text-2xl" />, label: 'Frontend', color: 'from-cyan-400 to-blue-500' },
    { icon: <FaServer className="text-2xl" />, label: 'Backend', color: 'from-green-400 to-emerald-500' },
    { icon: <FaTools className="text-2xl" />, label: 'DevOps', color: 'from-orange-400 to-red-500' },
  ]

  const features = [
    { icon: <FaLaptopCode />, color: 'text-cyan-400', title: 'Product-focused', desc: 'Interfaces rápidas, accesibles y con atención al detalle' },
    { icon: <FaRocket />, color: 'text-yellow-400', title: 'Fullstack', desc: 'React, Angular, Vue, Django, Spring Boot y más' },
    { icon: <FaHeadset />, color: 'text-purple-400', title: 'IT Support', desc: 'Troubleshooting, mantenimiento y atención a usuarios' },
    { icon: <FaGamepad />, color: 'text-pink-400', title: 'Creative', desc: 'Cada bug es un puzzle, cada feature un nuevo nivel' },
  ]

  return (
    <section id="about" className="min-h-screen py-24 px-4 relative overflow-hidden">

      <h2 
        className="text-4xl md:text-5xl font-extrabold mb-16 tracking-wider uppercase text-center bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        About Me
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Main card */}
        <div 
          className="relative rounded-3xl overflow-hidden border border-purple-500/20"
          style={{ background: 'linear-gradient(145deg, rgba(88,28,135,0.3) 0%, rgba(30,27,75,0.5) 100%)' }}
        >

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left - Profile */}
            <div className="lg:col-span-2 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 flex items-center justify-center shadow-xl"
                >
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <div>
                  <div className="text-xs text-purple-300 font-medium tracking-wider uppercase">Hello World!</div>
                  <h3 className="text-2xl font-bold text-white mt-1">Mohcen Benizza</h3>
                  <div className="text-sm text-gray-400">Web Developer & IT Support</div>
                </div>
              </div>

              {/* Terminal */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-gray-500">terminal</span>
                </div>
                <div className="p-4 h-28 font-mono text-sm text-green-400">
                  <span>{text}</span><Cursor cursorStyle="_" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {skills.map((s, i) => (
                  <div 
                    key={i}
                    className="rounded-xl p-3 text-center hover:bg-white/5 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className={`bg-gradient-to-br ${s.color} bg-clip-text text-transparent flex justify-center`}>
                      {s.icon}
                    </div>
                    <div className="text-xs text-gray-300 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Numbers */}
              <div className="flex gap-6 mt-6 justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">1+</div>
                  <div className="text-xs text-gray-400 mt-1">Years Exp</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">4</div>
                  <div className="text-xs text-gray-400 mt-1">Projects</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">∞</div>
                  <div className="text-xs text-gray-400 mt-1">Curiosity</div>
                </div>
              </div>
            </div>

            {/* Right - Features */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl ${f.color} mb-4 group-hover:scale-110 transition-transform`}>
                      {f.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{f.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div 
                className="mt-8 p-6 rounded-2xl text-center"
                style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.15) 100%)', border: '1px solid rgba(168,85,247,0.2)' }}
              >
                <p className="text-lg text-white mb-3">
                  <span className="text-purple-300">Let's build</span> something awesome together! 🚀
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-medium shadow-lg hover:opacity-90 transition-opacity"
                >
                  Get in touch
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

