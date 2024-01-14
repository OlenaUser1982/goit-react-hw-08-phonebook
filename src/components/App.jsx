import { useEffect } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';

import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchGetAllContacts } from '../redux/operations';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Layout from './Layout/Layout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchGetAllContacts());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
