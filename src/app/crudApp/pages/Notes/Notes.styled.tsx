import styled from 'styled-components';
import { boxShadow, fontSizes, md, spacing } from '../../../../shared/utils/styles.utils';

const NotesWrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 1.5rem;
`

const NotesTitle = styled.h1`
    font-size: 2.8rem;
    font-weight: bold;
`

const NotesModalTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: bold;
`

const NotesHeader = styled.div`
    text-align: center;
`

const NotesContainer = styled.div`
    margin-top: 1.5rem;
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

const NotesCard = styled.div`
    border-radius: ${spacing.Spacing1};
    box-shadow: ${boxShadow.basic};
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all 0.2s ease-in-out;
    padding: 1rem;

    :hover {
        transform: scale(1.05);
    }
`

const NotesCardTitle = styled.h3`
    font-size: ${fontSizes.lg};
`

const NotesCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const NotesCardDescription = styled.p`
    font-size: ${fontSizes.xs};
    color: #4a5568;
`

const NotesCardActions = styled.div`
    display: flex;
    gap: 0.5rem;
`

interface CardAction {
    color: string
}

const NotesCardAction = styled.i<CardAction>`
    cursor: pointer;
    color: ${({ color }) => `${color}`};;
`

const NotesStyled = {
    NotesWrapper,
    NotesTitle,
    NotesHeader,
    NotesModalTitle,
    NotesContainer,
    NotesCard,
    NotesCardTitle,
    NotesCardDescription,
    NotesCardHeader,
    NotesCardActions,
    NotesCardAction
}

export default NotesStyled;