import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngular, FaBootstrap, FaCss3Alt, FaDatabase, FaGithub, FaHtml5, FaJs, FaTools } from 'react-icons/fa';
import { SiDjango, SiTypescript, SiVuedotjs } from 'react-icons/si';



const projects = [
    {
        id: 'eventia',
        title: 'Eventia - Gestor de Eventos',
        description:
            'Aplicación web fullstack para gestión de eventos. Permite autenticación de usuarios, visualización de eventos, envío de emails, y administración desde panel privado. Desarrollada como proyecto final integrador.',
        techs: [<SiDjango />, <FaHtml5 />, <FaCss3Alt />, <FaAngular />, <SiTypescript />, <FaBootstrap />],
        github: 'https://github.com/mohies/ProyectoIntegrado',
    },
    {
        id: 'angular-juego',
        title: 'RAWG Explorer - Videojuegos en Angular',
        description:
            'Aplicación web conectada a la API de RAWG, desarrollada en Angular. Permite filtrar videojuegos por plataforma, iniciar sesión y explorar fichas detalladas de cada título. UI responsiva con Bootstrap.',
        techs: [<FaAngular />, <SiTypescript />, <FaCss3Alt />, <FaBootstrap />],
        github: 'https://github.com/mohies/AngularJuego',
    }
    ,
    {
        id: 'vue-musica',
        title: 'Deezerfy - Streaming de Música con Vue',
        description:
            'Aplicación de música construida con Vue.js, integrada con la API de Deezer. Permite buscar canciones y artistas, escuchar previews y explorar álbumes. Diseño limpio y responsivo con CSS y rutas gestionadas por Vue Router.',
        techs: [<SiVuedotjs />, <FaCss3Alt />],
        github: 'https://github.com/mohies/vue',
    },
    {
        id: 'sesiones',
        title: 'Gestor de Sesiones',
        description:
            'Aplicación web desarrollada con Django como backend y tecnologías clásicas en el frontend. Permite iniciar sesión, registrar usuarios, controlar accesos y gestionar sesiones de forma segura. Ideal para paneles internos o entornos administrados.',
        techs: [<SiDjango />, <FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaDatabase />],
        github: 'https://github.com/mohies/Sesiones',
    }
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
                Mis Proyectos Destacados
            </h2>

            <div className="max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden border border-gray-700">
                {/* Navegador fake */}
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

                {/* Contenido dinámico */}
                <div className="p-6 min-h-[200px] bg-[#181824]">
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
                            <p className="mb-4 text-gray-300">{activeProject?.description}</p>

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


                            <a
                                href={activeProject?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition"
                            >
                                <FaGithub /> View Source Code
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
