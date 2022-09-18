import React, { useState as useStateMock } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Modal from "../Modal"

const click = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('Button Component', () => {
    it('should render without crash', () => {
        const { container } = render(
            <Modal
                handleModal={click}
                showModal={true}>
                <h1>Modal contenido</h1>
            </Modal>
        )
        expect(container).toMatchSnapshot()
    })

    it('should show modal', async () => {
        render(
            <Modal
                handleModal={click}
                showModal={true}>
                <h1>Modal contenido</h1>
            </Modal>
        )

        expect(await screen.findByText('Modal contenido')).toBeInTheDocument
    })

    it('should close modal', async () => {

        const handleModal = jest.fn()

        render(
            <Modal
                handleModal={handleModal}
                showModal={true}>
                <h1>Modal contenido</h1>
            </Modal>
        )

        const closeModalButton = await screen.findByTestId('closemodal')
        fireEvent.click(closeModalButton)
        expect(handleModal).toBeCalled()
    })
})