import { TableRow } from '../../global/styledComponents/TableRow.styled';
import CharacterInfo from '../characterInfo/CharacterInfo';

interface Props {
  characterData: { name: string; dataAtr: 'Character' };
  aliveData: { alive: string; dataAtr: 'Alive' };
  genderData: { gender: string; dataAtr: 'Gender' };
  cultureData: { culture: string; dataAtr: 'Culture' };
  allegiancesData: { allegiances: string; dataAtr: 'Allegiances' };
}

const Character = ({
  characterData,
  aliveData,
  genderData,
  cultureData,
  allegiancesData,
}: Props) => {
  return (
    <TableRow>
      <CharacterInfo />
      <CharacterInfo />
      <CharacterInfo />
      <CharacterInfo />
      <CharacterInfo />
    </TableRow>
  );
};

export default Character;
