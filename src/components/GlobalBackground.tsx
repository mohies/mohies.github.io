import React from 'react'
import { motion } from 'framer-motion'

const GlobalBackground: React.FC = () => {
  return (
    <div aria-hidden className="global-bg fixed inset-0 -z-20 pointer-events-none">
      <motion.div className="blob blob-1" animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="blob blob-2" animate={{ y: [0, 22, 0], rotate: [0, -6, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="blob blob-3" animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }} transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut' }} />
    </div>
  )
}

export default GlobalBackground
