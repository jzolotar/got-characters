import { TableRow } from '../../global/styledComponents/TableRow.styled';

import { StyledCharacterInfo } from '../characterInfo/CharacterInfo.styled';

const TableHeader = () => {
  return (
    <TableRow>
      <StyledCharacterInfo dataAtr='Character'>Character</StyledCharacterInfo>
      <StyledCharacterInfo dataAtr='Alive'>Alive</StyledCharacterInfo>
      <StyledCharacterInfo dataAtr='Gender'>Gender</StyledCharacterInfo>
      <StyledCharacterInfo dataAtr='Culture'>Culture</StyledCharacterInfo>
      <StyledCharacterInfo dataAtr='Allegiances'>
        Allegiances
      </StyledCharacterInfo>
    </TableRow>
  );
};

export default TableHeader;
