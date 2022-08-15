import { GridTable } from '../../global/styledComponents/GridTable.styled';

import TableHeader from '../tableHeader/TableHeader';
import Character from '../character/Character';
import { useGetCharactersByDefaultQuery } from '../../redux/api';
import Loader from '../loader/Loader';

const CharacterList = () => {
  const { data, isSuccess, isFetching } = useGetCharactersByDefaultQuery();

  const mergeNameAlliases = () => {};

  const checkAlive = () => {};

  const checkCulture = () => {};

  let content;

  if (isSuccess) {
    console.log(data.characters);
    content = (
      <GridTable>
        <TableHeader />
        {data!.characters.map((elem, index) => (
          <Character
            key={index}
            characterData={{ name: elem.name, dataAtr: 'Character' }}
            aliveData={{ alive: elem.died, dataAtr: 'Alive' }}
            genderData={{ gender: elem.gender, dataAtr: 'Gender' }}
            cultureData={{ culture: elem.culture, dataAtr: 'Culture' }}
            allegiancesData={{
              allegiances: elem.allegiances,
              dataAtr: 'Allegiances',
            }}
          />
        ))}
      </GridTable>
    );
  }

  return <>{isSuccess && !isFetching ? content : <Loader />}</>;
};

export default CharacterList;
