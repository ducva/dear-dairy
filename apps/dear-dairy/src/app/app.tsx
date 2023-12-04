// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Routes, Route } from "react-router-dom"
import { HomePage, Layout, MasterPage } from '../pages';

export function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<HomePage />} />
          <Route path="master" element={<MasterPage />} />
        </Route>
      </Routes>
    </MantineProvider>
  );

}

export default App;
