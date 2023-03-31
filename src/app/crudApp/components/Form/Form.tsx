import React, { Dispatch, FormEvent, SetStateAction } from 'react'
import Button from '../../../../shared/components/Button/Button'
import FormStyled from './Form.styled'
import { useState, useEffect } from 'react';
import { Note } from '../../domain/notes';
import { toast, ToastOptions } from 'react-toastify';
import NotesServices from '../../services/notes.service';

interface IProps {
    note: Note | null,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    getNotes: () => {}
}

const defaultForm: Note = {
    title: "",
    description: "",
}

const Form : React.FC<IProps> = ({ note, setShowModal, getNotes }) => {

    const [form, setForm] = useState<Note>(defaultForm)

    useEffect(() => {
      setForm(note ?? defaultForm);
    }, [note])
    
    const handleInputChange = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>): void => {
        setForm({
            ...form,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleSaveNote = async () => {
        const { title, description } = form
        if(!title.trim().length || !description.trim().length) {
            return toast.error('Por favor complete el formulario !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        const configSuccessToast: ToastOptions = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        };

        if (note?.id) {
            try {
                await NotesServices.updateNote({ title, description }, note.id)
                toast.success('Nota Guardada!', configSuccessToast)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                await NotesServices.createNote({ title, description })
                toast.success('Nota Guardada!', configSuccessToast)
            } catch (error) {
                console.log(error)
            }
        }
        setShowModal(false)
        getNotes()
    }
    
    return (
        <FormStyled.FormContent>
            <FormStyled.FormGroup>
                <FormStyled.LabelForm htmlFor="title">Título</FormStyled.LabelForm>
                <FormStyled.InputForm  id="title" name='title' value={form.title} onChange={handleInputChange} type="text" />
            </FormStyled.FormGroup>
            <FormStyled.FormGroup>
                <FormStyled.LabelForm htmlFor="description">Descripción</FormStyled.LabelForm>
                <FormStyled.TextAreaForm id="description" name='description' value={form.description} onChange={handleInputChange}></FormStyled.TextAreaForm>
            </FormStyled.FormGroup>
            <Button text='Guardar' onClick={handleSaveNote}></Button>
        </FormStyled.FormContent>
    )
}

export default Form
