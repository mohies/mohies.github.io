import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown, HiDownload, HiSparkles } from 'react-icons/hi'
import './Hero.scss'

type HeroViewProps = {
  contactEmail: string
  onOpenContact: () => void
}

const HeroView = ({ contactEmail, onOpenContact }: HeroViewProps) => {
  return (
    <section id="home" className="hero">
      <div className="section-shell hero__layout">
        <div className="hero__content">
          <div className="hero__pill">
            <HiSparkles />
            <span>UI polish, performance and product thinking</span>
          </div>

          <h1 className="hero__title">
            Building digital products
            <span className="hero__highlight">that feel sharp and ship fast.</span>
          </h1>

          <h2 className="hero__subtitle">React | TypeScript | Responsive UI | Clean interactions</h2>

          <p className="hero__copy">
            I design and build modern interfaces with React and TypeScript, focusing on responsive
            layout, clean interactions and consistent visual systems.
          </p>

          <div className="hero__actions">
            <button type="button" onClick={onOpenContact} className="hero__button hero__button--primary">
              Start a project
            </button>

            <a href="/Resume.pdf" download className="hero__button hero__button--outline">
              <HiDownload />
              <span>Download CV</span>
            </a>

            <a href="#projects" className="hero__button hero__button--secondary">
              <HiArrowDown />
              <span>View work</span>
            </a>
          </div>

          <div className="hero__links">
            <a href="https://linkedin.com/in/mohcenbenizza" target="_blank" rel="noopener noreferrer" className="hero__link-pill">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/mohies" target="_blank" rel="noopener noreferrer" className="hero__link-pill">
              <FaGithub />
              <span>GitHub</span>
            </a>
            {contactEmail ? (
              <a href={`mailto:${contactEmail}`} className="hero__link-pill">
                <FaEnvelope />
                <span>Email</span>
              </a>
            ) : null}
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__avatar-frame">
            <div className="card surface-grid hero__avatar-card">
              <img src="/avatar.png" alt="Portrait of Mohcen" loading="lazy" className="hero__avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroView
