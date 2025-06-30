// server/src/types/pokedex-promise-v2/index.d.ts
declare module 'pokedex-promise-v2' {
  // We don’t need full types here—just tell TS “import Pokedex gives me any.”
  const Pokedex: any;
  export default Pokedex;
}
