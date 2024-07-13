// src/components/ContactForm/styles.ts
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 80%; /* Ajustar a largura para combinar com os outros elementos */
`;

export const Input = styled.input`
  padding: 8px; /* Reduzir o padding para combinar com o input de pesquisa */
  margin-bottom: 10px;
  border: none; /* Remover a borda para combinar com o input de pesquisa */
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px; /* Reduzir o padding para combinar com o botão de pesquisa */
  border: none;
  border-radius: 4px;
  background-color: #28a745; /* Cor verde */
  color: white;
  cursor: pointer;
  width: 70%; /* Ajustar a largura para combinar com o botão de pesquisa */
  align-self: center; /* Centralizar o botão dentro do formulário */
  margin-top: 10px; /* Adicionar margem superior para separar do último input */

  &:hover {
    background-color: #218838;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545; /* Cor vermelha */
  margin-bottom: 20px; /* Margem inferior para separar a mensagem de erro do input */
  text-align: center; /* Centralizar o texto */
`;
