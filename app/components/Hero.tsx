'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative pt-20 pb-16 px-4 text-center"
    >
      {/* Glow background aura */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none -z-10">
        <div className="w-[400px] h-[400px] bg-purple-700/20 blur-[120px] rounded-full animate-pulseSoft" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_1.5rem_rgba(192,132,252,0.3)] bg-gradient-to-br from-white via-purple-300 to-pink-300 bg-clip-text text-transparent"
      >
        Bitcoin to USD Exchange
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-base text-gray-400 mt-4 leading-relaxed"
      >
        Real-time cryptocurrency conversion
      </motion.p>
    </motion.section>
  )
}
