import { ContactContainer, DeteleBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  const getFilteredContacts = () => {
    const normaliseFilter = filterValue.toLowerCase().trim();

    if (normaliseFilter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normaliseFilter)
      );
    }
    return contacts;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactContainer>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <DeteleBtn onClick={() => handleDelete(id)}>Delete</DeteleBtn>
          </li>
        ))}
      </ul>
    </ContactContainer>
  );
};
