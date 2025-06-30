// src/pages/CardPage.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface PokemonCard {
  id:     number;
  name:   string;
  sprite: string;
  types:  string[];
  stats:  { name: string; value: number }[];
}

// Map each type to a Tailwind gradient class
const typeGradients: Record<string, string> = {
  electric: 'from-yellow-300 to-yellow-500',
  water:    'from-blue-300   to-blue-500',
  fire:     'from-red-300    to-red-500',
  grass:    'from-green-300  to-green-500',
  fighting: 'from-orange-300 to-orange-500',
  steel:    'from-gray-300   to-gray-500',
  // …add more if you like…
  default:  'from-gray-200 to-gray-400'
};

export default function CardPage() {
  const [card, setCard]       = useState<PokemonCard|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string|null>(null);
  const [flipped, setFlipped] = useState(false);
  const nav = useNavigate();

  // Fetch on mount
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:4000/api/card/random')
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setCard(json.card);
          setError(null);
        } else {
          setError(json.message || 'Unknown error');
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600 text-xl">Catching Pokémon… 🐾</p>
    </div>
  );

  if (error || !card) return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-red-500 mb-4">Error: {error || 'No data'}</p>
      <button
        onClick={() => nav('/')}
        className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Back Home
      </button>
    </div>
  );

  // Choose a gradient based on the first type
  const grad = typeGradients[card.types[0]] || typeGradients.default;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <motion.div
        className={`w-80 h-96 perspective-1000 cursor-pointer`}
        onClick={() => setFlipped(f => !f)}
      >
        {/* Card container */}
        <motion.div
          className={`relative w-full h-full rounded-xl shadow-2xl bg-gradient-to-br ${grad}`}
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Front Face */}
          <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
            <img
              src={card.sprite}
              alt={card.name}
              className="w-40 h-40 object-contain"
            />
            <h2 className="mt-4 text-3xl font-bold capitalize text-white drop-shadow">
              {card.name}
            </h2>
            <p className="mt-1 text-white">
              {card.types.map(t => (
                <span key={t} className="capitalize mr-2">{t}</span>
              ))}
            </p>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 p-4 backface-hidden rotate-y-180">
            <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">
              Stats
            </h3>
            <ul className="space-y-1 text-white">
              {card.stats.map(stat => (
                <li key={stat.name} className="flex justify-between">
                  <span className="capitalize">{stat.name}</span>
                  <span>{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
      >
        🔄 Refresh Card
      </button>
    </div>
  );
}
