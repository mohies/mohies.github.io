import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLaptopCode, FaHeadset, FaGamepad, FaRocket } from 'react-icons/fa';

const About = () => {
  const [text] = useTypewriter({
    words: [
      'mohcen@portfolio:~$ npm start',
      'Launching web app...',
      '✔️ Server running on http://localhost:5173',
      'Debugging...',
      'Deploy complete ✅',
      'mohcen@portfolio:~$ whoami',
      'Full Stack Dev & IT Support 👨‍💻',
    ],
    loop: true,
    delaySpeed: 1600,
  });

  return (
<section id='about' className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1f] ...">
<h2 className="text-[#ff003c] text-3xl font-extrabold font-mono mb-8 tracking-wider uppercase text-center">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Texto Bio */}
        <div className="bg-[#1a1a2e] text-white p-8 rounded-lg w-full md:w-3/4 font-mono shadow-lg space-y-4 flex flex-col justify-center text-center">
          <p className="text-[#ff003c] font-bold text-lg">Hello world! 👋</p>
          
          <p className="flex items-center justify-center gap-2">
            <FaLaptopCode className="text-green-400" />
            I'm Mohcen Benizza, a passionate Web & Software Developer & focused on building fast, responsive, and user-first web applications.
          </p>

          <p className="flex items-center justify-center gap-2">
            <FaRocket className="text-yellow-300" />
            Skilled in React, TypeScript, TailwindCSS, and backend systems — I create solid, scalable solutions.
          </p>

          <p className="flex items-center justify-center gap-2">
            <FaHeadset className="text-cyan-400" />
            With a strong background in IT support, I also provide efficient user assistance, system maintenance, and problem-solving.
          </p>

          <p className="flex items-center justify-center gap-2">
            <FaGamepad className="text-purple-400" />
            Gaming inspires my coding: every bug is a level to beat, every challenge a boss to defeat 🎮
          </p>

          <p className="text-yellow-300 font-semibold">
            Let’s build something awesome together!
          </p>
        </div>

        {/* Terminal Hacker */}
        <div className="bg-black text-green-500 font-mono p-4 rounded-md w-full md:w-1/4 shadow-md h-[200px] overflow-hidden text-sm">
          <span>{text}</span><Cursor />
        </div>
      </div>
    </section>
  );
};

export default About;
