import React, { useReducer } from "react";
import SecondAppReducer from "./reducer";
import { SecondApp } from '../domain/second-app';
import { Characters } from '../domain/characters';

interface Props {
    children: React.ReactNode
}

const initialState: SecondApp = {
    characters: [],
    setCharacters: () => { }
}

export const SecondAppContext = React.createContext<SecondApp>(initialState)

const SecondAppProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(SecondAppReducer, initialState)

    const setCharacters = (characters: Characters[]) => {
        dispatch({
            type: "SET_CHARACTERS",
            payload: characters
        })
    }

    return (
        <SecondAppContext.Provider
            value={{
                characters: state.characters,
                setCharacters
            }}
        >
            {children}
        </SecondAppContext.Provider>
    )
}

const useSecondAppContext = () => {
    return React.useContext(SecondAppContext)
}

export { SecondAppProvider, useSecondAppContext }
