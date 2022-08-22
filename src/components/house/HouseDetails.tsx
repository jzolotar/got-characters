import styled from 'styled-components';
import { StyledHouseDetails } from './HouseDetails.styled';

interface Props {
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string;
  seats: string;
  overlord: string;
  diedOut: string;
  codeBranches: string;
}

interface StyledProps {
  dataAtr: string;
}

const HouseDetails = ({
  name,
  region,
  coatOfArms,
  words,
  titles,
  seats,
  overlord,
  diedOut,
  codeBranches,
}: Props) => {
  return (
    <StyledHouseDetails>
      <article>
        <StyledHouse dataAtr='Name'>{name}</StyledHouse>
        <StyledHouse dataAtr='Region'>{region}</StyledHouse>
        <StyledHouse dataAtr='Coat Of Arms'>"{coatOfArms}"</StyledHouse>
        <StyledHouse dataAtr='Words'>{words}</StyledHouse>
        <StyledHouse dataAtr='Titles'>{titles}</StyledHouse>
        <StyledHouse dataAtr='Seats'> {seats}</StyledHouse>
        <StyledHouse dataAtr='Overlord'>{overlord}</StyledHouse>
        <StyledHouse dataAtr='Died Out'> {diedOut}</StyledHouse>
        <StyledHouse dataAtr='Branches'>{codeBranches}</StyledHouse>
      </article>
    </StyledHouseDetails>
  );
};
export default HouseDetails;

const StyledHouse = styled.div<StyledProps>`
  &:before {
    content: '${(props) => props.dataAtr}';
    font-weight: bold;
    display: block;
    background: rgba(193, 193, 193, 0.528);
    /* background: linear-gradient(to right, #5b86e5, #36d1dc); */
    padding: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;
