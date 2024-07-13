// src/components/EditModal/EditModal.tsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ModalContainer, ModalHeader, ModalBody, ModalFooter, Input, Button } from './styles';

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contact: { id: number; name: string; email: string; phone: string };
  onSave: (id: number, email: string, phone: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onRequestClose, contact, onSave }) => {
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  useEffect(() => {
    setEmail(contact.email);
    setPhone(contact.phone);
  }, [contact]);

  const handleSave = () => {
    onSave(contact.id, email, phone);
    onRequestClose();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Editar Contato">
      <ModalContainer>
        <ModalHeader>Editar Contato</ModalHeader>
        <ModalBody>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onRequestClose}>Cancelar</Button>
          <Button onClick={handleSave}>Salvar</Button>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};

export default EditModal;
