import HouseDetails from './HouseDetails';

interface Props {
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: string[];
  seats: string[];
  overlord: string;
  diedOut: string;
  codeBranches: string[];
}

const House = ({
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
  const mergArrData = (arr: string[]) => {
    let mergedData: string = '';
    return mergedData;
  };

  const countBranches = (arr: string[]) => {
    let numOfBranches = 0;

    return numOfBranches.toString();
  };

  return (
    <HouseDetails
      name={name}
      region={region}
      coatOfArms={coatOfArms}
      words={words}
      titles={mergArrData(titles)}
      seats={mergArrData(seats)}
      overlord={overlord ? 'Yes' : 'No'}
      diedOut={diedOut ? 'Yes' : 'No'}
      codeBranches={countBranches(codeBranches)}
    />
  );
};

export default House;
