import { GridTable } from '../../global/styledComponents/GridTable.styled';

import TableHeader from '../tableHeader/TableHeader';
import Character from '../character/Character';

const CharacterList = () => {
  return (
    <GridTable>
      <TableHeader />
      <Character />
      <Character />
      <Character />
      <Character />
      <Character />
    </GridTable>
  );
};

export default CharacterList;
