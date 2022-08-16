import { StyledCharacterInfo } from './CharacterInfo.styled';

type characterData = {
  name: string;
  dataAtr: 'Character';
};
type aliveData = {
  alive: string;
  dataAtr: 'Alive';
};
type genderData = {
  gender: string;
  dataAtr: 'Gender';
};
type cultureData = {
  culture: string;
  dataAtr: 'Culture';
};
type allegiancesData = {
  allegiances: string[];
  dataAtr: 'Allegiances';
};

type mixedType =
  | characterData
  | aliveData
  | genderData
  | cultureData
  | allegiancesData;

const CharacterInfo = (props: mixedType) => {
  switch (props.dataAtr) {
    case 'Character':
      return (
        <StyledCharacterInfo dataAtr={props.dataAtr}>
          {props.name}
        </StyledCharacterInfo>
      );
    case 'Alive':
      return (
        <StyledCharacterInfo dataAtr={props.dataAtr}>
          {props.alive}
        </StyledCharacterInfo>
      );
    case 'Gender':
      return (
        <StyledCharacterInfo dataAtr={props.dataAtr}>
          {props.gender}
        </StyledCharacterInfo>
      );
    case 'Culture':
      return (
        <StyledCharacterInfo dataAtr={props.dataAtr}>
          {props.culture}
        </StyledCharacterInfo>
      );
    case 'Allegiances':
      return (
        <StyledCharacterInfo dataAtr={props.dataAtr}>
          {props.allegiances.map((elem, index) =>
            elem === 'No Allegiances' ? (
              <p>{elem}</p>
            ) : (
              <a target='_blank' key={index} href={elem}>
                Link
              </a>
            )
          )}
        </StyledCharacterInfo>
      );
  }
};

export default CharacterInfo;
