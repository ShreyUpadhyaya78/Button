import React, { createContext, useReducer } from 'react';

const initialState = {
  colors: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLOR':
      return { ...state, colors: [...state.colors, action.payload] };
    default:
      return state;
  }
};

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
