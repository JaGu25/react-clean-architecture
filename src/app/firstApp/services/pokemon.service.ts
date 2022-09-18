import { getPokemonAdapter } from '../adapters/pokemon.adapter';
import { Pokemon, PokemonResponse, PokemonEspeciesResponse } from '../domain/pokemon';

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemonResult: PokemonResponse = await pokemonResponse.json()
    const pokemonSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const pokemonSpeciesResult: PokemonEspeciesResponse = await pokemonSpecies.json()

    return getPokemonAdapter(pokemonResult, pokemonSpeciesResult)
}

const PokemonService = {
    getPokemon
}

export default PokemonService