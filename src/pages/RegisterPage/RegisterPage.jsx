import { Loader } from 'components/Loader/Loader';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/selectors';
const RegisterPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <RegisterForm />
    </>
  );
};
export default RegisterPage;
