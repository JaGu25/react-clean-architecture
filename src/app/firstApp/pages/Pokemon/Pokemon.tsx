import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from '../../../../shared/components/Card/Card';
import { useFirstAppContext } from '../../store/context'
import PokemonStyled from './Pokemon.styled'
import { useEffect } from 'react';
import PokemonService from '../../services/pokemon.service';
import { FirstAppRoutes } from '../../routes/routes';
import { useDispatch } from 'react-redux';
import { fetching, stopFetching } from '../../../../store/reducer';

const Pokemon = () => {
    const { pokemon, setPokemon } = useFirstAppContext()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const getPokemon = async () => {
            try {
                dispatch(fetching())
                const pokemon = await PokemonService.getPokemon("1");
                setPokemon(pokemon)
                dispatch(stopFetching())
            } catch (error) {
                console.log(error)
            }

        }
        getPokemon()

    }, [])

    return (
        <PokemonStyled.Wrapper>
            <Card
                title={pokemon.name}
                description={pokemon.description}
                handleClick={() => navigate(FirstAppRoutes.GITHUB)}
                img={pokemon.img}
                onLikedChange={() => { }}
            />
        </PokemonStyled.Wrapper>
    )
}

export default Pokemon
