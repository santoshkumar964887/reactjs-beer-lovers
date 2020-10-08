import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favourite: localStorage.getItem("favourite")
    ? JSON.parse(localStorage.getItem("favourite"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(state.favourite));
  }, [state]);

  // actions
  const addItemToFavouriteList = (item) => {
    dispatch({ type: "ADD_ITEM_TO_FAVOURITELIST", payload: item });
  };

  const removeFromfavourite = (id) => {
    dispatch({ type: "REMOVE_FROM_favourite", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favourite: state.favourite,
        removeFromfavourite,
        addItemToFavouriteList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
