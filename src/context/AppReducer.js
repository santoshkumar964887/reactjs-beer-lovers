export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_FAVOURITELIST":
      return {
        ...state,
        favourite: [action.payload, ...state.favourite],
      };
    case "REMOVE_FROM_favourite":
      return {
        ...state,
        favourite: state.favourite.filter((beer) => beer.id !== action.payload),
      };
    default:
      return state;
  }
};
