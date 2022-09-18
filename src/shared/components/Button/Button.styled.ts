import styled from 'styled-components'
import { colors, fontSizes, spacing } from '../../utils/styles.utils'

interface ButtonWrapperProps {
    color: string,
    color_variant: string
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
    padding: ${spacing.Spacing1} ${spacing.Spacing2};
    background-color: ${({ color }) => `${color}`};
    font-size: ${fontSizes.sm};
    color: ${colors.white};
    border-radius: ${spacing.Spacing1};
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
        background-color: ${({ color_variant }) => `${color_variant}`};
    }

    &:active {
        transform: translateY(2px);
    }
`

const ButtonStyled = {
    ButtonWrapper
}

export default ButtonStyled
