import { useState } from 'react'
import NavbarView from './NavbarView'

const navItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

const Navbar = () => {
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
      navItems={navItems}
      onHomeClick={() => scrollTo('home')}
      onItemClick={(item) => scrollTo(item.toLowerCase().replace(' ', '-'))}
      onToggleMenu={() => setIsOpen((value) => !value)}
    />
  )
}

export default Navbar
