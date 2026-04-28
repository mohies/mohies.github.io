import { useEffect, useMemo, useRef, useState } from 'react'
import { FaAngular, FaBootstrap, FaCss3Alt, FaDatabase, FaHtml5, FaJs } from 'react-icons/fa'
import { SiDjango, SiTypescript, SiVuedotjs } from 'react-icons/si'
import type { SiteText } from '../i18n'
import ProjectsView, { type ProjectItem } from './ProjectsView'

type ProjectsProps = {
  projectsText: SiteText['projects']
}

const projectIcons = {
  eventia: [<SiDjango />, <FaHtml5 />, <FaCss3Alt />, <FaAngular />, <SiTypescript />, <FaBootstrap />],
  'angular-juego': [<FaAngular />, <SiTypescript />, <FaCss3Alt />, <FaBootstrap />],
  'vue-musica': [<SiVuedotjs />, <FaCss3Alt />],
  sesiones: [<SiDjango />, <FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaDatabase />],
}

const Projects = ({ projectsText }: ProjectsProps) => {
  const projects = useMemo<ProjectItem[]>(
    () =>
      projectsText.items.map((project) => ({
        ...project,
        techs: projectIcons[project.id as keyof typeof projectIcons] ?? [],
      })),
    [projectsText.items],
  )

  const [activeTab, setActiveTab] = useState(projects[0]?.id ?? '')
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!projects.some((project) => project.id === activeTab)) {
      setActiveTab(projects[0]?.id ?? '')
    }
  }, [projects, activeTab])

  const activeIndex = projects.findIndex((project) => project.id === activeTab)
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0
  const activeProject = projects[safeActiveIndex]
  const canScrollLeft = safeActiveIndex > 0
  const canScrollRight = safeActiveIndex < projects.length - 1

  useEffect(() => {
    const node = tabsRef.current
    if (!node) return

    const activeButton = node.children[safeActiveIndex] as HTMLElement | undefined
    if (!activeButton) return

    const targetLeft = activeButton.offsetLeft - node.clientWidth / 2 + activeButton.clientWidth / 2

    node.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: 'smooth',
    })
  }, [safeActiveIndex])

  const scrollTabs = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'left' ? safeActiveIndex - 1 : safeActiveIndex + 1
    const nextProject = projects[nextIndex]
    if (!nextProject) return

    setActiveTab(nextProject.id)
  }

  if (!activeProject) return null

  return (
    <ProjectsView
      activeProject={activeProject}
      activeTab={activeTab}
      canScrollLeft={canScrollLeft}
      canScrollRight={canScrollRight}
      projects={projects}
      projectsText={projectsText}
      tabsRef={tabsRef}
      onChangeProject={setActiveTab}
      onScrollTabs={scrollTabs}
    />
  )
}

export default Projects
