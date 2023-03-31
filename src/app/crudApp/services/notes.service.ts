import { Note, NoteResponse } from "../domain/notes"
import { getNotesAdapter } from '../adapters/notes.adapters';
 
const BASE_API = import.meta.env.VITE_API_SERVER;

const getNotes = async (): Promise<Note[]> => {
    const response = await fetch(BASE_API);
    const notes = await response.json() as NoteResponse[]
    return getNotesAdapter(notes)
}

const createNote = async (notes: Note): Promise<void> => {
    await fetch(BASE_API, {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(notes)
    });
}

const updateNote = async(notes: Note, id: number): Promise<void> => {
    await fetch(`${BASE_API}/${id}`, {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(notes)
    });
}

const deleteNote = async (id: number): Promise<void> => {
    await fetch(`${BASE_API}/${id}`, {
        method: "DELETE"
    });
}

const NotesServices = {
    getNotes,
    createNote,
    updateNote,
    deleteNote
}

export default NotesServices;