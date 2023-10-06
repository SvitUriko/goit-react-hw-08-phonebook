import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { Phonebook } from 'components/Phonebook/Phonebook';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>

      <div>{isLoading && 'Request in progress...'}</div>
      <Phonebook />
    </>
  );
}
