import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

// import { List } from './FriendsList.styled';
const ContactsList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem name={name} number={number} key={id} />
      ))}
    </div>
  );
};
export default ContactsListItem;
