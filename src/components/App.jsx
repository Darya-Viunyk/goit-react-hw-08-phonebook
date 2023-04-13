import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import { tokenSelector } from 'redux/tasks/selectors';
import { token } from 'redux/auth/authContacts.api';
import { authOperations } from 'redux/auth/auth.operetions';
import useEffectOne from 'hook/useEffectOne';
import { Layout } from 'components/Layout/Layout';
import './styles.css';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('components/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const storeToken = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffectOne(() => {
    token.set(storeToken);
    storeToken && dispatch(authOperations.current());
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
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
        </Route>
      </Routes>
    </Suspense>
  );
};
