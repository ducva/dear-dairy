// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@mantine/core/styles.css';

import { Button, MantineProvider } from '@mantine/core';
import AddNoteForm from '../components/AddNoteForm';
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';

export function App() {
  const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const handleClick = async () => {
    await loginWithRedirect();
  }
  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then(token => {
        console.log(token)
      })
    }


  }, [user, isAuthenticated])
  return (
    <MantineProvider>
      <AddNoteForm />
      <Button onClick={handleClick}>Login</Button>
      {!!user && (<div>{JSON.stringify(user)}</div>)}
    </MantineProvider>
  );

}

export default App;
