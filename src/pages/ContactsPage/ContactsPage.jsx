import { useEffect } from 'react';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';

import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllContacts } from '../../redux/contacts/operations';
import { selectContact, selectIsLoading } from '../../redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchGetAllContacts());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <Loader />}
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts && <ContactsList />}
    </div>
  );
};
export default ContactsPage;
