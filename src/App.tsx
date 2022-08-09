import React from 'react';
import CharacterList from './components/characterList/CharacterList';
import { useGetCharactersByDefaultQuery } from './redux/api';

function App() {
  const { data, isSuccess, isFetching } = useGetCharactersByDefaultQuery();

  console.log('isFetching: ' + isFetching);
  console.log('isSucces: ' + isSuccess);

  if (isSuccess) {
    console.log(data);
  }

  return (
    <div>
      <CharacterList />
    </div>
  );
}

export default App;
