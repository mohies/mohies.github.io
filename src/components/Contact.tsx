import { useState } from 'react'
import ContactView from './ContactView'

const Contact = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''

  const handleMail = () => {
    const subject = `Mensaje de ${nombre}`
    const body = `Nombre: ${nombre}%0ACorreo: ${email}%0AMensaje:%0A${mensaje}`

    if (!contactEmail) {
      alert('Contact email is not configured. Add VITE_CONTACT_EMAIL to your .env file.')
      return
    }

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <ContactView
      contactEmail={contactEmail}
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
