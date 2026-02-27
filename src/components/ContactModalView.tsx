import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import './ContactModal.scss'

type ContactModalViewProps = {
  email: string
  isOpen: boolean
  loading: boolean
  mensaje: string
  nombre: string
  onChangeEmail: (value: string) => void
  onChangeMensaje: (value: string) => void
  onChangeNombre: (value: string) => void
  onClose: () => void
  onSubmit: () => void
}

const ContactModalView = ({
  email,
  isOpen,
  loading,
  mensaje,
  nombre,
  onChangeEmail,
  onChangeMensaje,
  onChangeNombre,
  onClose,
  onSubmit,
}: ContactModalViewProps) => {
  if (!isOpen) return null

  return (
    <div className="contact-modal">
      <div className="contact-modal__backdrop" onClick={onClose} />

      <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} className="card contact-modal__panel">
        <div className="contact-modal__header">
          <div className="contact-modal__icon">
            <HiOutlineMail />
          </div>
          <div>
            <h3 className="contact-modal__title">Contact me</h3>
            <p className="contact-modal__subtitle">Quick message modal with EmailJS fallback.</p>
          </div>
        </div>

        <form
          className="contact-modal__form"
          onSubmit={(event) => {
            event.preventDefault()
            onSubmit()
          }}
        >
          <input className="contact-modal__input" placeholder="Name" value={nombre} onChange={(event) => onChangeNombre(event.target.value)} required />
          <input className="contact-modal__input" placeholder="Email" type="email" value={email} onChange={(event) => onChangeEmail(event.target.value)} required />
          <textarea className="contact-modal__input contact-modal__input--textarea" placeholder="Message" rows={5} value={mensaje} onChange={(event) => onChangeMensaje(event.target.value)} required />
          <div className="contact-modal__actions">
            <button type="button" onClick={onClose} className="contact-modal__button contact-modal__button--ghost">Cancel</button>
            <button type="submit" className="contact-modal__button contact-modal__button--primary" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactModalView
