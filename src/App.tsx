import { useMemo, useState } from 'react'
import About from './components/About'
import ChatBot from './components/ChatBot'
import Contact from './components/Contact'
import Curriculum from './components/Curriculum'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { siteText, type Language } from './i18n'

const getInitialLanguage = (): Language => {
  const stored = window.localStorage.getItem('portfolio-lang')
  if (stored === 'es' || stored === 'en') return stored

  const browserLanguage = window.navigator.language.toLowerCase()
  return browserLanguage.startsWith('es') ? 'es' : 'en'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  const text = useMemo(() => siteText[language], [language])

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    window.localStorage.setItem('portfolio-lang', nextLanguage)
  }

  return (
    <>
      <Navbar language={language} navText={text.nav} onLanguageChange={handleLanguageChange} />
      <Hero heroText={text.hero} modalText={text.modal} />
      <About aboutText={text.about} />
      <Curriculum curriculumText={text.curriculum} />
      <Skills skillsText={text.skills} />
      <Projects projectsText={text.projects} />
      <Contact contactText={text.contact} />
      <ChatBot chatbotText={text.chatbot} />
    </>
  )
}

export default App
