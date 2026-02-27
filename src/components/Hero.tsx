import { useState } from 'react'
import HeroView from './HeroView'
import ContactModal from './ContactModal'

const Hero = () => {
  const [open, setOpen] = useState(false)
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''

  return (
    <>
      <HeroView
        contactEmail={contactEmail}
        onOpenContact={() => setOpen(true)}
      />
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Hero
