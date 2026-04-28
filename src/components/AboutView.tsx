import type { ReactNode } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import type { SiteText } from '../i18n'
import './About.scss'

export type AboutSkill = {
  icon: ReactNode
  label: string
  accentClass: string
}

export type AboutFeature = {
  icon: ReactNode
  iconClass: string
  title: string
  description: string
}

type AboutViewProps = {
  aboutText: SiteText['about']
  features: AboutFeature[]
  skills: AboutSkill[]
  terminalLines: string[]
  terminalSource: string[]
}

const AboutView = ({ aboutText, features, skills, terminalLines, terminalSource }: AboutViewProps) => {
  const showCursorLine1 = terminalLines[0].length < terminalSource[0].length
  const showCursorLine2 =
    terminalLines[0].length === terminalSource[0].length &&
    terminalLines[1].length < terminalSource[1].length
  const showCursorLine3 =
    terminalLines[1].length === terminalSource[1].length &&
    terminalLines[2].length < terminalSource[2].length

  return (
    <section id="about" className="about-section">
      <div className="section-shell">
        <div className="about-heading">
          <span className="section-kicker">{aboutText.kicker}</span>
          <h2 className="section-title">{aboutText.title}</h2>
          <p className="section-copy">{aboutText.copy}</p>
        </div>

        <div className="card surface-grid about-card">
          <div className="about-layout">
            <div className="about-profile">
              <div className="about-profile__header">
                <div className="about-profile__badge">MB</div>
                <div>
                  <div className="about-profile__kicker">{aboutText.profileKicker}</div>
                  <h3 className="about-profile__title">Mohcen Benizza</h3>
                  <div className="about-profile__subtitle">{aboutText.profileSubtitle}</div>
                </div>
              </div>

              <div className="about-terminal">
                <div className="about-terminal__bar">
                  <span className="about-terminal__dot about-terminal__dot--red" />
                  <span className="about-terminal__dot about-terminal__dot--yellow" />
                  <span className="about-terminal__dot about-terminal__dot--green" />
                  <span className="about-terminal__label">{aboutText.terminalLabel}</span>
                </div>

                <div className="about-terminal__body">
                  <p className="about-terminal__line">
                    {terminalLines[0]}
                    {showCursorLine1 ? <span className="hero-caret">|</span> : null}
                  </p>
                  <p className="about-terminal__line about-terminal__line--muted">
                    {terminalLines[1]}
                    {showCursorLine2 ? <span className="hero-caret">|</span> : null}
                  </p>
                  <p className="about-terminal__line">
                    {terminalLines[2]}
                    {showCursorLine3 ? <span className="hero-caret">|</span> : null}
                  </p>
                </div>
              </div>

              <div className="about-skills">
                {skills.map((skill) => (
                  <div key={skill.label} className="about-skill-card">
                    <div className={`about-skill-icon ${skill.accentClass}`}>{skill.icon}</div>
                    <div className="about-skill-card__label">{skill.label}</div>
                  </div>
                ))}
              </div>

              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat__value about-stat__value--green">1+</div>
                  <div className="about-stat__label">{aboutText.stats.years}</div>
                </div>
                <div className="about-stats__divider" />
                <div className="about-stat">
                  <div className="about-stat__value about-stat__value--blue">4</div>
                  <div className="about-stat__label">{aboutText.stats.projects}</div>
                </div>
                <div className="about-stats__divider" />
                <div className="about-stat">
                  <div className="about-stat__value about-stat__value--orange">24/7</div>
                  <div className="about-stat__label">{aboutText.stats.curiosity}</div>
                </div>
              </div>
            </div>

            <div className="about-content">
              <div className="about-features">
                {features.map((feature) => (
                  <div key={feature.title} className="about-feature-card">
                    <div className={`about-feature-icon ${feature.iconClass}`}>{feature.icon}</div>
                    <h4 className="about-feature-card__title">{feature.title}</h4>
                    <p className="about-feature-card__description">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="about-cta">
                <p className="about-cta__text">
                  <span className="about-cta__accent">{aboutText.cta.accent}</span> {aboutText.cta.text}
                </p>
                <a href="#contact" className="about-cta__button">
                  {aboutText.cta.button}
                  <HiArrowRight className="about-cta__arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutView
