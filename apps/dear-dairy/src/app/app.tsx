// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import AddNoteForm from '../components/AddNoteForm';

export function App() {
  return (
    <MantineProvider>
      <AddNoteForm />
    </MantineProvider>
  );

}

export default App;
