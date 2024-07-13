// src/styles/containerStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 320%;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 1200px;  /* Aumenta a largura máxima do container */
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;  /* Centraliza horizontalmente */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  color: #343a40;
  margin-bottom: 20px;
`;
