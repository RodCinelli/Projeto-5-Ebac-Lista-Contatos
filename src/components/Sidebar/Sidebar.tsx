import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import { SidebarContainer, SearchInput, SearchResult, SearchResultItem, SearchButton, ErrorMessage } from './styles';
import { RootState } from '../../store/store';

const Sidebar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [searchResult, setSearchResult] = useState<{ name: string; email: string; phone: string } | null>(null);
  const contacts = useSelector((state: RootState) => state.contacts);

  useEffect(() => {
    if (search) {
      const result = contacts.find(contact => contact.name.toLowerCase().includes(search.toLowerCase()));
      setSearchResult(result || null);
    } else {
      setSearchResult(null);
    }
  }, [search, contacts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setError('');
  };

  const handleSearchClick = () => {
    if (!search) {
      setError('Por favor, digite um nome para buscar');
      return;
    }
    onSearch(search);
  };

  const handleContactAdded = () => {
    setSearch('');
    setSearchResult(null);
  };

  return (
    <SidebarContainer>
      <h2>Cadastro de Contatos</h2>
      <ContactForm onContactAdded={handleContactAdded} />
      <h3>Pesquisar Contato</h3>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SearchInput
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={handleSearchChange}
      />
      <SearchButton onClick={handleSearchClick}>Pesquisar</SearchButton>
      {searchResult && (
        <SearchResult>
          <h4>Resultado da Pesquisa:</h4>
          <SearchResultItem><strong>Nome:</strong> {searchResult.name}</SearchResultItem>
          <SearchResultItem><strong>Email:</strong> {searchResult.email}</SearchResultItem>
          <SearchResultItem><strong>Telefone:</strong> {searchResult.phone}</SearchResultItem>
        </SearchResult>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
