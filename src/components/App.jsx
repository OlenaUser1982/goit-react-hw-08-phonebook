import { useEffect } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';

import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllContacts } from '../redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Layout from './Layout/Layout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { fetchRefreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRefreshUser());
  }, [dispatch]);
  return (
    <>
      {!isRefreshing && (
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};
export default App;
