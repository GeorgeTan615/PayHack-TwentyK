import React, { createContext, useContext, useReducer } from "react";

// Define your initial state
const initialState = {
  enabled: false,
};

// Define your reducer function
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "TOGGLE_SWITCH":
      return { ...state, enabled: !state.enabled };
    default:
      return state;
  }
};

// Create the context
const AppContext = createContext("");

// Create the provider component
const AppProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to access the context
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
