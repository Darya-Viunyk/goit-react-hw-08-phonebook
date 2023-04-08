import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage';
import { ContactsPage } from 'components/ContactsPage/ContactsPage';
import { tokenSelector } from 'redux/tasks/selectors';
import { token } from 'redux/auth/authContacts.api';
import { authOperations } from 'redux/auth/auth.operetions';
import useEffectOne from 'hook/useEffectOne';

export const App = () => {
  const storeToken = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffectOne(() => {
    token.set(storeToken);
    storeToken && dispatch(authOperations.current());
  });

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute element={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute element={<RegisterPage />} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
