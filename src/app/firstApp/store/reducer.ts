import * as React from 'react'
import { FirstApp } from '../domain/first-app';

type Types = "SET_POKEMON"

interface Action {
    type: Types;
    payload: any;
}

const reducer: React.Reducer<FirstApp, Action> = (state, action) => {
    switch (action.type) {
        case "SET_POKEMON":
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state
    }
}

export default reducer
