import { useSelector } from 'react-redux';

import { isLoggedInSelector } from 'redux/tasks/selectors';

export const NavButton = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return <button to={isLoggedIn ? '/contacts' : '/register'}>Start</button>;
};
