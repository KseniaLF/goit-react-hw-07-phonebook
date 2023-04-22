import { Form } from '../Form/Form';

import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact, deleteAll } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const handleDeleteAll = () => dispatch(deleteAll());
  const handleAddContact = value => dispatch(addContact(value));

  const handleSubmit = (values, { resetForm }) => {
    // console.log('actions:', actions);

    const findDuplicateContact = contacts.find(item => {
      return item.name === values.name;
    });

    findDuplicateContact
      ? alert(`${values.name} is already in contacts.`)
      : handleAddContact(values);

    resetForm();
  };

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <Form handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <button onClick={() => handleDeleteAll()} title="delete all">
        delete all contacts
      </button>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
