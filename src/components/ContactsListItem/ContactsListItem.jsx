// import { ListItem, Span, Button } from './ContactsListItem.styled';

export const ContactsListItem = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };
  return (
    <ListItem>
      <Span>{contact.name}: </Span>
      {contact.number}
      <Button onClick={handleDelete}>Delete</Button>
    </ListItem>
  );
};
export default ContactsListItem;
