import type { ReactNode, RefObject } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaTools } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import './Projects.scss'

export type ProjectItem = {
  id: string
  title: string
  description: string
  techs: ReactNode[]
  github: string
  extraRepo?: string
}

type ProjectsViewProps = {
  activeProject: ProjectItem
  activeTab: string
  canScrollLeft: boolean
  canScrollRight: boolean
  projects: ProjectItem[]
  tabsRef: RefObject<HTMLDivElement | null>
  onChangeProject: (id: string) => void
  onScrollTabs: (direction: 'left' | 'right') => void
}

const ProjectsView = ({
  activeProject,
  activeTab,
  canScrollLeft,
  canScrollRight,
  projects,
  tabsRef,
  onChangeProject,
  onScrollTabs,
}: ProjectsViewProps) => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-shell">
        <div className="projects-heading">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Selected work with cleaner presentation and better mobile behavior.</h2>
        </div>

        <div className="card projects-card">
          <div className="card-soft projects-card__bar">
            <span className="projects-card__dot projects-card__dot--red" />
            <span className="projects-card__dot projects-card__dot--yellow" />
            <span className="projects-card__dot projects-card__dot--green" />
            <span className="projects-card__label">workbench</span>
          </div>

          <div className="projects-tabs-wrap">
            <button type="button" onClick={() => onScrollTabs('left')} disabled={!canScrollLeft} className="projects-tabs__arrow" aria-label="Scroll projects left">
              <HiChevronLeft />
            </button>

            <div ref={tabsRef} className="no-scrollbar projects-tabs">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => onChangeProject(project.id)}
                  className={activeTab === project.id ? 'projects-tab projects-tab--active' : 'projects-tab'}
                >
                  {project.title}
                </button>
              ))}
            </div>

            <button type="button" onClick={() => onScrollTabs('right')} disabled={!canScrollRight} className="projects-tabs__arrow" aria-label="Scroll projects right">
              <HiChevronRight />
            </button>
          </div>

          <div className="projects-card__body">
            <AnimatePresence mode="wait">
              <motion.div key={activeProject.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18 }}>
                <h3 className="projects-card__title">{activeProject.title}</h3>
                <p className="projects-card__description">{activeProject.description}</p>

                <div className="projects-layout">
                  <div className="projects-preview">
                    <div className="surface-grid projects-preview__surface">
                      <div>
                        <div className="projects-preview__icon">{activeProject.techs[0]}</div>
                        <div className="projects-preview__label">Preview</div>
                        <p className="projects-preview__copy">
                          This project card is ready for screenshots later, but it already scales cleanly on mobile and keeps the links visible without hover dependency.
                        </p>
                      </div>
                    </div>

                    <div className="projects-preview__actions">
                      <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="projects-button projects-button--primary">
                        <FaGithub />
                        <span>Client Code</span>
                        <HiArrowTopRightOnSquare />
                      </a>

                      {activeProject.extraRepo ? (
                        <a href={activeProject.extraRepo} target="_blank" rel="noopener noreferrer" className="projects-button projects-button--outline">
                          <FaGithub />
                          <span>Backend Code</span>
                          <HiArrowTopRightOnSquare />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="card-soft projects-stack">
                    <div className="projects-stack__header">
                      <FaTools />
                      <span>Stack</span>
                    </div>

                    <div className="projects-stack__pills">
                      {activeProject.techs.map((tech, index) => (
                        <span key={index} className="projects-stack__pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="projects-stack__links">
                      <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="projects-stack__link">
                        <FaGithub />
                        <span>View Client Code</span>
                      </a>

                      {activeProject.extraRepo ? (
                        <a href={activeProject.extraRepo} target="_blank" rel="noopener noreferrer" className="projects-stack__link">
                          <FaGithub />
                          <span>View Backend Code</span>
                        </a>
                      ) : null}

                      <p className="projects-stack__copy">
                        The layout avoids hidden actions on touch devices and keeps every important control accessible at all widths.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsView
