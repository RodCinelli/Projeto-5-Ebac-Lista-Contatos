// src/components/Sidebar/styles.ts
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px; /* Diminuir a largura */
  padding: 20px;
  background-color: #343a40;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralizar o conteúdo */
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  width: 65%; /* Reduzir a largura */
  padding: 8px; /* Reduzir o padding */
  border: none;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  width: 40%; /* Reduzir ainda mais a largura */
  padding: 6px; /* Reduzir ainda mais o padding */
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ClearButton = styled.button`
  width: 40%;
  padding: 6px;
  border: none;
  border-radius: 4px;
  background-color: #6c757d;
  color: white;
  cursor: pointer;
  margin-bottom: 30%; /* Ajustar a margem inferior para separar o botão do resultado */

  &:hover {
    background-color: #5a6268;
  }
`;

export const SearchResult = styled.div`
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
  color: #333;
  width: 100%;
`;

export const SearchResultItem = styled.div`
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 0.9em;
  color: #333;
`;

export const ErrorMessage = styled.div`
  color: #dc3545; /* Cor vermelha */
  text-align: center; /* Centralizar o texto */
`;
