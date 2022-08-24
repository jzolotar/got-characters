import CharacterList from '../components/characterList/CharacterList';
import Header from '../components/header/header';
const CharacterPage = () => {
  return (
    <>
      <Header title={'Characters Page'} />
      <CharacterList />
    </>
  );
};

export default CharacterPage;
