import { useEffect, useState } from 'react'
import { FaCode, FaHeadset, FaLaptopCode, FaRocket, FaServer, FaTools } from 'react-icons/fa'
import type { SiteText } from '../i18n'
import AboutView, { type AboutFeature, type AboutSkill } from './AboutView'

type AboutProps = {
  aboutText: SiteText['about']
}

const About = ({ aboutText }: AboutProps) => {
  const skills: AboutSkill[] = [
    {
      icon: <FaCode />,
      label: aboutText.skills.frontend,
      accentClass: 'about-skill-icon--cyan',
    },
    {
      icon: <FaServer />,
      label: aboutText.skills.backend,
      accentClass: 'about-skill-icon--green',
    },
    {
      icon: <FaTools />,
      label: aboutText.skills.devops,
      accentClass: 'about-skill-icon--orange',
    },
  ]

  const features: AboutFeature[] = [
    {
      icon: <FaLaptopCode />,
      iconClass: 'about-feature-icon--cyan',
      title: aboutText.features.product.title,
      description: aboutText.features.product.description,
    },
    {
      icon: <FaRocket />,
      iconClass: 'about-feature-icon--orange',
      title: aboutText.features.fullstack.title,
      description: aboutText.features.fullstack.description,
    },
    {
      icon: <FaHeadset />,
      iconClass: 'about-feature-icon--green',
      title: aboutText.features.support.title,
      description: aboutText.features.support.description,
    },
    {
      icon: <FaTools />,
      iconClass: 'about-feature-icon--blue',
      title: aboutText.features.execution.title,
      description: aboutText.features.execution.description,
    },
  ]

  const [visibleLines, setVisibleLines] = useState(['', '', ''])

  useEffect(() => {
    let timeoutId = 0
    let cancelled = false

    setVisibleLines(['', '', ''])

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
        await typeLine(0, aboutText.terminalLines[0])
        await sleep(260)
        await typeLine(1, aboutText.terminalLines[1])
        await sleep(260)
        await typeLine(2, aboutText.terminalLines[2])
        await sleep(1800)
        await deleteLine(2, aboutText.terminalLines[2])
        await sleep(120)
        await deleteLine(1, aboutText.terminalLines[1])
        await sleep(120)
        await deleteLine(0, aboutText.terminalLines[0])
        await sleep(700)
      }
    }

    runLoop()

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [aboutText.terminalLines])

  return (
    <AboutView
      aboutText={aboutText}
      features={features}
      skills={skills}
      terminalLines={visibleLines}
      terminalSource={aboutText.terminalLines}
    />
  )
}

export default About
