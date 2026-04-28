import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import type { SiteText } from '../i18n'
import './Contact.scss'

type ContactViewProps = {
  contactEmail: string
  contactText: SiteText['contact']
  email: string
  mensaje: string
  nombre: string
  onChangeEmail: (value: string) => void
  onChangeMensaje: (value: string) => void
  onChangeNombre: (value: string) => void
  onSubmit: () => void
}

const ContactView = ({
  contactEmail,
  contactText,
  email,
  mensaje,
  nombre,
  onChangeEmail,
  onChangeMensaje,
  onChangeNombre,
  onSubmit,
}: ContactViewProps) => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <div className="contact-heading">
          <span className="section-kicker">{contactText.kicker}</span>
          <h2 className="section-title">{contactText.title}</h2>
          <p className="section-copy">{contactText.copy}</p>
        </div>

        <div className="contact-layout">
          <div className="card contact-panel">
            <h3 className="contact-panel__title">{contactText.panelTitle}</h3>
            <p className="contact-panel__copy">{contactText.panelCopy}</p>

            <div className="contact-panel__links">
              <a href="https://linkedin.com/in/mohcenbenizza" target="_blank" rel="noopener noreferrer" className="contact-pill">
                <FaLinkedin />
                <span>linkedin.com/in/mohcenbenizza</span>
              </a>
              <a href="https://github.com/mohies" target="_blank" rel="noopener noreferrer" className="contact-pill">
                <FaGithub />
                <span>github.com/mohies</span>
              </a>
              {contactEmail ? (
                <a href={`mailto:${contactEmail}`} className="contact-pill">
                  <FaEnvelope />
                  <span>{contactEmail}</span>
                </a>
              ) : null}
            </div>
          </div>

          <form
            className="card contact-form"
            onSubmit={(event) => {
              event.preventDefault()
              onSubmit()
            }}
          >
            <input
              type="text"
              placeholder={contactText.name}
              value={nombre}
              onChange={(event) => onChangeNombre(event.target.value)}
              required
              className="contact-input"
            />
            <input
              type="email"
              placeholder={contactText.email}
              value={email}
              onChange={(event) => onChangeEmail(event.target.value)}
              required
              className="contact-input"
            />
            <textarea
              placeholder={contactText.message}
              rows={6}
              value={mensaje}
              onChange={(event) => onChangeMensaje(event.target.value)}
              required
              className="contact-input contact-input--textarea"
            />
            <button type="submit" className="contact-submit">
              {contactText.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactView
