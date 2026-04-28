import { useState } from 'react'
import type { SiteText } from '../i18n'
import ContactModal from './ContactModal'
import HeroView from './HeroView'

type HeroProps = {
  heroText: SiteText['hero']
  modalText: SiteText['modal']
}

const Hero = ({ heroText, modalText }: HeroProps) => {
  const [open, setOpen] = useState(false)
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''

  return (
    <>
      <HeroView contactEmail={contactEmail} heroText={heroText} onOpenContact={() => setOpen(true)} />
      <ContactModal isOpen={open} modalText={modalText} onClose={() => setOpen(false)} />
    </>
  )
}

export default Hero
