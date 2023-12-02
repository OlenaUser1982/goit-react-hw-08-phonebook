const ContactsListItem = ({ contacts, onDelete }) => {
  const handleDelete = () => {
    onDelete(contacts.id);
  };
  return (
    <ul>
      <li>
        {contacts.name}:{contacts.number}
      </li>
      <button onClick={handleDelete}>Delete</button>
    </ul>
  );
};

export default ContactsListItem;
