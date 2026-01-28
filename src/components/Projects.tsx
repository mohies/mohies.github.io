import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJs,
  FaTools,
} from 'react-icons/fa';
import { SiDjango, SiTypescript, SiVuedotjs } from 'react-icons/si';

const projects = [
  {
    id: 'eventia',
    title: 'Eventia - Event Management Platform',
    description:
      'Fullstack web app for event management. Features user authentication, event listings, email notifications, and a private admin panel. Built as a capstone final project.',
    techs: [<SiDjango />, <FaHtml5 />, <FaCss3Alt />, <FaAngular />, <SiTypescript />, <FaBootstrap />],
    github: 'https://github.com/mohies/ProyectoIntegrado',
  },
  {
    id: 'angular-juego',
    title: 'RAWG Explorer - Angular Game Browser',
    description:
      'A web app using the RAWG API built with Angular. Allows filtering games by platform, signing in, and browsing game details. Responsive UI with Bootstrap.',
    techs: [<FaAngular />, <SiTypescript />, <FaCss3Alt />, <FaBootstrap />],
    github: 'https://github.com/mohies/AngularJuego',
  },
  {
    id: 'vue-musica',
    title: 'Deezerfy - Music Streaming with Vue',
    description:
      'Music app built with Vue.js and Deezer API integration. Users can search for songs, listen to previews, and explore albums. Styled with CSS and Vue Router.',
    techs: [<SiVuedotjs />, <FaCss3Alt />],
    github: 'https://github.com/mohies/vue',
  },
  {
    id: 'sesiones',
    title: 'Session Manager - Video Game Tournament Platform',
    description:
      'Platform for managing video game tournaments with Django backend and custom frontend. Features include player registration, bracket management, match results, and secure session control.',
    techs: [<SiDjango />, <FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaDatabase />],
    github: 'https://github.com/mohies/Cliente',
    extraRepo: 'https://github.com/mohies/Sesiones',
  },

];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(projects[0].id);
  const activeProject = projects.find((project) => project.id === activeTab);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1f] py-20 px-4 text-white"
    >
      <h2 className="text-4xl font-bold text-center text-red-500 mb-12 font-mono tracking-wide uppercase">
        Featured Projects
      </h2>

      <div className="max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden border border-gray-700">
        {/* Fake browser top bar */}
        <div className="flex items-center space-x-2 px-4 py-2 bg-[#1a1a2e]">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 px-4 py-2 bg-[#1a1a2e] border-b border-gray-700">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`px-3 py-1 rounded-md font-mono text-sm ${activeTab === project.id
                  ? 'bg-[#3c3c4e] text-white'
                  : 'bg-[#2a2a3b] text-gray-300 hover:bg-[#444]'
                } transition`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Project content with preview card */}
        <div className="p-6 min-h-[260px] bg-[#181824]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-1 text-cyan-400">
                {activeProject?.title}
              </h3>
              <p className="mb-6 text-gray-300">{activeProject?.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Preview card */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative group">
                  <div className="h-52 rounded-lg overflow-hidden bg-gradient-to-br from-[#21212b] to-[#15151a] shadow-lg border border-gray-700">
                    {/* If you add project images in /public or /src/assets, replace this block with an <img /> */}
                    <div className="h-full w-full flex items-center justify-center text-6xl text-gray-400">
                      {activeProject?.techs[0] || <FaHtml5 />}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="flex gap-3">
                      <a
                        href={activeProject?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 rounded text-sm font-mono shadow hover:bg-blue-600"
                      >
                        <FaGithub className="inline mr-2" /> Client Code
                      </a>

                      {activeProject?.extraRepo && (
                        <a
                          href={activeProject.extraRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-600 rounded text-sm font-mono shadow hover:bg-green-700"
                        >
                          <FaGithub className="inline mr-2" /> Backend
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Tech badges + link */}
                <div>
                  <div className="flex items-center flex-wrap gap-2 mb-4">
                    <FaTools className="text-yellow-400 text-xl" />
                    {activeProject?.techs.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#292932] text-white text-xl px-3 py-2 rounded-full flex items-center justify-center"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2">
                    <a
                      href={activeProject?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition"
                    >
                      <FaGithub /> View Client Code
                    </a>

                    {activeProject?.extraRepo && (
                      <a
                        href={activeProject.extraRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition ml-4"
                      >
                        <FaGithub /> View Backend Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects;
