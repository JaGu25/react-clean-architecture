import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Card from "../Card"

const click = jest.fn()
const onLikedChange = jest.fn()

describe('Card Component', () => {
    it('should render without crash', () => {
        const { container } = render(
            <Card
                title="titulo"
                description="description"
                handleClick={() => { }}
                onLikedChange={() => { }}
                img=""
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('should click button', async () => {
        render(
            <Card
                title="titulo"
                description="description"
                handleClick={click}
                onLikedChange={() => { }}
                img=""
            />
        )

        const button = await screen.findByText('Ver más')
        fireEvent.click(button)
        expect(click).toBeCalled()
    })

    it('should listen if like icon is clicked', async () => {
        render(
            <Card
                title="titulo"
                description="description"
                handleClick={click}
                onLikedChange={onLikedChange}
                img=""
            />
        )

        const likeButton = await screen.findByTestId('likeaction')
        fireEvent.click(likeButton)
        expect(onLikedChange).toBeCalled()
    })
})