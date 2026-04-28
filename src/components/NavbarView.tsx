import type { Language, SiteText } from '../i18n'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.scss'

type NavbarViewProps = {
  isOpen: boolean
  language: Language
  navText: SiteText['nav']
  onHomeClick: () => void
  onItemClick: (id: string) => void
  onLanguageChange: (language: Language) => void
  onToggleMenu: () => void
}

const SpainFlagIcon = () => (
  <svg viewBox="0 0 24 24" className="navbar__lang-icon" aria-hidden="true" focusable="false">
    <rect width="24" height="24" rx="12" fill="#C60B1E" />
    <rect y="7" width="24" height="10" fill="#FFC400" />
  </svg>
)

const UkFlagIcon = () => (
  <svg viewBox="0 0 24 24" className="navbar__lang-icon" aria-hidden="true" focusable="false">
    <defs>
      <clipPath id="uk-clip">
        <rect width="24" height="24" rx="12" />
      </clipPath>
    </defs>
    <g clipPath="url(#uk-clip)">
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 2.3L2.3 0L24 21.7V24h-2.3L0 2.3z" fill="#fff" />
      <path d="M21.7 0H24v2.3L2.3 24H0v-2.3L21.7 0z" fill="#fff" />
      <path d="M0 3.7L3.7 0L24 20.3V24h-3.7L0 3.7z" fill="#C8102E" />
      <path d="M20.3 0H24v3.7L3.7 24H0v-3.7L20.3 0z" fill="#C8102E" />
      <rect x="9" width="6" height="24" fill="#fff" />
      <rect y="9" width="24" height="6" fill="#fff" />
      <rect x="10" width="4" height="24" fill="#C8102E" />
      <rect y="10" width="24" height="4" fill="#C8102E" />
    </g>
  </svg>
)

const NavbarView = ({
  isOpen,
  language,
  navText,
  onHomeClick,
  onItemClick,
  onLanguageChange,
  onToggleMenu,
}: NavbarViewProps) => {
  return (
    <header className="navbar">
      <nav className="section-shell navbar__shell">
        <button type="button" onClick={onHomeClick} className="navbar__brand" aria-label={navText.homeAria}>
          <img src="/logo.png" alt="Mohcen logo" loading="lazy" className="navbar__logo" />
          <div className="navbar__brand-copy">
            <div className="navbar__brand-title">Mohcen Benizza</div>
            <div className="navbar__brand-subtitle">{navText.brandSubtitle}</div>
          </div>
        </button>

        <ul className="navbar__menu">
          {navText.items.map((item) => (
            <li key={item.id}>
              <button type="button" className="navbar__link" onClick={() => onItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <div className="navbar__lang" aria-label="Language selector">
            <button
              type="button"
              className={language === 'es' ? 'navbar__lang-btn navbar__lang-btn--active' : 'navbar__lang-btn'}
              onClick={() => onLanguageChange('es')}
              aria-label={navText.langLabelEs}
              title={navText.langLabelEs}
            >
              <SpainFlagIcon />
              <span>ES</span>
            </button>
            <button
              type="button"
              className={language === 'en' ? 'navbar__lang-btn navbar__lang-btn--active' : 'navbar__lang-btn'}
              onClick={() => onLanguageChange('en')}
              aria-label={navText.langLabelEn}
              title={navText.langLabelEn}
            >
              <UkFlagIcon />
              <span>EN</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleMenu}
            className="navbar__toggle"
            aria-label={isOpen ? navText.closeNavAria : navText.openNavAria}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="section-shell navbar__mobile">
          {navText.items.map((item) => (
            <button key={item.id} type="button" className="navbar__mobile-link" onClick={() => onItemClick(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  )
}

export default NavbarView
