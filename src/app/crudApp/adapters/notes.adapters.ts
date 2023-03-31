import { Note, NoteResponse } from "../domain/notes";

export const getNotesAdapter = (notes: NoteResponse[]): Note[] => {
    return notes.map(({ ID, Description, Title }) => ({
        id: ID,
        description: Description,
        title: Title
    }))
}