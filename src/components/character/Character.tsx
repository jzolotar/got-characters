import { TableRow } from '../../global/styledComponents/TableRow.styled';
import CharacterInfo from '../characterInfo/CharacterInfo';

interface Props {
  characterData: { name: string; dataAtr: 'Character' };
  aliveData: { alive: string; dataAtr: 'Alive' };
  genderData: { gender: string; dataAtr: 'Gender' };
  cultureData: { culture: string; dataAtr: 'Culture' };
  allegiancesData: { allegiances: string[]; dataAtr: 'Allegiances' };
}

const Character = ({
  characterData,
  aliveData,
  genderData,
  cultureData,
  allegiancesData,
}: Props) => {
  console.log(typeof allegiancesData.allegiances);
  return (
    <TableRow>
      <CharacterInfo
        dataAtr={characterData.dataAtr}
        name={characterData.name}
      />
      <CharacterInfo dataAtr={aliveData.dataAtr} alive={aliveData.alive} />
      <CharacterInfo dataAtr={genderData.dataAtr} gender={genderData.gender} />
      <CharacterInfo
        dataAtr={cultureData.dataAtr}
        culture={cultureData.culture}
      />
      <CharacterInfo
        dataAtr={allegiancesData.dataAtr}
        allegiances={allegiancesData.allegiances}
      />
    </TableRow>
  );
};

export default Character;
