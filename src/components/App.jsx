import { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onSubmit = newContact => {
    const { name } = newContact;

    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, { ...newContact, id: nanoid() }],
    }));
  };
  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  handleChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChangeFilter} />
        {/* <ContactsList
          contacts={filteredContacts}
          onDelete={this.handleDelete}
        /> */}
        <ContactsList contacts={filteredContacts} onDelete={this.onDelete} />
      </div>
    );
  }
}
