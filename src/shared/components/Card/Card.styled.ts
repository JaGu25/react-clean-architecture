import styled from 'styled-components'
import { boxShadow, colors, fontSizes, md, spacing } from '../../utils/styles.utils'

const CardWrapper = styled.div`
    border-radius: ${spacing.Spacing1};
    box-shadow: ${boxShadow.basic};
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all 0.2s ease-in-out;

    :hover {
        transform: scale(1.05);
    }
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: ${spacing.Spacing2};
`

const CardImage = styled.img`
    max-width: 100%;
    height: 250px;
    object-fit: fill;
`

const CardTitle = styled.h2`
   font-size: ${fontSizes.lg};
   font-weight: 700;
   color: ${colors.text};
`

const CardDescription = styled.p`
   margin: ${spacing.Spacing1} ${spacing.Spacing0} ${spacing.Spacing4};
   font-size: ${fontSizes.sm};
   font-weight: 400;
   color: ${colors.text};
`

const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardLikeIcon = styled.i`
    font-size: ${fontSizes.lg};
    cursor: pointer;
    &.active {
        color: ${colors.red};
    }
`

const CardStyled = {
    CardWrapper,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    CardActions,
    CardLikeIcon
}

export default CardStyled