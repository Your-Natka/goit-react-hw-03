import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import css from "./App.module.css";


const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem('saved-contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }

    return     [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};

export const App = () => {
  // Contacts
  const [contacts, setContacts] = useState(getInitialContacts);

  const onAddContact = (newContact) => {
    setContacts(prevContacts => {
      return [
        ...prevContacts,
        newContact
      ];
    });
  };

  const onDeleteContact = (id) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

    useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Filter
  const [filter, setFilter] = useState("");
  const onFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={onAddContact}/>
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={onFilter} onDelete={onDeleteContact} />
    </div>
  );
};