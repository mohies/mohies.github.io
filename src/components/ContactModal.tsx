import { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

type Props = { isOpen: boolean; onClose: () => void }

const ContactModal = ({ isOpen, onClose }: Props) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
      // Fallback: open mail client if EmailJS not configured
      window.location.href = `mailto:mohcenben2001@gmail.com?subject=${encodeURIComponent(
        `Mensaje de ${nombre}`
      )}&body=${encodeURIComponent(mensaje)}`
      setLoading(false)
      onClose()
      return
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      alert('Mensaje enviado — gracias!')
      setNombre('')
      setEmail('')
      setMensaje('')
      onClose()
    } catch (err) {
      console.error(err)
      alert('Error enviando el mensaje. Intenta de nuevo o revisa configuración.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative z-10 w-full max-w-xl bg-[#0b0b14] text-white rounded-lg p-6 shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4">Contact me</h3>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <input
            className="p-3 rounded bg-white text-black"
            placeholder="Name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            className="p-3 rounded bg-white text-black"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="p-3 rounded bg-white text-black"
            placeholder="Message"
            rows={5}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactModal
