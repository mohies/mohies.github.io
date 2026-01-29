// Import React hook para estado local
import { useState } from 'react'
// Import de emailjs para enviar correos desde el cliente
import emailjs from 'emailjs-com'
// Import de framer-motion para animaciones del modal
import { motion } from 'framer-motion'

// Definimos el tipo de las props que recibe el componente
type Props = { isOpen: boolean; onClose: () => void }

// Componente funcional: modal de contacto
const ContactModal = ({ isOpen, onClose }: Props) => {
  // Estado para el nombre introducido por el usuario
  const [nombre, setNombre] = useState('')
  // Estado para el email introducido
  const [email, setEmail] = useState('')
  // Estado para el mensaje introducido
  const [mensaje, setMensaje] = useState('')
  // Estado que indica si se está enviando (deshabilita botón)
  const [loading, setLoading] = useState(false)

  // Si la prop `isOpen` es falsa, no renderizamos nada (return null)
  if (!isOpen) return null

  // Función que maneja el submit del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    // Evitamos que el formulario recargue la página
    e.preventDefault()
    // Indicamos que estamos en modo envío
    setLoading(true)

    // Leemos las variables de entorno que deben configurarse en .env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

    // Construimos el objeto con los datos que enviaremos a EmailJS
    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: mensaje,
    }

    // Si las variables de EmailJS no están configuradas, usamos un fallback.
    // Para no exponer el correo en el código, leemos `VITE_CONTACT_EMAIL`.
    if (!serviceID || !templateID || !publicKey) {
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''
      if (contactEmail) {
        // Abrimos el cliente de correo del usuario con mailto: apuntando a la dirección
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
          `Mensaje de ${nombre}`
        )}&body=${encodeURIComponent(mensaje)}`
      } else {
        // Si no hay correo configurado, avisamos y no exponemos ninguna dirección
        alert('Dirección de contacto no configurada. Añade VITE_CONTACT_EMAIL en tu .env')
      }
      // Reseteamos el estado de envío y cerramos el modal
      setLoading(false)
      onClose()
      return
    }

    try {
      // Intentamos enviar el correo usando emailjs
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      // Si todo va bien, avisamos al usuario
      alert('Mensaje enviado — gracias!')
      // Limpiamos los campos del formulario
      setNombre('')
      setEmail('')
      setMensaje('')
      // Cerramos el modal
      onClose()
    } catch (err) {
      // En caso de error lo mostramos por consola y al usuario
      console.error(err)
      alert('Error enviando el mensaje. Intenta de nuevo o revisa configuración.')
    } finally {
      // Siempre desactivamos el estado de loading al final
      setLoading(false)
    }
  }

  // Render del modal (JSX)
  return (
    // Contenedor fijo que cubre toda la pantalla y centra el modal
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo semitransparente que también cierra el modal al hacer click */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>

      {/* Contenedor animado del modal usando framer-motion */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} // estado inicial de la animación
        animate={{ scale: 1, opacity: 1 }} // estado final de la animación
        exit={{ scale: 0.9, opacity: 0 }} // animación al desmontar
        className="relative z-10 w-full max-w-xl card text-white rounded-lg p-6 shadow-lg"
      >
        {/* Título del modal */}
        <h3 className="text-2xl font-bold mb-4">Contact me</h3>

        {/* Formulario: `onSubmit` llama a `handleSubmit` */}
        <form className="grid gap-3" onSubmit={handleSubmit}>
          {/* Input para el nombre; su valor está ligado a `nombre` */}
          <input
            className="p-3 rounded bg-white text-black"
            placeholder="Name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          {/* Input para el email; tipo email para validación nativa */}
          <input
            className="p-3 rounded bg-white text-black"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Textarea para el mensaje; ligado a `mensaje` */}
          <textarea
            className="p-3 rounded bg-white text-black"
            placeholder="Message"
            rows={5}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

          {/* Botones de acción: Cancel y Send. Send se deshabilita si `loading` es true */}
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
              {/* Mostramos texto distinto si está enviando */}
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

// Export por defecto del componente para usarlo en otras partes de la app
export default ContactModal
