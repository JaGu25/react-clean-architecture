import React from 'react'
import ButtonStyled from './Button.styled'
import { colors } from '../../utils/styles.utils'

interface IProps {
    text: string,
    actionType?: 'button' | "reset" | "submit"
    type?: 'primary' | 'secondary'
    onClick: () => void
}

const Button: React.FC<IProps> = ({
    text,
    actionType = "button",
    type = "primary",
    onClick
}) => {
    return (
        <ButtonStyled.ButtonWrapper
            type={actionType}
            color={colors[type]}
            color_variant={colors[`${type}_variant`]}
            onClick={onClick}
        >
            {text}
        </ButtonStyled.ButtonWrapper>
    )
}

export default Button
