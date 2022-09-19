import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Card from '../../../../shared/components/Card/Card'
import { fetching, stopFetching } from '../../../../store/reducer'
import RickAndMortyService from '../../services/rick-morty.service'
import { useSecondAppContext } from '../../store/context'
import RickAndMortyStyled from './RickAndMorty.styled'

const RickAndMorty = () => {

    const { characters, setCharacters } = useSecondAppContext()
    const dispatch = useDispatch();

    useEffect(() => {
        const getRickAndMortyCharacters = async () => {
            try {
                dispatch(fetching())
                const characters = await RickAndMortyService.getRickAndMortyCharacters();
                setCharacters(characters)
                dispatch(stopFetching())
            } catch (error) {
                console.log(error);
            }   

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
