import React, { useReducer } from "react";
import { FirstApp } from "../domain/first-app";
import { Pokemon } from "../domain/pokemon";
import FirstAppReducer from "./reducer";

interface Props {
    children: React.ReactNode
}

const initialState: FirstApp = {
    pokemon: {} as Pokemon,
    setPokemon: () => { }
}

export const FirstAppContext = React.createContext<FirstApp>(initialState)

const FirstAppProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(FirstAppReducer, initialState)

    const setPokemon = (pokemon: Pokemon) => {
        dispatch({
            type: "SET_POKEMON",
            payload: pokemon
        })
    }

    return (
        <FirstAppContext.Provider
            value={{
                pokemon: state.pokemon,
                setPokemon
            }}
        >
            {children}
        </FirstAppContext.Provider>
    )
}

const useFirstAppContext = () => {
    return React.useContext(FirstAppContext)
}

export { FirstAppProvider, useFirstAppContext }
