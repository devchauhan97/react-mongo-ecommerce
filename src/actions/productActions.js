import { FETCH_PRODUCTS } from "../types";
import { FILTER_PRODUCTS_BY_NAME } from "../types";
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (products, name) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_NAME,
    payload: {
      name: name,
      items: 
        name === ""
          ? products
          : products.filter((x) => x.title.indexOf(name) >= 0),
    },
  });
};
 