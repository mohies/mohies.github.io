import { useEffect, useRef, useState } from 'react'
import { AiOutlineCode, AiOutlineFile, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import ChatBotView, { type ChatMessage, type ChatOption } from './ChatBotView'

const options: ChatOption[] = [
  {
    id: 'about',
    label: 'About',
    icon: <AiOutlineUser />,
    reply: 'I am Mohcen Benizza, a web developer with IT support experience. I focus on responsive UI, frontend quality and practical delivery.',
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: <AiOutlineCode />,
    reply: 'Main stack: React, Angular, Vue, TypeScript, TailwindCSS, Bootstrap, Django, Spring Boot, PostgreSQL, Docker, AWS and GitHub.',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <AiOutlineFile />,
    reply: 'Featured projects include Eventia, RAWG Explorer, Deezerfy and Session Manager. Check the Projects section for the details and repositories.',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: <AiOutlineMail />,
    reply: 'Use the contact form, LinkedIn or GitHub links in the Contact section. I am open to collaborations and product work.',
  },
]

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'bot', text: 'Hi. I am Mohcens assistant. What do you want to know?' },
  ])
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  const handleOptionClick = (optionId: string) => {
    const option = options.find((item) => item.id === optionId)
    if (!option) return

    setMessages((prev) => [...prev, { from: 'user', text: option.label }])
    setTyping(true)

    window.setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { from: 'bot', text: option.reply }])
    }, 600)
  }

  return (
    <ChatBotView
      messages={messages}
      messagesEndRef={messagesEndRef}
      open={open}
      options={options}
      typing={typing}
      onOptionClick={handleOptionClick}
      onToggle={() => setOpen((value) => !value)}
    />
  )
}

export default ChatBot
