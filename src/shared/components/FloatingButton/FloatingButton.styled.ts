import styled from "styled-components";
import { boxShadow, colors, fontSizes, md, spacing } from '../../utils/styles.utils'

const ContainerButton = styled.button`
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color: ${colors.primary};
	color: ${colors.white};
	border-radius: 50px;
	box-shadow: ${boxShadow.basic};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
        background-color: ${colors.primary_variant};
    }

    &:active {
        transform: translateY(2px);
    }
`

const IconPlus = styled.i`
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
`


const FloatingButtonStyled  = {
    ContainerButton,
    IconPlus
}

export default FloatingButtonStyled;