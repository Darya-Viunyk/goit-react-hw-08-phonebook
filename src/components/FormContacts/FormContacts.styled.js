import styled from '@emotion/styled';
import { Form, Field } from 'formik';

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
  padding: 5px 15px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  background-color: #a4a1a1;
  color: #ffffff;
  border: none;
`;
export const Conteiner = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #dedada;
  padding: 10px 10px;
  border-radius: 5px;
`;
export const Inpyt = styled(Field)`
  padding: 10px 10px;
  width: auto;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  display: block;
`;
