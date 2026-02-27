import { useEffect, useState } from 'react'
import { FaCode, FaHeadset, FaLaptopCode, FaRocket, FaServer, FaTools } from 'react-icons/fa'
import AboutView, { type AboutFeature, type AboutSkill } from './AboutView'

const TERMINAL_LINES = [
  'mohcen@dev:~$ whoami',
  'Frontend developer and IT support specialist',
  'stack: React | Angular | Vue | Django | TypeScript',
]

const skills: AboutSkill[] = [
  {
    icon: <FaCode />,
    label: 'Frontend',
    accentClass: 'about-skill-icon--cyan',
  },
  {
    icon: <FaServer />,
    label: 'Backend',
    accentClass: 'about-skill-icon--green',
  },
  {
    icon: <FaTools />,
    label: 'DevOps',
    accentClass: 'about-skill-icon--orange',
  },
]

const features: AboutFeature[] = [
  {
    icon: <FaLaptopCode />,
    iconClass: 'about-feature-icon--cyan',
    title: 'Product focused',
    description: 'Fast, accessible interfaces with attention to spacing, hierarchy and flow.',
  },
  {
    icon: <FaRocket />,
    iconClass: 'about-feature-icon--orange',
    title: 'Full stack range',
    description: 'React, Angular, Vue, Django, Spring Boot and practical delivery across the stack.',
  },
  {
    icon: <FaHeadset />,
    iconClass: 'about-feature-icon--green',
    title: 'IT support',
    description: 'Troubleshooting, maintenance and user support with a calm, hands-on approach.',
  },
  {
    icon: <FaTools />,
    iconClass: 'about-feature-icon--blue',
    title: 'Execution',
    description: 'I care about clean handoff, consistent UI and shipping work that holds up.',
  },
]

const About = () => {
  const [visibleLines, setVisibleLines] = useState(['', '', ''])

  useEffect(() => {
    let timeoutId: number
    let cancelled = false

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutId = window.setTimeout(resolve, ms)
      })

    const typeLine = async (lineIndex: number, text: string) => {
      for (let index = 0; index <= text.length; index += 1) {
        if (cancelled) return

        setVisibleLines((prev) => {
          const next = [...prev]
          next[lineIndex] = text.slice(0, index)
          return next
        })

        await sleep(40)
      }
    }

    const deleteLine = async (lineIndex: number, text: string) => {
      for (let index = text.length; index >= 0; index -= 1) {
        if (cancelled) return

        setVisibleLines((prev) => {
          const next = [...prev]
          next[lineIndex] = text.slice(0, index)
          return next
        })

        await sleep(22)
      }
    }

    const runLoop = async () => {
      while (!cancelled) {
        await typeLine(0, TERMINAL_LINES[0])
        await sleep(260)
        await typeLine(1, TERMINAL_LINES[1])
        await sleep(260)
        await typeLine(2, TERMINAL_LINES[2])
        await sleep(1800)
        await deleteLine(2, TERMINAL_LINES[2])
        await sleep(120)
        await deleteLine(1, TERMINAL_LINES[1])
        await sleep(120)
        await deleteLine(0, TERMINAL_LINES[0])
        await sleep(700)
      }
    }

    runLoop()

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [])

  return <AboutView features={features} skills={skills} terminalLines={visibleLines} terminalSource={TERMINAL_LINES} />
}

export default About
