import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/contactsSlice';
import { Form, Input, Button, ErrorMessage } from './styles';

const ContactForm: React.FC<{ onContactAdded: () => void }> = ({ onContactAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const phoneDigits = value.replace(/\D/g, '');

    // Handle empty value
    if (phoneDigits === '') {
      return '';
    }

    // Format the phone number
    if (phoneDigits.length <= 2) {
      return `(${phoneDigits}`;
    } else if (phoneDigits.length <= 6) {
      return `(${phoneDigits.slice(0, 2)}) ${phoneDigits.slice(2)}`;
    } else if (phoneDigits.length <= 10) {
      return `(${phoneDigits.slice(0, 2)}) ${phoneDigits.slice(2, 6)}-${phoneDigits.slice(6)}`;
    } else {
      return `(${phoneDigits.slice(0, 2)}) ${phoneDigits.slice(2, 7)}-${phoneDigits.slice(7, 11)}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    dispatch(addContact({ id: Date.now(), name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
    setError('');
    onContactAdded();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="text"
        placeholder="Nome Completo"
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
        onChange={handlePhoneChange}
      />
      <Button type="submit">Adicionar Contato</Button>
    </Form>
  );
};

export default ContactForm;
