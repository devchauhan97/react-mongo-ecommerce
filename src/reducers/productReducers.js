import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_NAME
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS_BY_NAME:
      return {
        ...state,
        name: action.payload.name,
        filteredItems: action.payload.items,
      };
    
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};
