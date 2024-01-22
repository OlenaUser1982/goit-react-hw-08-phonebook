import { Loader } from 'components/Loader/Loader';
import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/selectors';

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <LoginForm />
    </>
  );
};
export default LoginPage;
