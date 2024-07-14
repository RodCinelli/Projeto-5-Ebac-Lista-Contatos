import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeContact, editContact } from '../../store/contactsSlice';
import { List, ListItem, ContactInfo, Buttons, Button } from './styles';
import EditModal from '../EditModal/EditModal';

const ContactList: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<{ id: number; name: string; email: string; phone: string } | null>(null);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditClick = (contact: { id: number; name: string; email: string; phone: string }) => {
    setSelectedContact(contact);
    setIsEditModalOpen(true);
  };

  const handleSave = (id: number, name: string, email: string, phone: string) => {
    dispatch(editContact({ id, name, email, phone }));
  };

  return (
    <>
      <List>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactInfo>
              <strong>{contact.name}</strong>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
            </ContactInfo>
            <Buttons>
              <Button onClick={() => handleEditClick(contact)}>Editar</Button>
              <Button delete onClick={() => dispatch(removeContact(contact.id))}>
                Remover
              </Button>
            </Buttons>
          </ListItem>
        ))}
      </List>
      {selectedContact && (
        <EditModal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          contact={selectedContact}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default ContactList;
