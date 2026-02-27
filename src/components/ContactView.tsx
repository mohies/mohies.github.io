import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.scss'

type ContactViewProps = {
  contactEmail: string
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
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">If the work fits, lets talk.</h2>
          <p className="section-copy">
            The form sits inside the same visual system as the rest of the page, with better spacing
            and mobile readability.
          </p>
        </div>

        <div className="contact-layout">
          <div className="card contact-panel">
            <h3 className="contact-panel__title">Direct channels</h3>
            <p className="contact-panel__copy">
              For freelance work, collaborations or a product role, you can use the form or reach me through the links below.
            </p>

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
            <input type="text" placeholder="Name" value={nombre} onChange={(event) => onChangeNombre(event.target.value)} required className="contact-input" />
            <input type="email" placeholder="Email" value={email} onChange={(event) => onChangeEmail(event.target.value)} required className="contact-input" />
            <textarea placeholder="Message" rows={6} value={mensaje} onChange={(event) => onChangeMensaje(event.target.value)} required className="contact-input contact-input--textarea" />
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactView
