import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HousePage from './pages/HousePage';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/characters' />} />
      <Route path='/characters/' element={<CharacterPage />} />
      <Route path='/houses/:id' element={<HousePage />} />
    </Routes>
  );
}

export default App;
