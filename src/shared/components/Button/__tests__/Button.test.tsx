import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../Button"

const click = jest.fn()

describe('Button Component', () => {
    it('should render without crash', () => {
        const { container } = render(
            <Button
                text="click me"
                onClick={click}
            />
        )
        expect(container).toMatchSnapshot()
    })

    it('should click button', async () => {
        render(
            <Button
                text="click me"
                onClick={click}
            />
        )

        const button = await screen.findByText('click me')
        fireEvent.click(button)
        expect(click).toBeCalled()
    })
})