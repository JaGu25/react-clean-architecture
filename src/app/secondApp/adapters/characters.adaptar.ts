import { Characters, CharactersResponse } from "../domain/characters";

export const getRickAndMortyCharactersAdapter = (
    charactersResponse: CharactersResponse[]
): Characters[] => (
    charactersResponse.map(characterResponse => ({
        id: characterResponse.id,
        name: characterResponse.name,
        description: `Origin: ${characterResponse.origin.name}, Location: ${characterResponse.location.name}`,
        image: characterResponse.image,
    }))
)