// import { Item, Status } from './FriendsListItem.styled';

const ContactsListItem = ({ name, number, id, onDelete }) => (
  <li className="item">
    <p className="name">{name}</p>
    <p className="number">{number}</p>;
    <button type="button" key={id} onClick={() => onDelete(id)}>
      {id}
    </button>
  </li>
);
export default ContactsListItem;
