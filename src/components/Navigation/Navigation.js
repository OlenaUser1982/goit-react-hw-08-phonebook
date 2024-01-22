import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <li>
        <NavLink
          style={{
            backgroundColor: 'rgb(49, 130, 206)',
            color: 'white',
            borderRadius: '4px',
            width: '50px',
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            style={{
              backgroundColor: 'rgb(49, 130, 206)',
              color: 'white',
              borderRadius: '4px',
              width: '50px',
            }}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      )}
      {!isLoggedIn && (
        <>
          <li>
            <NavLink
              style={{
                backgroundColor: 'rgb(49, 130, 206)',
                color: 'white',
                borderRadius: '4px',
                width: '50px',
              }}
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                backgroundColor: 'rgb(49, 130, 206)',
                color: 'white',
                borderRadius: '4px',
                width: '50px',
              }}
              to="/login"
            >
              Login
            </NavLink>
          </li>{' '}
        </>
      )}
    </nav>
  );
};
