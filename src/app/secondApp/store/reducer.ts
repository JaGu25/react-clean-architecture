import * as React from 'react'
import { SecondApp } from '../domain/second-app';

type Types = "SET_CHARACTERS"

interface Action {
    type: Types;
    payload: any;
}

const reducer: React.Reducer<SecondApp, Action> = (state, action) => {
    switch (action.type) {
        case "SET_CHARACTERS":
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state
    }
}

export default reducer
