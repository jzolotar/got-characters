import { TableRow } from '../../global/styledComponents/TableRow.styled';

import { StyledCharacterInfo } from '../characterInfo/CharacterInfo.styled';

const TableHeader = () => {
  return (
    <TableRow>
      <StyledCharacterInfo>Character</StyledCharacterInfo>
      <StyledCharacterInfo>Alive</StyledCharacterInfo>
      <StyledCharacterInfo>Gender</StyledCharacterInfo>
      <StyledCharacterInfo>Culture</StyledCharacterInfo>
      <StyledCharacterInfo>Allegiances</StyledCharacterInfo>
    </TableRow>
  );
};

export default TableHeader;
