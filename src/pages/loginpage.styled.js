import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const NameLabel = styled.h3`
  color: #585757;
  display: block;
  margin: 5px 0;
`;
export const Button = styled.button`
  padding: 7px 30px;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  background-color: #a4a1a1;
  color: #ffffff;
  border: none;
  &:hover,
  &:focus {
    color: #a4a1a1;
    font-weight: bold;
    background-color: #ffffff;
  }
`;
export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  background: #dedada;
  padding: 10px 10px;
  border-radius: 5px;
`;
export const Inpyt = styled.input`
  padding: 10px 10px;
  width: auto;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  display: block;
`;
