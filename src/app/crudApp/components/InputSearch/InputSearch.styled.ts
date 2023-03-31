import styled from "styled-components";
import { fontSizes } from "../../../../shared/utils/styles.utils";

const InputSearch = styled.input`
    margin-top: 1rem;
    font-size: ${fontSizes.base};
    border: 0.5px solid #4a5568;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    ::placeholder{
        color: #4a5568;
    }
`

const InputSearchStyled = {
    InputSearch
}

export default InputSearchStyled;