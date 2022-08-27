import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header/header';
import House from '../components/house/House';
import Loader from '../components/loader/Loader';
import { useGetHouseDataQuery } from '../redux/api';
import styled from 'styled-components';

const HousePage = () => {
  let { id } = useParams();
  const { data, isSuccess } = useGetHouseDataQuery(id!);

  if (isSuccess) {
    console.log(data);
  }

  let content = (
    <>
      <Header title='House Page' />
      <StyledBtn to='/characters'>back to characters list </StyledBtn>
      {isSuccess ? (
        <House
          name={data.name}
          region={data.region}
          coatOfArms={data.coatOfArms}
          words={data.words}
          titles={data.titles}
          seats={data.seats}
          overlord={data.overlord}
          diedOut={data.diedOut}
          codeBranches={data.codeBranches}
        />
      ) : (
        <Loader />
      )}
    </>
  );
  return content;
};

export default HousePage;

const StyledBtn = styled(NavLink)`
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 95px;
  border-radius: 0.5rem;
  border: none;
  padding: 0.1rem 3.5rem;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  border: 2px solid #333;
  cursor: pointer;
  @media (max-width: 833px) {
    width: 320px;
    text-align: center;
    padding: 0.1rem 0;
  }
`;
