import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      )}
      {!isLoggedIn && (
        <>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>{' '}
        </>
      )}
    </nav>
  );
};
