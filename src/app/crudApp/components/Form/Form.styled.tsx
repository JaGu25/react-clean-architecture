import styled from "styled-components";
import { fontSizes } from "../../../../shared/utils/styles.utils";

const FormContent = styled.form`
    margin: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
` 

const LabelForm = styled.label`
    font-size: ${fontSizes.base};
`

const InputForm = styled.input`
    font-size: ${fontSizes.base};
    border: 1px solid gray;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
`

const TextAreaForm = styled.textarea`
    font-size: ${fontSizes.base};
    border: 1px solid gray;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
`


const FormStyled = {
    InputForm,
    FormContent,
    TextAreaForm,
    FormGroup,
    LabelForm
}

export default FormStyled