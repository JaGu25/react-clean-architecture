
import styled from 'styled-components'
import { colors, fontSizes } from '../../utils/styles.utils'

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    min-height: 100vh;
    display: grid;
    align-items: flex-end;
    overflow: hidden;
    transition: all 0.3s;
    z-index: 1000;
    visibility: hidden;
    opacity: 0;
    
    &.show {
        visibility: visible;
        opacity: 1;

        > div {
            transform: scale(1) translateY(0);
        }
    }
`

const ModalContent = styled.div`
    position: relative;
    background-color: ${colors.white};
    text-align: center;
    padding: 3rem 2rem;
    border-radius: 1rem 1rem 0 0;
    transition: all 0.3s;
    margin: auto;
    min-width: 380px;
    border-radius: 1.25rem;
    transform: scale(.5) translateY(10%);
`

const ModalClose = styled.i`
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: ${fontSizes.lg};
    color: ${colors.primary};
    cursor: pointer;
`

const ModalStyled = {
    ModalContainer,
    ModalContent,
    ModalClose
}

export default ModalStyled
