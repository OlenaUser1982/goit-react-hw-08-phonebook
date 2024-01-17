import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { fetchDeleteContact } from '../../redux/contacts/operations';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const onDelete = id => {
    dispatch(fetchDeleteContact(id));
  };
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default ContactsList;
