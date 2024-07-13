// src/App.tsx
import React, { useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import Sidebar from './components/Sidebar/Sidebar';
import GlobalStyle from './styles/globalStyles';
import { Container, Content, Title } from './styles/containerStyles';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar onSearch={setSearchQuery} />
        <Content>
          <Title>Lista de Contatos</Title>
          <ContactList searchQuery={searchQuery} />
        </Content>
      </Container>
    </>
  );
};

export default App;
