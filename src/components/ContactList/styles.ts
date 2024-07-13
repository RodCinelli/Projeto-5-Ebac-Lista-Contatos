// src/components/ContactList/styles.ts
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: block;
  position: relative; /* Para posicionar os botões de forma absoluta */
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.2em;
    color: #333;
  }

  div {
    margin-top: 5px;
    color: #777;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  position: absolute; /* Posicionamento absoluto */
  right: 20px; /* Alinhar à direita */
  top: 37px; /* Ajustar conforme necessário para alinhar verticalmente */
`;

export const Button = styled.button<{ delete?: boolean }>`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ delete: del }) => (del ? '#dc3545' : '#007bff')};
  color: white;
  font-size: 0.9em;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ delete: del }) => (del ? '#c82333' : '#0056b3')};
  }
`;
