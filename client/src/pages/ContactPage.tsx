// src/pages/ContactPage.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const container: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
}

const item: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

export default function ContactPage() {
  const nav = useNavigate()
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: hook up real submission
    console.log({ name, email, message })
    setSent(true)
  }

  return (
    <motion.div
      className="
        min-h-screen flex flex-col items-center justify-center
        p-8 md:p-16
        bg-gradient-to-r from-pikachu to-pikachuLight
        text-pikaBlack
      "
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-6"
        variants={item}
      >
        Contact Us
      </motion.h2>

      {sent ? (
        <motion.p
          className="text-pikaBrown text-lg mb-8"
          variants={item}
        >
          🎉 Thanks, {name}! Your message has been sent.
        </motion.p>
      ) : (
        <motion.form
          className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
          variants={item}
        >
          <div className="mb-4">
            <label className="block text-pikaBlack font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="
                w-full px-4 py-2 border border-pikaBrown
                rounded focus:outline-none focus:ring-2 focus:ring-pikaRed
              "
            />
          </div>

          <div className="mb-4">
            <label className="block text-pikaBlack font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="
                w-full px-4 py-2 border border-pikaBrown
                rounded focus:outline-none focus:ring-2 focus:ring-pikaRed
              "
            />
          </div>

          <div className="mb-6">
            <label className="block text-pikaBlack font-semibold mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="
                w-full px-4 py-2 border border-pikaBrown
                rounded focus:outline-none focus:ring-2 focus:ring-pikaRed
              "
            />
          </div>

          <motion.button
            type="submit"
            className="
                w-full
                bg-gradient-to-br from-pikachu to-pikachuLight
                text-pikaBlack font-bold
                px-4 py-2 rounded-full
                shadow-inner shadow-black/20
                border-2 border-pikaRed
                transition duration-200
                hover:from-pikachuLight hover:to-pikachu
                hover:shadow-lg hover:shadow-black/30
            "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={item}
          >
            Send Message
          </motion.button>
        </motion.form>
      )}

      <motion.button
        onClick={() => nav('/')}
        className="
          mt-8 bg-white text-pikaBrown font-semibold
          px-6 py-2 rounded-full shadow-lg
          hover:shadow-pikaRed/60 transition
        "
        variants={item}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
      >
        ← Back Home
      </motion.button>
    </motion.div>
  )
}
