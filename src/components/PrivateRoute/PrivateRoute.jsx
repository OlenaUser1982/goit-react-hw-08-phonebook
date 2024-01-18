// import { Navigate } from 'react-router-dom';
// import { authSlice } from './PrivateRoute';

// /**
//  * - If the route is private and the user is logged in, render the component
//  * - Otherwise render <Navigate> to redirectTo
//  */

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = authSlice();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };
