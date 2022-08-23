import { GridTable } from '../../global/styledComponents/GridTable.styled';

import TableHeader from '../tableHeader/TableHeader';
import Character from '../character/Character';
import { useGetCharactersByDefaultQuery } from '../../redux/api';
import Loader from '../loader/Loader';
import { useState } from 'react';
import Pagination from '../pagination/Pagination';

import styled from 'styled-components';

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (updatedPage: number) => setCurrentPage(updatedPage);

  const { data, isSuccess, isFetching, isLoading } =
    useGetCharactersByDefaultQuery(currentPage);

  const mergeNameAlliases = (name: string, arr: string[]) => {
    let newName = name + ', ' + arr.join(', ');
    if (name.length === 0) {
      newName = arr.join(', ');
    }
    return newName;
  };

  const checkAlive = (born: string, died: string) => {
    let alive = '';

    if (!born && !died) {
      alive = 'Unknown';
    } else if (!died) {
      alive = 'Yes';
    } else {
      alive = 'No';
    }

    return alive;
  };

  const checkCulture = (culture: string) => {
    let cultureInfo = 'Uknown';
    if (culture) {
      cultureInfo = culture;
    }

    return cultureInfo;
  };

  const checkAllegiances = (allegiances: string[]) => {
    let newAllegiances: string[] = [];
    if (allegiances.length === 0) {
      newAllegiances.push('No Allegiances');
    } else {
      newAllegiances = allegiances;
    }

    return newAllegiances;
  };

  let content;

  if (isSuccess) {
    console.log(data.characters);
    content = (
      <>
        <GridTable>
          <TableHeader />
          {data!.characters.map((elem, index) => (
            <Character
              key={index}
              characterData={{
                name: mergeNameAlliases(elem.name, elem.aliases),
                dataAtr: 'Character',
              }}
              aliveData={{
                alive: checkAlive(elem.born, elem.died),
                dataAtr: 'Alive',
              }}
              genderData={{ gender: elem.gender, dataAtr: 'Gender' }}
              cultureData={{
                culture: checkCulture(elem.culture),
                dataAtr: 'Culture',
              }}
              allegiancesData={{
                allegiances: checkAllegiances(elem.allegiances),
                dataAtr: 'Allegiances',
              }}
            />
          ))}
        </GridTable>
      </>
    );
  }

  return (
    <Wrapper>
      {isSuccess && !isFetching ? content : <Loader />}{' '}
      {!isLoading && (
        <Pagination
          currentPage={currentPage}
          totalPages={Number(data!.pageInfo.last.page)}
          handlePagination={handlePagination}
        />
      )}
    </Wrapper>
  );
};

export default CharacterList;

const Wrapper = styled.div`
  height: 1200px;
  @media (max-width: 800px) {
    height: unset;
  }
`;
