import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = [
  { name: 'John', number: '452-69-23', id: nanoid() },
  { name: 'Ann', number: '563-45-76', id: nanoid() },
  { name: 'Michael', number: '742-96-83', id: nanoid() },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      //   console.log(action.payload);
      return state.filter(contact => contact.id !== action.payload);
    },

    deleteAll(state) {
      return (state = []);
    },
  },
});

export const { deleteContact, deleteAll, addContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
