import { TableRow } from '../../global/styledComponents/TableRow.styled';

import { GridTable } from '../../global/styledComponents/GridTable.styled';

import CharacterInfo from '../characterInfo/CharacterInfo';
import TableHeader from '../tableHeader/TableHeader';

const CharacterList = () => {
  return (
    <GridTable>
      <TableHeader />
      <TableRow>
        <CharacterInfo />
        <CharacterInfo />
        <CharacterInfo />
        <CharacterInfo />
        <CharacterInfo />
      </TableRow>
    </GridTable>
  );
};

export default CharacterList;
