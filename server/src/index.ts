import express from 'express';
import cors    from 'cors';
import { fetchRandomPokemonCard } from './pokedex';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/api/card/random', async (_req, res) => {
  try {
    const card = await fetchRandomPokemonCard();
    res.json({ success: true, card });
  } catch (err) {
    console.error('🔴 Error fetching Pokémon:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
