import { Characters } from "./characters"

export interface SecondApp {
    characters: Characters[]
    setCharacters: (characters: Characters[]) => void
}