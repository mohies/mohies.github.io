import { useState } from 'react'
import emailjs from 'emailjs-com'
import type { SiteText } from '../i18n'
import ContactModalView from './ContactModalView'

type Props = {
  isOpen: boolean
  modalText: SiteText['modal']
  onClose: () => void
}

const ContactModal = ({ isOpen, modalText, onClose }: Props) => {
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
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`${modalText.mailSubjectPrefix} ${nombre}`)}&body=${encodeURIComponent(mensaje)}`
      } else {
        alert(modalText.noEmailAlert)
      }

      setLoading(false)
      onClose()
      return
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      alert(modalText.sentAlert)
      setNombre('')
      setEmail('')
      setMensaje('')
      onClose()
    } catch (error) {
      console.error(error)
      alert(modalText.failedAlert)
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
      modalText={modalText}
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
