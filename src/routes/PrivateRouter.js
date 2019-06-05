// import React, { PropTypes } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import createStore from "./store";
// // import Cookies from "js-cookie";
// import localStorage from "localStorage";

// const { store } = createStore();

// // import {loadMenu,resetMenu} from 'actionMenu';

// //import {login,logout}  from 'app/action/actionAuthenticate.js';

// // var store = require('store');

// //console.log(store.getState());
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   let state = store.getState();

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         state.auth.user ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: {
//                 from: props.location
//               }
//             }}
//           />
//         )
//       }
//     />
//   );
// };
// export default PrivateRoute;
