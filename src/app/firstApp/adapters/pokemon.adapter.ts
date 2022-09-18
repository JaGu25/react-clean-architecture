import { PokemonResponse, PokemonEspeciesResponse, Pokemon } from '../domain/pokemon';

export const getPokemonAdapter = (
    pokemonResponse: PokemonResponse,
    pokemonEspeciesResponse: PokemonEspeciesResponse): Pokemon => {

    const pokemon: Pokemon = {
        id: pokemonResponse.id,
        name: pokemonResponse.name,
        img: pokemonResponse.sprites.other['official-artwork'].front_default,
        description: pokemonEspeciesResponse.flavor_text_entries[0].flavor_text
    }

    return pokemon;
}