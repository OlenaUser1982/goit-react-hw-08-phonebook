// import { authSlice } from '../../redux/auth/authSlice.js';
// import { Navigate } from 'react-router-dom';

// /**
//  * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
//  * - Otherwise render the component
//  */

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = authSlice();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
  ...rest
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
