import React from 'react';
import CharacterList from './components/characterList/CharacterList';
import { useGetCharactersByDefaultQuery } from './redux/api';

function App() {
  const { data } = useGetCharactersByDefaultQuery();
  return (
    <div>
      <CharacterList />
    </div>
  );
}

export default App;
