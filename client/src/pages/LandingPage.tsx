// src/pages/LandingPage.tsx
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

// Staggered nav-item animation
const navItem: Variants = {
  hidden:  { y: -10, opacity: 0 },
  visible: (i: number) => ({
    y:       0,
    opacity: 1,
    transition: { delay: 0.1 * i, type: 'spring', stiffness: 300 }
  })
}

// Generate random spark positions
const createSparks = () =>
  Array.from({ length: 12 }, (_, i) => ({
    key:  i,
    top:  `${10 + Math.random() * 80}%`,
    left: `${10 + Math.random() * 80}%`
  }))

export default function LandingPage() {
  const nav    = useNavigate()
  const sparks = createSparks()

  return (
    <div
      className="
        relative overflow-hidden flex flex-col items-center
        min-h-screen
        bg-gradient-to-r from-pikachu to-pikachuLight
        bg-[length:200%_200%] animate-gradient-pan
      "
    >
      {/* Floating Sparkles */}
      {sparks.map(({ key, top, left }) => (
        <span
          key={key}
          className="absolute w-2 h-2 bg-white/80 rounded-full opacity-50 animate-ping"
          style={{ top, left }}
        />
      ))}

      {/* NAV */}
      <motion.header
        className="w-full max-w-4xl flex justify-between items-center px-8 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/" className="text-2xl font-bold text-pikaBlack">
          PikachuGen
        </Link>
        <nav className="space-x-6">
          {['Home','About','Contact'].map((label, i) => (
            <motion.span
              key={label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItem}
              className="text-pikaBlack hover:underline cursor-pointer"
              onClick={() => nav(label === 'Home' ? '/' : `/${label.toLowerCase()}`)}
            >
              {label}
            </motion.span>
          ))}
        </nav>
      </motion.header>

      {/* HERO CONTENT */}
      <motion.main
        className="flex flex-1 flex-col items-center justify-center text-center px-4"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Pikachu Halo + Logo */}
        <motion.div className="relative mb-6">
          <div
            className="
              absolute inset-0
              rounded-full
              bg-pikachu/40
              blur-3xl
              animate-pulse
            "
          />
          <motion.img
            src="/pikachu-logo.png"
            alt="Pikachu Logo"
            className="relative w-32 mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4 text-pikaBlack drop-shadow-xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Pikachu Card Generator
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-pikaBrown text-lg sm:text-xl max-w-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Refresh to uncover a fresh Pikachu card with stats and surprises! 🐾
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={() => nav('/cards')}
          className="
            bg-gradient-to-br from-pikaBrown to-pikaRed
            text-white font-bold
            px-8 py-3
            rounded-full
            shadow-inner shadow-black/20
            border-2 border-pikachuLight
            transition-all duration-200
            hover:from-pikaRed hover:to-pikaBrown
            hover:shadow-lg hover:shadow-black/30
            active:scale-95 active:shadow-inner active:shadow-black/30
          "
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          Catch Your Card
      </motion.button>

      </motion.main>

      {/* Footer Spacer */}
      <div className="h-12" />
    </div>
  )
}
