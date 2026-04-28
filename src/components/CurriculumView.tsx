import {
  FaBriefcase,
  FaEnvelope,
  FaGlobe,
  FaGraduationCap,
  FaLink,
  FaListUl,
  FaPhoneAlt,
  FaLayerGroup,
} from 'react-icons/fa'
import type { SiteText } from '../i18n'
import './Curriculum.scss'

type CurriculumViewProps = {
  curriculumText: SiteText['curriculum']
}

const contactIcons = {
  phone: <FaPhoneAlt />,
  email: <FaEnvelope />,
  link: <FaLink />,
}

const CurriculumView = ({ curriculumText }: CurriculumViewProps) => {
  return (
    <section id="curriculum" className="curriculum-section">
      <div className="section-shell">
        <div className="curriculum-heading">
          <span className="section-kicker">{curriculumText.kicker}</span>
          <h2 className="section-title">{curriculumText.title}</h2>
          <p className="section-copy">{curriculumText.subtitle}</p>
        </div>

        <div className="curriculum-grid">
          <div className="curriculum-column curriculum-column--left">
            <div className="card surface-grid curriculum-profile">
              <div className="curriculum-profile__header">
                <div className="curriculum-profile__badge">MB</div>
                <div>
                  <h3 className="curriculum-profile__name">{curriculumText.profile.name}</h3>
                  <p className="curriculum-profile__role">{curriculumText.profile.role}</p>
                </div>
              </div>

              <p className="curriculum-profile__summary">{curriculumText.profile.summary}</p>

              <div className="curriculum-panel__header">
                <FaLink />
                <span>{curriculumText.contact.label}</span>
              </div>
              <div className="curriculum-contact">
                {curriculumText.contact.items.map((item) => {
                  const icon = contactIcons[item.icon]
                  const value = item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="curriculum-contact__value">
                      {item.value}
                    </a>
                  ) : (
                    <span className="curriculum-contact__value">{item.value}</span>
                  )

                  return (
                    <div key={item.label} className="curriculum-contact__item">
                      <span className="curriculum-contact__icon">{icon}</span>
                      <div>
                        <div className="curriculum-contact__label">{item.label}</div>
                        {value}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="card-soft curriculum-panel">
              <div className="curriculum-panel__header">
                <FaGlobe />
                <span>{curriculumText.languages.label}</span>
              </div>
              <ul className="curriculum-panel__list">
                {curriculumText.languages.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card-soft curriculum-panel">
              <div className="curriculum-panel__header">
                <FaListUl />
                <span>{curriculumText.highlights.label}</span>
              </div>
              <ul className="curriculum-panel__list">
                {curriculumText.highlights.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card-soft curriculum-panel">
              <div className="curriculum-panel__header">
                <FaGlobe />
                <span>{curriculumText.availability.label}</span>
              </div>
              <ul className="curriculum-panel__list">
                {curriculumText.availability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card surface-grid curriculum-stack">
              <div className="curriculum-panel__header">
                <FaLayerGroup />
                <span>{curriculumText.stack.label}</span>
              </div>
              {curriculumText.stack.groups.map((group) => (
                <div key={group.label} className="curriculum-stack__group">
                  <div className="curriculum-stack__label">{group.label}</div>
                  <div className="curriculum-stack__tags">
                    {group.items.map((item) => (
                      <span key={item} className="curriculum-stack__tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="curriculum-column curriculum-column--right">
            <div className="card surface-grid curriculum-timeline">
              <div className="curriculum-panel__header">
                <FaBriefcase />
                <span>{curriculumText.experience.label}</span>
              </div>
              <div className="curriculum-timeline__list">
                {curriculumText.experience.items.map((item) => (
                  <article key={`${item.role}-${item.company}`} className="curriculum-item">
                    <div className="curriculum-item__meta">
                      <span className="curriculum-item__role">{item.role}</span>
                      <span className="curriculum-item__period">{item.period}</span>
                    </div>
                    <div className="curriculum-item__company">
                      {item.company} · {item.location}
                    </div>
                    <ul className="curriculum-item__bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="card surface-grid curriculum-timeline">
              <div className="curriculum-panel__header">
                <FaGraduationCap />
                <span>{curriculumText.education.label}</span>
              </div>
              <div className="curriculum-timeline__list">
                {curriculumText.education.items.map((item) => (
                  <article key={`${item.title}-${item.institution}`} className="curriculum-item">
                    <div className="curriculum-item__meta">
                      <span className="curriculum-item__role">{item.title}</span>
                      <span className="curriculum-item__period">{item.period}</span>
                    </div>
                    <div className="curriculum-item__company">{item.institution}</div>
                    {item.note ? <div className="curriculum-item__note">{item.note}</div> : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurriculumView
