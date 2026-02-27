import type { ReactNode, RefObject } from 'react'
import { FiMessageCircle, FiX } from 'react-icons/fi'
import './ChatBot.scss'

export type ChatOption = {
  id: string
  label: string
  icon: ReactNode
  reply: string
}

export type ChatMessage = {
  from: 'bot' | 'user'
  text: string
}

type ChatBotViewProps = {
  messages: ChatMessage[]
  messagesEndRef: RefObject<HTMLDivElement | null>
  open: boolean
  options: ChatOption[]
  typing: boolean
  onOptionClick: (optionId: string) => void
  onToggle: () => void
}

const ChatBotView = ({ messages, messagesEndRef, open, options, typing, onOptionClick, onToggle }: ChatBotViewProps) => {
  return (
    <div className="chatbot">
      {open ? (
        <div className="chatbot__panel">
          <div className="chatbot__header">
            <div className="chatbot__avatar">MB</div>
            <div>
              <div className="chatbot__title">Virtual Assistant</div>
              <div className="chatbot__status">
                <span className="chatbot__status-dot" />
                <span>Online | Demo mode</span>
              </div>
            </div>
            <button type="button" onClick={onToggle} className="chatbot__close" aria-label="Close">
              <FiX />
            </button>
          </div>

          <div className="chatbot__messages">
            {messages.map((message, index) => (
              <div key={index} className={message.from === 'bot' ? 'chatbot__bubble chatbot__bubble--bot' : 'chatbot__bubble chatbot__bubble--user'}>
                {message.text}
              </div>
            ))}

            {typing ? (
              <div className="chatbot__bubble chatbot__bubble--bot chatbot__typing">
                <span />
                <span />
                <span />
              </div>
            ) : null}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot__options">
            {options.map((option) => (
              <button key={option.id} type="button" onClick={() => onOptionClick(option.id)} className="chatbot__option">
                <span className="chatbot__option-icon">{option.icon}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <button type="button" onClick={onToggle} className="chatbot__toggle" aria-label={open ? 'Cerrar asistente' : 'Abrir asistente'}>
        {open ? <FiX /> : <FiMessageCircle />}
      </button>
    </div>
  )
}

export default ChatBotView
