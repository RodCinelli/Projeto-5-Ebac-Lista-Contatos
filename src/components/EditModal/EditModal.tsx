import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ModalContainer, ModalHeader, ModalBody, ModalFooter, Input, Button } from './styles';

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contact: { id: number; name: string; email: string; phone: string };
  onSave: (id: number, name: string, email: string, phone: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onRequestClose, contact, onSave }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
  }, [contact]);

  const handleSave = () => {
    onSave(contact.id, name, email, phone);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Editar Contato"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '400px',
          width: '90%',
          padding: '20px', // Adicione padding aqui
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f8f9fa',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <ModalContainer>
        <ModalHeader>Editar Contato</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
