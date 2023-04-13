import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchContacts } from 'redux/tasks/phoneBook.operations';
import { filtredContactsSelector } from 'redux/tasks/selectors';
import React from 'react';
import FormContacts from 'components/FormContacts/FormContacts';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

function ContactsPage() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(filtredContactsSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Phone Book </h2>
        <FormContacts />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        {filteredContacts && <Contacts contacts={filteredContacts} />}
      </div>
      <Outlet />
    </>
  );
}
export default ContactsPage;
