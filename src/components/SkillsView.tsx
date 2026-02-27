import type { ReactNode } from 'react'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import './Skills.scss'

export type TechCategory = 'All' | 'Frontend' | 'Backend' | 'Tools'
export type TechIconMap = Record<string, ReactNode>

type SkillsViewProps = {
  active: TechCategory
  categories: Record<TechCategory, string[]>
  icons: TechIconMap
  onChangeCategory: (category: TechCategory) => void
}

const SkillsView = ({ active, categories, icons, onChangeCategory }: SkillsViewProps) => {
  return (
    <section id="tech-stack" className="skills-section">
      <div className="section-shell">
        <div className="skills-heading">
          <span className="section-kicker">Stack</span>
          <h2 className="section-title">Tools that I use to design, build and ship.</h2>
          <p className="section-copy">
            The goal is not collecting logos. It is choosing a stack that keeps the product maintainable,
            responsive and pleasant to use.
          </p>
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
                {category}
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
            <span>Responsive UI, animations with restraint, and practical delivery.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsView
