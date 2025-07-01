// src/pages/AboutPage.tsx
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const container: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, when: 'beforeChildren' } }
};
const item: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  const nav = useNavigate();

  return (
    <motion.div
      className="
        min-h-screen
        p-8 md:p-16
        bg-gradient-to-r from-pikachu to-pikachuLight
        text-pikaBlack
        flex flex-col
      "
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-6"
        variants={item}
      >
        About PikachuGen
      </motion.h2>

      <motion.p className="mb-4 leading-relaxed" variants={item}>
        PikachuGen is a next-gen card generator that fetches live Pokémon data
        via a promise-based microservice. Each refresh uncovers a new card
        themed to its type, complete with stats and lore.
      </motion.p>

      <motion.ul className="list-disc list-inside mb-6 space-y-2" variants={item}>
        <li>
          <span className="font-semibold text-pikaRed">Core Value:</span>{' '}
          Instant, engaging discovery—no rebuilds required.
        </li>
        <li>
          <span className="font-semibold text-pikaRed">Tech Stack:</span>{' '}
          React (Vite+TS), Express/TS, pokedex-promise-v2, TailwindCSS, Framer Motion.
        </li>
        <li>
          <span className="font-semibold text-pikaRed">Scalability:</span>{' '}
          Serverless-ready backend, edge-cached payloads.
        </li>
        <li>
          <span className="font-semibold text-pikaRed">UX Highlights:</span>{' '}
          Animated gradient, 3D flips, shareable “snapshot” cards.
        </li>
      </motion.ul>

      <motion.blockquote
        className="border-l-4 border-pikaRed pl-4 italic text-pikaBrown mb-8"
        variants={item}
      >
        “Every refresh is a new adventure—catch ’em all one card at a time.”
      </motion.blockquote>

      <motion.button
        onClick={() => nav('/')}
        className="
          self-start
          bg-pikaRed text-pikachu font-semibold
          px-6 py-2 rounded-full
          shadow-lg hover:shadow-pikaRed/60
          transition-all duration-200
        "
        variants={item}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back Home
      </motion.button>
    </motion.div>
  );
}
