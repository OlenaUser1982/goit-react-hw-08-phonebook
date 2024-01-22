import { useState } from 'react';
import { Form, Label } from './LoginForm.styled';
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
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </Label>
      <button type="submit">Login</button>
    </Form>
  );
};
export default LoginForm;
