import { GridTable } from '../../global/styledComponents/GridTable.styled';

import TableHeader from '../tableHeader/TableHeader';
import Character from '../character/Character';
import { useGetCharactersByDefaultQuery } from '../../redux/api';

const CharacterList = () => {
  const { data, isSuccess, isFetching } = useGetCharactersByDefaultQuery();

  console.log(data);

  return (
    <GridTable>
      <TableHeader />
    </GridTable>
  );
};

export default CharacterList;
