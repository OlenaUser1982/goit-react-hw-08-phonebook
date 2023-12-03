import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

const ContactsList = ({ contacts, onDelete }) => {
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
