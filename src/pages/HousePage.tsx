import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header/header';
import House from '../components/house/House';
import Loader from '../components/loader/Loader';
import { useGetHouseDataQuery } from '../redux/api';

const HousePage = () => {
  let { id } = useParams();
  const { data, isSuccess } = useGetHouseDataQuery(id!);

  if (isSuccess) {
    console.log(data);
  }

  let content = (
    <>
      <Header title='House Page' />
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
