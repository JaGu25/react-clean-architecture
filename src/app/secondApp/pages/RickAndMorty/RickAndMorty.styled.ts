import styled from "styled-components";
import { md, spacing } from "../../../../shared/utils/styles.utils";

const Wrapper = styled.div`
    padding: ${spacing.Spacing4};
    gap: ${spacing.Spacing5};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    
     @media ${md.xs}  { 
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${md.sm}  { 
        grid-template-columns: repeat(3, 1fr);
    }

     @media ${md.md}  { 
        grid-template-columns: repeat(4, 1fr);
    }

     @media ${md.xl}  { 
        grid-template-columns: repeat(5, 1fr);
    }
`

const RickAndMortyStyled = {
    Wrapper
}

export default RickAndMortyStyled