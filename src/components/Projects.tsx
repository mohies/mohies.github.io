import { useEffect, useRef, useState } from 'react'
import { FaAngular, FaBootstrap, FaCss3Alt, FaDatabase, FaHtml5, FaJs } from 'react-icons/fa'
import { SiDjango, SiTypescript, SiVuedotjs } from 'react-icons/si'
import ProjectsView, { type ProjectItem } from './ProjectsView'

const projects: ProjectItem[] = [
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
]

const Projects = () => {
  const [activeTab, setActiveTab] = useState(projects[0].id)
  const tabsRef = useRef<HTMLDivElement>(null)

  const activeIndex = projects.findIndex((project) => project.id === activeTab)
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0
  const activeProject = projects[safeActiveIndex]
  const canScrollLeft = safeActiveIndex > 0
  const canScrollRight = safeActiveIndex < projects.length - 1

  useEffect(() => {
    const node = tabsRef.current
    if (!node) return

    const activeButton = node.children[safeActiveIndex] as HTMLElement | undefined
    activeButton?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [safeActiveIndex])

  const scrollTabs = (direction: 'left' | 'right') => {
    const node = tabsRef.current
    const nextIndex = direction === 'left' ? safeActiveIndex - 1 : safeActiveIndex + 1
    const nextProject = projects[nextIndex]
    if (!node || !nextProject) return

    setActiveTab(nextProject.id)
  }

  return (
    <ProjectsView
      activeProject={activeProject}
      activeTab={activeTab}
      canScrollLeft={canScrollLeft}
      canScrollRight={canScrollRight}
      projects={projects}
      tabsRef={tabsRef}
      onChangeProject={setActiveTab}
      onScrollTabs={scrollTabs}
    />
  )
}

export default Projects
