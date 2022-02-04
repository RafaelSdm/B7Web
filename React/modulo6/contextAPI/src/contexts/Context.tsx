import React, {createContext, useReducer} from 'react'

import {UserType, userInitialState, userReducer} from '../reducers/userReducer'
import { reducerActionType } from '../types/reducerAction'

/*
type ContextType = {
    name: string;
    age: number;
}

const initialState = {
    name: 'Rafael de souza damasceno',
    age: 20
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC = ({children}) =>{
    return(
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}

*/




type initialStateType = {
    user: UserType
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}


const initialState = {
    user: userInitialState
    
}


export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) =>({
    user: userReducer(state.user, action)
})


export const ContextProvider: React.FC = ({children}) =>{
    const [state, dispatch] = useReducer(mainReducer, initialState)
    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}