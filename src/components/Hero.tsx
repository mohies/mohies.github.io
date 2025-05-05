import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
<section id="home" className="h-screen w-full bg-gradient-to-b from-[#0f0f1f] to-[#1a1a2e] flex items-center justify-center overflow-hidden">
<div className="w-full max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Imagen de Avatar */}
        <div className="flex justify-center items-center">
          <img
            src="/avatar.png"
            alt="Avatar de Mohcen"
            className="w-[220px] md:w-[300px] rounded-full bg-white p-2"
          />
        </div>

        {/* Info personal */}
        <div className="flex flex-col justify-center items-center text-right text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Mohcen Benizza</h1>
          <h2 className="text-red-500 text-2xl mt-4 font-mono">
             Web Developer & IT Support
          </h2>

          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              className="border border-white px-6 py-2 rounded text-white hover:bg-white hover:text-black transition"
            >
              Contract me
            </a>
            <a
              href="/Resume.pdf"
              download
              className="border border-white px-6 py-2 rounded text-white hover:bg-red-500 hover:border-red-500 transition"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex gap-6 text-2xl">
            <a href="https://linkedin.com/in/mohcenbenizza" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/mohies" target="_blank"><FaGithub /></a>
            <a href="mailto:mohcenben2001@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
