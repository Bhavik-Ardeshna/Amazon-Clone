import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );

};

export const useStateValue = () => useContext(StateContext);