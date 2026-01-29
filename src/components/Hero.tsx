import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from 'react'
import ContactModal from './ContactModal'
import { motion } from 'framer-motion'

const Hero = () => {
  const [open, setOpen] = useState(false)
  // Leemos la dirección de contacto desde la variable de entorno para no exponerla en el código
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''

  // Tiny typewriter for the subtitle area
  const lines = [
    'Crafting beautiful, fast, and accessible web apps',
    'Open to work — available for hire',
    'React • TypeScript • Tailwind • Framer Motion'
  ]

  const [li, setLi] = useState(0)
  const [ci, setCi] = useState(0)
  const [typed, setTyped] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = lines[li]
    let t: ReturnType<typeof setTimeout>

    if (!del) {
      if (ci <= cur.length) {
        t = setTimeout(() => { setTyped(cur.slice(0, ci)); setCi(c => c + 1) }, 32)
      } else {
        t = setTimeout(() => setDel(true), 1000)
      }
    } else {
      if (ci > 0) {
        t = setTimeout(() => { setTyped(cur.slice(0, ci - 1)); setCi(c => c - 1) }, 20)
      } else {
        t = setTimeout(() => { setDel(false); setLi(i => (i + 1) % lines.length) }, 220)
      }
    }

    return () => clearTimeout(t)
  }, [ci, del, li])

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center overflow-hidden relative bg-hero-gradient">

      {/* Decorative blobs moved to GlobalBackground (site-wide) */}

      <div className="w-full max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        {/* Left: avatar + small animated effects */}
        <div className="flex justify-center md:justify-start items-center">
          <div className="avatar-frame">
            <img src="/avatar.png" alt="Avatar de Mohcen" loading="lazy" className="w-[240px] md:w-[320px] rounded-full border-2 border-white/10 shadow-xl" />
          </div>
        </div>

        {/* Right: text, typing, CTA */}
        <div className="flex flex-col justify-center items-start text-left text-white">
          <h1 className="hero-title">
            Mohcen Benizza
          </h1>

          <h2 className="hero-subtitle mt-4">
            <span className="accent-text">{typed}</span>
            <span className="hero-caret">▌</span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl">
            I build accessible, fast and delightful web interfaces. I focus on UI polish, performance and real product impact.
          </p>

          <div className="mt-8 flex gap-4 items-center">
            <button onClick={() => setOpen(true)} className="btn-neon hover:opacity-90 transition-opacity">
              Let's talk
            </button>

            <a href="/Resume.pdf" download className="btn-outline">
              Download CV
            </a>
          </div>

          <div className="mt-6 flex gap-4 text-2xl">
            <a href="https://linkedin.com/in/mohcenbenizza" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/mohies" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            {contactEmail ? (
              <a href={`mailto:${contactEmail}`}><FaEnvelope /></a>
            ) : (
              <a href="#" onClick={() => alert('Dirección de contacto no configurada. Añade VITE_CONTACT_EMAIL en tu .env')}><FaEnvelope /></a>
            )}
          </div>
        </div>
      </div>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  )
}

export default Hero;
