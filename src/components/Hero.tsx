import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useState } from 'react'
import ContactModal from './ContactModal'
import { motion } from 'framer-motion'

const Hero = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="home" className="h-screen w-full bg-gradient-to-b from-[#0f0f1f] to-[#1a1a2e] flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="w-full h-full bg-gradient-to-r from-[#0f0f1f] via-[#121226] to-[#1a1a2e]"
        />
      </div>

      <div className="w-full max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Imagen de Avatar */}
        <div className="flex justify-center items-center">
          <img
            src="/avatar.png"
            alt="Avatar de Mohcen"
            loading="lazy"
            className="w-[220px] md:w-[300px] rounded-full bg-white p-2 shadow-lg"
          />
        </div>

        {/* Info personal */}
        <div className="flex flex-col justify-center items-center text-right text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Mohcen Benizza</h1>
          <h2 className="text-red-500 text-2xl mt-4 font-mono">
            Web Developer & IT Support
          </h2>

          <div className="mt-6 flex gap-4">
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white px-6 py-2 rounded text-white bg-red-600 hover:bg-red-700 transition shadow-md"
            >
              Contact me
            </motion.button>
            <a
              href="/Resume.pdf"
              download
              className="border border-white px-6 py-2 rounded text-white hover:bg-red-500 hover:border-red-500 transition"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex gap-6 text-2xl">
            <a href="https://linkedin.com/in/mohcenbenizza" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/mohies" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:mohcenben2001@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  )
}

export default Hero;
