import React, { useState, useEffect, useRef } from 'react'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineCode, AiOutlineMail, AiOutlineFile } from 'react-icons/ai'

const OPTIONS = [
  { id: 'about', label: 'Sobre mí', icon: <AiOutlineUser />, reply: '👨‍💻 Soy Mohcen Benizza, Web Developer & IT Support.\n\n• Desarrollo web fullstack con enfoque en UI/UX\n• Soporte IT: troubleshooting, mantenimiento y atención a usuarios\n• Apasionado por crear interfaces accesibles, rápidas y con atención al detalle\n• Trato cada bug como un puzzle y cada feature como un nuevo nivel que diseñar 🎮' },
  { id: 'skills', label: 'Skills', icon: <AiOutlineCode />, reply: '⚡ Mi stack tecnológico:\n\n💻 Frontend: React, Angular, Vue, TypeScript, TailwindCSS, Bootstrap, Framer Motion\n🔧 Backend: Python, Django, Java, Spring Boot\n🗄️ Bases de datos: PostgreSQL, SQLite, MariaDB\n🛠️ Herramientas: Git, GitHub, Docker, AWS, Microsoft\n🚀 Deploy: Vite, Vercel, Netlify, GitHub Pages' },
  { id: 'projects', label: 'Proyectos', icon: <AiOutlineFile />, reply: '🚀 Mis proyectos destacados:\n\n1️⃣ Eventia - Plataforma de gestión de eventos (Django + Angular)\n2️⃣ RAWG Explorer - Navegador de juegos con API RAWG (Angular)\n3️⃣ Deezerfy - App de música con Vue.js y Deezer API\n4️⃣ Session Manager - Plataforma de torneos de videojuegos (Django)\n\n¡Visita la sección Projects para ver más detalles!' },
  { id: 'contact', label: 'Contacto', icon: <AiOutlineMail />, reply: '📬 ¡Me encantaría conectar contigo!\n\n📧 Usa el formulario de contacto en la sección Contact\n💼 LinkedIn: linkedin.com/in/mohcenbenizza\n🐙 GitHub: github.com/mohies\n\n¡Estoy abierto a nuevas oportunidades!' },
]

function mockReply(text: string): string {
  const t = text.toLowerCase()
  if (t.includes('hola') || t.includes('hey') || t.includes('buenas')) {
    return '¡Hola! 👋 ¿En qué puedo ayudarte? Puedes preguntarme sobre mi experiencia, proyectos o habilidades.'
  }
  if (t.includes('cv') || t.includes('currículum') || t.includes('curriculum')) {
    return '📄 Mi CV está disponible para descarga. Puedes obtenerlo desde mis releases de GitHub o solicitarlo por el formulario de contacto.'
  }
  if (t.includes('proyecto') || t.includes('proyectos') || t.includes('portfolio')) {
    return '🚀 He trabajado en 4 proyectos públicos — échales un vistazo en la sección Projects. ¡Cada uno tiene su propia historia!'
  }
  if (t.includes('habilidad') || t.includes('skills') || t.includes('tecnolog')) {
    return '⚡ Mi stack principal:\n• React + TypeScript\n• TailwindCSS + Framer Motion\n• Vite + Node.js\n• Git + GitHub Actions'
  }
  if (t.includes('email') || t.includes('contacto') || t.includes('contactar')) {
    return '📬 ¡Me encantaría saber de ti! Usa el formulario de contacto en la sección Contact o conéctate conmigo en LinkedIn.'
  }
  if (t.includes('experiencia') || t.includes('trabajo')) {
    return '💼 Tengo 1 año de experiencia desarrollando aplicaciones web modernas. Siempre buscando nuevos retos y oportunidades de aprendizaje.'
  }
  return '🤔 Interesante pregunta... Estoy en modo demo, pero puedo contarte sobre mi experiencia, proyectos, skills o cómo contactarme. ¿Qué te gustaría saber?'
}

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ from: 'bot' | 'user'; text: string }>>([
    { from: 'bot', text: '¡Hola! 👋 Soy el asistente de Mohcen. ¿Qué te gustaría saber?' },
  ])
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  function pushMessage(from: 'bot' | 'user', text: string) {
    setMessages(prev => [...prev, { from, text }])
  }

  function handleOptionClick(optId: string) {
    const opt = OPTIONS.find(o => o.id === optId)
    if (!opt) return
    pushMessage('user', opt.label)
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      pushMessage('bot', opt.reply)
    }, 600)
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    const text = input.trim()
    if (!text) return
    pushMessage('user', text)
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      pushMessage('bot', mockReply(text))
    }, 800)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Window */}
      {open && (
        <div
          className="w-80 md:w-[360px] mb-4 rounded-3xl overflow-hidden shadow-2xl border border-purple-400/20"
          style={{
            background: 'linear-gradient(145deg, rgba(139,92,246,0.95) 0%, rgba(88,28,135,0.98) 50%, rgba(30,27,75,0.99) 100%)',
          }}
        >
          {/* Header */}
          <div className="relative px-5 py-4 bg-gradient-to-r from-purple-500/40 to-fuchsia-500/40">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <div className="font-bold text-white text-base">Asistente Virtual</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-xs text-green-200">Online • Modo demo</span>
                </div>
              </div>
            </div>
            <button
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <FiX className="text-white text-lg" />
            </button>
          </div>

          {/* Messages */}
          <div className="px-4 py-3 h-52 overflow-y-auto flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === 'bot'
                    ? 'self-start max-w-[85%] bg-white/15 rounded-2xl rounded-bl-md px-4 py-2.5 text-sm text-white shadow-sm whitespace-pre-line'
                    : 'self-end max-w-[85%] bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-2xl rounded-br-md px-4 py-2.5 text-sm text-white shadow-lg'
                }
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="self-start bg-white/15 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          <div className="px-4 py-3 flex gap-2 flex-wrap border-t border-white/10 bg-black/20">
            {OPTIONS.map(o => (
              <button
                key={o.id}
                type="button"
                onClick={() => handleOptionClick(o.id)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/25 text-xs text-white/90 transition-all hover:scale-105"
              >
                <span className="text-sm">{o.icon}</span>
                <span>{o.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 hover:opacity-90 flex items-center justify-center shadow-xl transition-opacity"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Cerrar asistente' : 'Abrir asistente'}
      >
        {open ? (
          <FiX className="text-white text-3xl" />
        ) : (
          <FiMessageCircle className="text-white text-3xl" />
        )}
      </button>
    </div>
  )
}

export default ChatBot
