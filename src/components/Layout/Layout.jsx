import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Header, Main } from './layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
