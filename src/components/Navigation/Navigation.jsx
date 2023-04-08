import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/tasks/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <div>
      {isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}
      {!isLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
      {!isLoggedIn && <NavLink to={'/register'}>Register</NavLink>}
      {isLoggedIn && <UserMenu />}
    </div>
  );
}
