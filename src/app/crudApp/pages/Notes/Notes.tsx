import { useEffect, useState } from 'react';
import FloatingButton from '../../../../shared/components/FloatingButton/FloatingButton'
import Modal from '../../../../shared/components/Modal/Modal'
import Form from '../../components/Form/Form';
import InputSearch from '../../components/InputSearch/InputSearch';
import NotesStyled from './Notes.styled';
import { toast, ToastContainer } from 'react-toastify';
import { Note } from '../../domain/notes';
import NotesServices from '../../services/notes.service';
import { useDispatch } from 'react-redux';
import { fetching, stopFetching } from '../../../../store/reducer';

const Notes = () => {

    const [notes, setNotes] = useState<Note[]>([]);
    const [showModal, setShowModal] = useState(false)
    const [currentNote, setCurrentNote] = useState<Note | null>(null)
    const dispatch = useDispatch()

    useEffect(() => {
      getNotes()
    }, [])

    const getNotes = async () => {
        try {
            dispatch(fetching())
            const notes = await NotesServices.getNotes()
            setNotes(notes)
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(stopFetching())
        }
    }
      
    const handleFloatingButton = () => {
        setCurrentNote(null)
        setShowModal(true)
    }

    const handleDeleteNote = async (id: number) => {
        try {
            await NotesServices.deleteNote(id)
            toast.error('Nota Eliminada !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            getNotes()
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateNote = (note: Note) => {
        setCurrentNote(note)
        setShowModal(true)
    }

    return (
        <NotesStyled.NotesWrapper>
            <NotesStyled.NotesHeader>
                <NotesStyled.NotesTitle>Mis Notas</NotesStyled.NotesTitle>
                {/* <InputSearch /> */}
            </ NotesStyled.NotesHeader>
            <NotesStyled.NotesContainer>
                {
                    notes.map((note) => (
                        <NotesStyled.NotesCard key={note.id}>
                            <NotesStyled.NotesCardHeader> 
                                <NotesStyled.NotesCardTitle>{ note.title }</NotesStyled.NotesCardTitle>
                                <NotesStyled.NotesCardActions>
                                    <NotesStyled.NotesCardAction color='green' className='fa fa-pencil' onClick={() => handleUpdateNote(note)}/>
                                    <NotesStyled.NotesCardAction color='red' className='fa fa-trash' onClick={() => handleDeleteNote(note.id!)}/>
                                </NotesStyled.NotesCardActions>
                            </NotesStyled.NotesCardHeader>
                            <NotesStyled.NotesCardDescription>{ note.description }</NotesStyled.NotesCardDescription>
                        </NotesStyled.NotesCard>
                    ))
                }
            </NotesStyled.NotesContainer>
            <Modal showModal={showModal} handleModal={setShowModal}>
                <>
                    <NotesStyled.NotesModalTitle>{ currentNote ? "Editar" : "Crear"} una Nota</NotesStyled.NotesModalTitle>
                    <Form note={currentNote} setShowModal={setShowModal} getNotes={getNotes}/>
                </>
            </Modal>
            <FloatingButton onClick={handleFloatingButton}/>
            <ToastContainer/>
        </NotesStyled.NotesWrapper>
    )
}

export default Notes
