import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </nav>
  );
};
