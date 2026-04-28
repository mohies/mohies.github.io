import { useState } from 'react'
import type { Language, SiteText } from '../i18n'
import NavbarView from './NavbarView'

type NavbarProps = {
  language: Language
  navText: SiteText['nav']
  onLanguageChange: (language: Language) => void
}

const Navbar = ({ language, navText, onLanguageChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  return (
    <NavbarView
      isOpen={isOpen}
      language={language}
      navText={navText}
      onHomeClick={() => scrollTo('home')}
      onItemClick={scrollTo}
      onLanguageChange={onLanguageChange}
      onToggleMenu={() => setIsOpen((value) => !value)}
    />
  )
}

export default Navbar
