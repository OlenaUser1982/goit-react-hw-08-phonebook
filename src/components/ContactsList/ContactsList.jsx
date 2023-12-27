import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const onDelete = id => {
    dispatch(deleteContact(id));
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
