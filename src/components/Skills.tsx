import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaPython,
  FaJava,
  FaGit,
  FaDocker,
  FaGithub,
  FaMicrosoft,
  FaAws,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiSpringboot,
  SiSqlite,
  SiMariadb,
  SiDjango,
} from "react-icons/si";

import { JSX, useState } from "react";

type TechCategory = "All" | "Frontend" | "Backend" | "Tools";

const techCategories: Record<TechCategory, string[]> = {
  All: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue",
    "Tailwind",
    "Bootstrap",
    "Python",
    "Java",
    "SpringBoot",
    "Django",
    "PostgreSQL",
    "SQLite",
    "MariaDB",
    "Git",
    "GitHub",
    "Docker",
    "Microsoft",
    "AWS",
  ],
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue",
    "Tailwind",
    "Bootstrap",
  ],
  Backend: [
    "Python",
    "Java",
    "SpringBoot",
    "Django",
    "PostgreSQL",
    "SQLite",
    "MariaDB",
  ],
  Tools: ["Git", "GitHub", "Docker", "Microsoft", "AWS"],
};

const techIcons: { [key: string]: JSX.Element } = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  React: <FaReact className="text-cyan-400" />,
  Angular: <FaAngular className="text-red-500" />,
  Vue: <FaVuejs className="text-green-500" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  Bootstrap: <FaBootstrap className="text-purple-600" />,
  Python: <FaPython className="text-yellow-300" />,
  Java: <FaJava className="text-red-400" />,
  SpringBoot: <SiSpringboot className="text-green-500" />,
  Django: <SiDjango className="text-green-800" />,
  PostgreSQL: <SiPostgresql className="text-blue-500" />,
  SQLite: <SiSqlite className="text-blue-400" />,
  MariaDB: <SiMariadb className="text-teal-600" />,
  Git: <FaGit className="text-orange-500" />,
  GitHub: <FaGithub className="text-white bg-black rounded-full p-1" />,
  Docker: <FaDocker className="text-blue-500" />,
  Microsoft: <FaMicrosoft className="text-blue-700" />,
  AWS: <FaAws className="text-orange-400" />,
};

const Skills = () => {
  const [active, setActive] = useState<TechCategory>("All");

  return (
    <section
      id="tech-stack"
      className="min-h-screen bg-gradient-to-b from-[#0f0f1f] to-[#1a1a2e] py-20 px-4 text-center"
    >
      <h2 className="text-[#ff003c] text-3xl font-bold uppercase mb-10 font-mono tracking-wider">
        Tech Stack
      </h2>

      <div className="max-w-6xl mx-auto bg-white border-4 border-[#1a1a2e] rounded-lg p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(techCategories).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded font-mono text-sm ${
                active === category
                  ? "bg-red-600 text-white"
                  : "bg-[#1a1a2e] text-white hover:bg-[#333]"
              } transition`}
              onClick={() => setActive(category as TechCategory)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {techCategories[active].map((tech) => (
            <div
              key={tech}
              className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center text-3xl hover:scale-110 transition-all bg-white shadow-md"
              title={tech}
            >
              {techIcons[tech]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
