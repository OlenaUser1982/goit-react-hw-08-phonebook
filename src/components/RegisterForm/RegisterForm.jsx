import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegister } from '../../redux/auth/operations';
import { Button } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(fetchRegister({ name, email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          type="text"
          value={name}
          style={{ width: '300px' }}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          value={email}
          style={{ width: '300px' }}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel> Password</FormLabel>
        <Input
          name="password"
          type="password"
          value={password}
          style={{ width: '300px' }}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Register
      </Button>
    </form>
  );
};
export default RegisterForm;
