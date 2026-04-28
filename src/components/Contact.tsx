import { useState } from 'react'
import type { SiteText } from '../i18n'
import ContactView from './ContactView'

type ContactProps = {
  contactText: SiteText['contact']
}

const Contact = ({ contactText }: ContactProps) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''

  const handleMail = () => {
    const subject = `${contactText.mailSubjectPrefix} ${nombre}`
    const body = `${contactText.name}: ${nombre}%0A${contactText.email}: ${email}%0A${contactText.message}:%0A${mensaje}`

    if (!contactEmail) {
      alert(contactText.noEmailAlert)
      return
    }

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <ContactView
      contactEmail={contactEmail}
      contactText={contactText}
      email={email}
      mensaje={mensaje}
      nombre={nombre}
      onChangeEmail={setEmail}
      onChangeMensaje={setMensaje}
      onChangeNombre={setNombre}
      onSubmit={handleMail}
    />
  )
}

export default Contact
