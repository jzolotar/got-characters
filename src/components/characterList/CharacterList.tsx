import { GridTable } from '../../global/styledComponents/GridTable.styled';

import TableHeader from '../tableHeader/TableHeader';
import Character from '../character/Character';
import { useGetCharactersByDefaultQuery } from '../../redux/api';
import Loader from '../loader/Loader';

const CharacterList = () => {
  const { data, isSuccess, isFetching } = useGetCharactersByDefaultQuery();

  console.log(data);

  const content = (
    <GridTable>
      <TableHeader />
    </GridTable>
  );

  return isSuccess && !isFetching ? content : <Loader />;
};

export default CharacterList;
