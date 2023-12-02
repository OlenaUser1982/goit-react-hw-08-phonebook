import { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = { contacts: [], filter: '' };
  onSubmit = newContact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...newContact, id: nanoid() }],
    }));
  };
  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactsForm onSubmit={this.onSubmit} />
        {/* <Filter />  */}
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
