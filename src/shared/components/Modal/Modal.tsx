import React, { Children, Dispatch, SetStateAction, useRef } from 'react'
import useOutsideElement from '../../hooks/useClickOutsideElement'
import useKeypress from '../../hooks/useKeypress'
import ModalStyled from './Modal.styled'

interface IProps {
    showModal: boolean
    handleModal: Dispatch<SetStateAction<boolean>>
    children: React.ReactElement
}

const Modal: React.FC<IProps> = ({
    showModal,
    handleModal,
    children
}) => {

    const wrapperRef = useRef<HTMLDivElement>(null)

    useKeypress("Escape", () => handleModal(false))
    useOutsideElement(wrapperRef, () => handleModal(false))

    return (
        <ModalStyled.ModalContainer className={`${showModal && ('show')}`}>
            <ModalStyled.ModalContent ref={wrapperRef}>
                <ModalStyled.ModalClose
                    data-testid="closemodal"
                    className='fa-solid fa-xmark'
                    onClick={() => handleModal(false)} />
                {children}
            </ModalStyled.ModalContent>
        </ModalStyled.ModalContainer>
    )
}

export default Modal
