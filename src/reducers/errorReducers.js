import {  LOGIN_USER, INVALID_USER } from "../types";

const errorReducer = (state=[] , action) => {
  switch (action.type) {
    case INVALID_USER:
      return { error: action.payload };
    
    default:
      return state;
  }
};
export { errorReducer };
