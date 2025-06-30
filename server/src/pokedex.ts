 import Pokedex from 'pokedex-promise-v2';

export interface PokemonCard {
  id:     number;
  name:   string;
  sprite: string;
  types:  string[];
  stats:  { name: string; value: number }[];
}

const P = new Pokedex({
  protocol:    'https',
  hostName:    'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit:  100,
  timeout:     5_000
});

export async function fetchRandomPokemonCard(): Promise<PokemonCard> {
  const maxId = 898;
  const id    = Math.floor(Math.random() * maxId) + 1;
  const data  = await P.getPokemonByName(id);

  return {
    id:     data.id,
    name:   data.name,
    sprite: data.sprites.other['official-artwork'].front_default,
    types:  data.types.map((t: any) => t.type.name),
    stats:  data.stats.map((s: any) => ({
      name:  s.stat.name,
      value: s.base_stat
    }))
  };
}
