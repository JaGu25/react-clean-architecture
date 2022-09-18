import styled from "styled-components";
import { fontSizes } from "../../../../shared/utils/styles.utils";

const Wrapper = styled.div`
    height: 100vh;
    display: grid;
    place-content: center;
`

const Icon = styled.i`
    font-size: ${fontSizes["3xl"]};
    color: #6C2E82;
    cursor: pointer;
`

const GitHubStyled = {
    Wrapper,
    Icon
}

export default GitHubStyled