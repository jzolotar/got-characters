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
    let mergedData: string;

    if (arr.length === 1 && !arr[0]) {
      return 'No data';
    }

    mergedData = arr.join(', ');
    return mergedData;
  };

  const countBranches = (arr: string[]) => {
    let numOfBranches = 0;

    return numOfBranches.toString();
  };

  const checkIfUnknow = (data: string) => {
    return data ? data : 'No data';
  };

  return (
    <HouseDetails
      name={name}
      region={region}
      coatOfArms={coatOfArms}
      words={checkIfUnknow(words)}
      titles={mergArrData(titles)}
      seats={mergArrData(seats)}
      overlord={overlord ? 'Yes' : 'No'}
      diedOut={diedOut ? 'Yes' : 'No'}
      codeBranches={countBranches(codeBranches)}
    />
  );
};

export default House;
