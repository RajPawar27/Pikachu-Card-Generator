// server/src/types/pokedex-promise-v2.d.ts
declare module 'pokedex-promise-v2' {
  /** Minimal options you pass to the client */
  interface PokedexOptions {
    protocol?:   string;
    hostName?:   string;
    versionPath?:string;
    cacheLimit?: number;
    timeout?:    number;
  }

  /** Shape of the raw API result you care about */
  interface PokemonResult {
    id: number;
    name: string;
    sprites: {
      other: {
        'official-artwork': { front_default: string }
      }
    };
    types: { slot: number; type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
  }

  /** Tell TS “Pokedex is a class you can new up” */
  export default class Pokedex {
    constructor(options?: PokedexOptions);
    getPokemonById(id: number): Promise<PokemonResult>;
    getPokemonByName(name: string): Promise<PokemonResult>;
    // add other methods you actually call…
  }
}
