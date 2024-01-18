import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(fetchLogout());
  };

  return (
    <>
      {user && (
        <>
          <p>{user.email}</p>
          <button onClick={handleClick} type="button">
            Logout
          </button>
        </>
      )}
    </>
  );
};
