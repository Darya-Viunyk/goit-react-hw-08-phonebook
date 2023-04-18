import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  padding: 7px 30px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  background-color: #a4a1a1;
  color: #ffffff;
  border: none;
  text-decoration: none;
  list-style: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);

  &.active {
    color: rgb(46 147 8);
    font-weight: bold;
    background-color: #fff;
  }
  &:hover,
  &:focus {
    color: #a4a1a1;
    font-weight: bold;
    background-color: #ffffff;
  }
`;
export const List = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  gap: 20px;
`;
