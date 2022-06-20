import React from 'react';
import { createContext, useContext, useReducer } from 'react';

//This is the data layer
export const StateContext = createContext(); 

//Build a provider to wrap our app and give it access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
   <StateContext.Provider value={useReducer(reducer, initialState)}>
       {children}
   </StateContext.Provider>
);

//This is how we access the data layer from insde of a component
export const useStateValue = () => useContext(StateContext); 