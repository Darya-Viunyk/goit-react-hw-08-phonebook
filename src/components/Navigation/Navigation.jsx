import { Item, List } from './navigation.staled';

import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/tasks/selectors';

function Navigation() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <nav>
      <List>
        {isLoggedIn && <Item to={'/contacts'}>Contacts</Item>}
        {!isLoggedIn && <Item to={'/login'}>Login</Item>}
        {!isLoggedIn && <Item to={'/register'}>Register</Item>}
        {isLoggedIn && <UserMenu />}
      </List>
    </nav>
  );
}
export default Navigation;
