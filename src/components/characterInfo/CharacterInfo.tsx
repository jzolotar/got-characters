import { StyledCharacterInfo } from './CharacterInfo.styled';
import { NavLink } from 'react-router-dom';

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
          <ul>
            {props.allegiances.map((elem, index) =>
              elem === 'No Allegiances' ? (
                <li key={index}>{elem}</li>
              ) : (
                <li key={index}>
                  <NavLink to={`/got-characters/houses/${elem.slice(45)}`}>
                    Link
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </StyledCharacterInfo>
      );
  }
};

export default CharacterInfo;
