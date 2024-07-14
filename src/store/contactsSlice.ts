// src/store/contactsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const initialState: Contact[] = [
  { id: 1, name: 'Alice Silva', email: 'alice.silva@example.com', phone: '(11) 99999-8888' },
  { id: 2, name: 'Bruno Souza', email: 'bruno.souza@example.com', phone: '(21) 98888-7777' },
  { id: 3, name: 'Carlos Pereira', email: 'carlos.pereira@example.com', phone: '(31) 97777-6666' },
  { id: 4, name: 'Daniela Oliveira', email: 'daniela.oliveira@example.com', phone: '(41) 96666-5555' },
  { id: 5, name: 'Eduardo Santos', email: 'eduardo.santos@example.com', phone: '(51) 95555-4444' },
  { id: 6, name: 'Fernanda Lima', email: 'fernanda.lima@example.com', phone: '(61) 94444-3333' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<number>) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
