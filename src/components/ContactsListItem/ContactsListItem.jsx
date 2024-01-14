const ContactsListItem = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}{' '}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactsListItem;
