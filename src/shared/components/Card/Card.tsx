import React, { useState } from 'react'
import CardStyled from './Card.styled'
import Button from '../Button/Button'

interface IProps {
    description: string
    title: string
    img: string,
    handleClick: () => void
    onLikedChange: (isLiked: boolean) => void
    isLiked?: boolean
}

const Card: React.FC<IProps> = ({
    description,
    img,
    title,
    handleClick,
    onLikedChange,
    isLiked = true
}) => {

    const [liked, setLiked] = useState(isLiked);
    const handleLikeChange = (): void => {
        setLiked(!liked)
        onLikedChange(!liked)
    }

    return (
        <CardStyled.CardWrapper>
            <CardStyled.CardImage src={img} />
            <CardStyled.CardContent>
                <div>
                    <CardStyled.CardTitle>
                        {title}
                    </CardStyled.CardTitle>
                    <CardStyled.CardDescription>
                        {description}
                    </CardStyled.CardDescription>
                </div>
                <CardStyled.CardActions>
                    <Button
                        text='Ver más'
                        type='primary'
                        onClick={handleClick} />
                    <CardStyled.CardLikeIcon
                        data-testid="likeaction"
                        className={`${liked ? 'fa-solid ' : 'fa-regular'} fa-heart ${liked && ('active')}`}
                        onClick={handleLikeChange}
                    />
                </CardStyled.CardActions>
            </CardStyled.CardContent>
        </CardStyled.CardWrapper>
    )
}

export default Card
