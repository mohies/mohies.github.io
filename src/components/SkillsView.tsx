import type { ReactNode } from 'react'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import type { SiteText } from '../i18n'
import './Skills.scss'

export type TechCategory = 'All' | 'Frontend' | 'Backend' | 'Tools'
export type TechIconMap = Record<string, ReactNode>

type SkillsViewProps = {
  active: TechCategory
  categories: Record<TechCategory, string[]>
  categoryLabels: Record<TechCategory, string>
  icons: TechIconMap
  skillsText: SiteText['skills']
  onChangeCategory: (category: TechCategory) => void
}

const SkillsView = ({
  active,
  categories,
  categoryLabels,
  icons,
  skillsText,
  onChangeCategory,
}: SkillsViewProps) => {
  return (
    <section id="tech-stack" className="skills-section">
      <div className="section-shell">
        <div className="skills-heading">
          <span className="section-kicker">{skillsText.kicker}</span>
          <h2 className="section-title">{skillsText.title}</h2>
          <p className="section-copy">{skillsText.copy}</p>
        </div>

        <div className="card skills-card">
          <div className="skills-filters">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                type="button"
                className={active === category ? 'skills-filter skills-filter--active' : 'skills-filter'}
                onClick={() => onChangeCategory(category as TechCategory)}
              >
                {categoryLabels[category as TechCategory]}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {categories[active].map((tech) => (
              <div key={tech} className="card-soft skills-item" title={tech}>
                <div className="skills-item__icon">{icons[tech]}</div>
                <div className="skills-item__label">{tech}</div>
              </div>
            ))}
          </div>

          <div className="skills-footnote">
            <HiOutlineLightningBolt />
            <span>{skillsText.footnote}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsView
