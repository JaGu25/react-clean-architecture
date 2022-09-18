import React, { useEffect } from 'react'
import Card from '../../../../shared/components/Card/Card'
import Loading from '../../../../shared/components/Loading/Loading'
import RickAndMortyService from '../../services/rick-morty.service'
import { useSecondAppContext } from '../../store/context'
import RickAndMortyStyled from './RickAndMorty.styled'

const RickAndMorty = () => {

    const { characters, setCharacters } = useSecondAppContext()

    useEffect(() => {
        const getRickAndMortyCharacters = async () => {
            const characters = await RickAndMortyService.getRickAndMortyCharacters();
            setCharacters(characters)
        }
        getRickAndMortyCharacters()

    }, [])

    return (
        <RickAndMortyStyled.Wrapper>
            {characters.map(character => (
                <Card
                    key={character.id}
                    title={character.name}
                    description={character.description}
                    img={character.image}
                    handleClick={() => { }}
                    onLikedChange={() => { }}
                />
            ))}
        </RickAndMortyStyled.Wrapper>
    )
}

export default RickAndMorty
