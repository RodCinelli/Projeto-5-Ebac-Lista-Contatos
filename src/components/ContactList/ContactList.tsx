// src/components/ContactList/ContactList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeContact, editContact } from '../../store/contactsSlice';
import EditModal from '../EditModal/EditModal';
import { List, ListItem, ContactInfo, Buttons, Button } from './styles';

const ContactList: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({ id: 0, name: '', email: '', phone: '' });

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemove = (id: number) => {
    dispatch(removeContact(id));
  };

  const handleEdit = (contact: { id: number; name: string; email: string; phone: string }) => {
    setCurrentContact(contact);
    setModalOpen(true);
  };

  const handleSave = (id: number, email: string, phone: string) => {
    dispatch(editContact({ id, name: currentContact.name, email, phone }));
  };

  return (
    <>
      <List>
        {filteredContacts.map((contact) => (
          <ListItem key={contact.id}>
            <ContactInfo>
              <strong>{contact.name}</strong>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
            </ContactInfo>
            <Buttons>
              <Button onClick={() => handleEdit(contact)}>Editar</Button>
              <Button onClick={() => handleRemove(contact.id)} delete>Remover</Button>
            </Buttons>
          </ListItem>
        ))}
      </List>
      <EditModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contact={currentContact}
        onSave={handleSave}
      />
    </>
  );
};

export default ContactList;
