import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown, HiSparkles } from 'react-icons/hi'
import type { SiteText } from '../i18n'
import './Hero.scss'

type HeroViewProps = {
  contactEmail: string
  heroText: SiteText['hero']
  onOpenContact: () => void
}

const HeroView = ({ contactEmail, heroText, onOpenContact }: HeroViewProps) => {
  return (
    <section id="home" className="hero">
      <div className="section-shell hero__layout">
        <div className="hero__content">
          <div className="hero__pill">
            <HiSparkles />
            <span>{heroText.pill}</span>
          </div>

          <h1 className="hero__title">
            {heroText.title}
            <span className="hero__highlight">{heroText.highlight}</span>
          </h1>

          <h2 className="hero__subtitle">{heroText.subtitle}</h2>

          <p className="hero__copy">{heroText.copy}</p>

          <div className="hero__actions">
            <button type="button" onClick={onOpenContact} className="hero__button hero__button--primary">
              {heroText.startProject}
            </button>

            <a href="#projects" className="hero__button hero__button--secondary">
              <HiArrowDown />
              <span>{heroText.viewWork}</span>
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
                <span>{heroText.email}</span>
              </a>
            ) : null}
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__avatar-frame">
            <div className="card surface-grid hero__avatar-card">
              <img src="/avatar.png" alt={heroText.avatarAlt} loading="lazy" className="hero__avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroView
