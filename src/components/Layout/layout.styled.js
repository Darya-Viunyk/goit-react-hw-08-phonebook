import styled from 'styled-components';
export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #ffffff;
  background-color: rgb(172 229 152);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;

  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
