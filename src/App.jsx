import { useEffect, useState } from 'react'
import './App.css'
import { nanoid } from "nanoid"
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  };

  const onAddContact = (contactValues) => {
    const newContact = {
      ...contactValues,
      id: nanoid(),
    }
    setContacts([newContact, ...contacts])
  }

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
  }

  const filteredProfiles = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        onAddContact={onAddContact}
      />
      <SearchBox
        filterValue={filterValue}
        handleFilter={handleFilter}
      />
      <ContactList
        contacts={filteredProfiles}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}

export default App
