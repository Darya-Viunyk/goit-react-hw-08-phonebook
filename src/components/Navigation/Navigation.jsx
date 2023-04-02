// import { Item } from './navigation.staled';
import React from 'react';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/tasks/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <nav>
      <div>
        {isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}
        {isLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
        {isLoggedIn && <NavLink to={'/register'}>Register</NavLink>}
      </div>
      {isLoggedIn && <UserMenu />}
    </nav>
  );
};
