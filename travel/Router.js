import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Main />} />
        <Route path='/pageA' element={<PageA />} />
        <Route path='/pageB' element={<PageB />} />
        <Route path='/pageC' element={<PageC />} />
      </Route>
    </Routes>
  );
}
export default App;