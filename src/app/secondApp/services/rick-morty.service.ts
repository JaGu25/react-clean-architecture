import { getRickAndMortyCharactersAdapter } from '../adapters/characters.adaptar';
import { Characters, CharactersResponse } from '../domain/characters';

const getRickAndMortyCharacters = async (): Promise<Characters[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const charactersResponse = await response.json()
    return getRickAndMortyCharactersAdapter(charactersResponse.results as CharactersResponse[]);
}

const RickAndMortyService = {
    getRickAndMortyCharacters
}

export default RickAndMortyService