export interface PokemonResponse {
    id: number,
    name: string,
    sprites: {
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    }
}

export interface PokemonFlavorTextEntry {
    "flavor_text": string
}

export interface PokemonEspeciesResponse {
    'flavor_text_entries': PokemonFlavorTextEntry[]
}

export interface Pokemon {
    id: number,
    name: string,
    img: string,
    description: string
}