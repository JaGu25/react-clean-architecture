import { Pokemon } from "./pokemon";

export interface FirstApp {
    pokemon: Pokemon
    setPokemon: (pokemon: Pokemon) => void
}