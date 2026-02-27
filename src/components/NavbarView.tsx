import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.scss'

type NavbarViewProps = {
  isOpen: boolean
  navItems: string[]
  onHomeClick: () => void
  onItemClick: (item: string) => void
  onToggleMenu: () => void
}

const NavbarView = ({ isOpen, navItems, onHomeClick, onItemClick, onToggleMenu }: NavbarViewProps) => {
  return (
    <header className="navbar">
      <nav className="section-shell navbar__shell">
        <button type="button" onClick={onHomeClick} className="navbar__brand" aria-label="Go to home">
          <img src="/logo.png" alt="Mohcen logo" loading="lazy" className="navbar__logo" />
          <div className="navbar__brand-copy">
            <div className="navbar__brand-title">Mohcen Benizza</div>
            <div className="navbar__brand-subtitle">frontend and full stack</div>
          </div>
        </button>

        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li key={item}>
              <button type="button" className="navbar__link" onClick={() => onItemClick(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onToggleMenu}
          className="navbar__toggle"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {isOpen ? (
        <div className="section-shell navbar__mobile">
          {navItems.map((item) => (
            <button key={item} type="button" className="navbar__mobile-link" onClick={() => onItemClick(item)}>
              {item}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  )
}

export default NavbarView
