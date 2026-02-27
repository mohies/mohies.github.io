import { useState } from 'react'
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaMicrosoft,
  FaPython,
  FaReact,
  FaVuejs,
} from 'react-icons/fa'
import { SiDjango, SiMariadb, SiOracle, SiPostgresql, SiSpringboot, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si'
import SkillsView, { type TechCategory, type TechIconMap } from './SkillsView'

const techCategories: Record<TechCategory, string[]> = {
  All: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue', 'Tailwind', 'Bootstrap', 'Python', 'Java', 'SpringBoot', 'Django', 'PostgreSQL', 'SQLite', 'MariaDB', 'Oracle', 'Git', 'GitHub', 'Docker', 'Microsoft', 'AWS'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue', 'Tailwind', 'Bootstrap'],
  Backend: ['Python', 'Java', 'SpringBoot', 'Django', 'PostgreSQL', 'SQLite', 'MariaDB', 'Oracle'],
  Tools: ['Git', 'GitHub', 'Docker', 'Microsoft', 'AWS'],
}

const techIcons: TechIconMap = {
  HTML: <FaHtml5 color="#f97316" />,
  CSS: <FaCss3Alt color="#3b82f6" />,
  JavaScript: <FaJs color="#facc15" />,
  TypeScript: <SiTypescript color="#2563eb" />,
  React: <FaReact color="#22d3ee" />,
  Angular: <FaAngular color="#ef4444" />,
  Vue: <FaVuejs color="#22c55e" />,
  Tailwind: <SiTailwindcss color="#38bdf8" />,
  Bootstrap: <FaBootstrap color="#9333ea" />,
  Python: <FaPython color="#fde047" />,
  Java: <FaJava color="#f87171" />,
  SpringBoot: <SiSpringboot color="#22c55e" />,
  Django: <SiDjango color="#166534" />,
  PostgreSQL: <SiPostgresql color="#3b82f6" />,
  SQLite: <SiSqlite color="#60a5fa" />,
  MariaDB: <SiMariadb color="#0f766e" />,
  Oracle: <SiOracle color="#ef4444" />,
  Git: <FaGit color="#f97316" />,
  GitHub: <FaGithub color="#111827" />,
  Docker: <FaDocker color="#3b82f6" />,
  Microsoft: <FaMicrosoft color="#1d4ed8" />,
  AWS: <FaAws color="#fb923c" />,
}

const Skills = () => {
  const [active, setActive] = useState<TechCategory>('All')

  return (
    <SkillsView
      active={active}
      categories={techCategories}
      icons={techIcons}
      onChangeCategory={setActive}
    />
  )
}

export default Skills
