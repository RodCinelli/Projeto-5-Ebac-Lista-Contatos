import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export const ModalHeader = styled.h2`
  margin-top: 0;
  color: #343a40;
  text-align: center;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;
