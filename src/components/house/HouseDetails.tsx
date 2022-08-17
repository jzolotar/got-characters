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
        <div>{name}</div>
        <div>Region: {region}</div>
        <div>Coat Of Arms: {coatOfArms}</div>
        <div>Words: {words}</div>
        <div>Titles: {titles}</div>
        <div>Seats: {seats}</div>
        <div>Has Overlord: {overlord}</div>
        <div>Died Out: {diedOut}</div>
        <div>Num of Branches: {codeBranches}</div>
      </article>
    </StyledHouseDetails>
  );
};
export default HouseDetails;
