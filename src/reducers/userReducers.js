import {  LOGIN_USER, INVALID_USER } from "../types";

const userReducer = (state = { user: JSON.parse(localStorage.getItem("user") || "[]") }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { user: action.payload };
    case INVALID_USER:
      return { order: null };
   
    default:
      return state;
  }
};
export { userReducer };
