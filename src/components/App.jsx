import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';

import Filter from './Filter/Filter';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
export default App;
