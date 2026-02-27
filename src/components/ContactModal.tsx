import { useState } from 'react'
import emailjs from 'emailjs-com'
import ContactModalView from './ContactModalView'

type Props = { isOpen: boolean; onClose: () => void }

const ContactModal = ({ isOpen, onClose }: Props) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async () => {
    setLoading(true)

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: mensaje,
    }

    if (!serviceID || !templateID || !publicKey) {
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''

      if (contactEmail) {
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`Mensaje de ${nombre}`)}&body=${encodeURIComponent(mensaje)}`
      } else {
        alert('Contact email is not configured. Add VITE_CONTACT_EMAIL to your .env file.')
      }

      setLoading(false)
      onClose()
      return
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      alert('Message sent. Thanks.')
      setNombre('')
      setEmail('')
      setMensaje('')
      onClose()
    } catch (error) {
      console.error(error)
      alert('Message could not be sent. Check your EmailJS configuration and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContactModalView
      email={email}
      isOpen={isOpen}
      loading={loading}
      mensaje={mensaje}
      nombre={nombre}
      onChangeEmail={setEmail}
      onChangeMensaje={setMensaje}
      onChangeNombre={setNombre}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default ContactModal
