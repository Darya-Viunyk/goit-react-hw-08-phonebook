import { Routes, Route } from 'react-router-dom';
import { fetchContacts } from 'redux/tasks/phoneBook.operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage';
import { ContactsPage } from 'components/ContactsPage/ContactsPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
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
  );
};
