import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../redux/auth/operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;
