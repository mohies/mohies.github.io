import { useEffect, useMemo, useRef, useState } from 'react'
import { AiOutlineCode, AiOutlineFile, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import type { SiteText } from '../i18n'
import ChatBotView, { type ChatMessage, type ChatOption } from './ChatBotView'

type ChatBotProps = {
  chatbotText: SiteText['chatbot']
}

const ChatBot = ({ chatbotText }: ChatBotProps) => {
  const options: ChatOption[] = useMemo(
    () => [
      {
        id: 'about',
        label: chatbotText.options.about.label,
        icon: <AiOutlineUser />,
        reply: chatbotText.options.about.reply,
      },
      {
        id: 'skills',
        label: chatbotText.options.skills.label,
        icon: <AiOutlineCode />,
        reply: chatbotText.options.skills.reply,
      },
      {
        id: 'projects',
        label: chatbotText.options.projects.label,
        icon: <AiOutlineFile />,
        reply: chatbotText.options.projects.reply,
      },
      {
        id: 'contact',
        label: chatbotText.options.contact.label,
        icon: <AiOutlineMail />,
        reply: chatbotText.options.contact.reply,
      },
    ],
    [chatbotText.options],
  )

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([{ from: 'bot', text: chatbotText.initialMessage }])
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessages([{ from: 'bot', text: chatbotText.initialMessage }])
    setTyping(false)
  }, [chatbotText.initialMessage])

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
      chatbotText={chatbotText}
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
