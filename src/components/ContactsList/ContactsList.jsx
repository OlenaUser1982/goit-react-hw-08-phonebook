import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

// import { List } from './FriendsList.styled';
const ContactsList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem name={name} number={number} key={id} />
      ))}
    </div>
  );
};
export default ContactsList;
