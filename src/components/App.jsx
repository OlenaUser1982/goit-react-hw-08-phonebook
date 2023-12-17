import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { useEffect, useState } from 'react';
const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = newContact => {
    const { name } = newContact;

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prev => [...prev, { ...newContact, id: nanoid() }]);
  };
  const onDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactsList contacts={filteredContacts()} onDelete={onDelete} />
    </div>
  );
};
export default App;
