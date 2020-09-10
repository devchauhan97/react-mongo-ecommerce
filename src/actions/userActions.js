import { LOGIN_USER,INVALID_USER } from "../types";

export const doLogin = (parms) => (dispatch) => {
  // fetch("/api/user", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(parms),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
    console.log(parms.username , parms.password)
     if( parms.username ==  "johndoe@gmail.com"   ){
      dispatch({ type: LOGIN_USER, payload: parms });
      localStorage.setItem("user", JSON.stringify(parms));
     }else{
      dispatch({ type: INVALID_USER, payload:{ msg :"Inavlid user name or password"} });
     }
     
      //localStorage.clear("cartItems");
     // dispatch({ type: LOGIN_USER });
   // });
};
 
