
export interface Characters {
    id: string,
    name: string,
    image: string,
    description: string
}

export interface CharactersResponse {
    id: string,
    name: string,
    species: string,
    image: string,
    origin: {
        name: string
    },
    location: {
        name: string
    }
}