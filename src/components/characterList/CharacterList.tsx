import { GridTable } from '../../global/styledComponents/GridTable.styled';

import TableHeader from '../tableHeader/TableHeader';
import Character from '../character/Character';
import { useGetCharactersByDefaultQuery } from '../../redux/api';
import Loader from '../loader/Loader';
import Pagination from '../pagination/Pagination';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { useAppSelector } from '../../redux/hooks/hooks';
import { goToSelectedPage } from '../../redux/paginationInfo';
import { Wrapper } from '../../global/styledComponents/Wrapper.styled';

const CharacterList = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(
    (state) => state.paginationInfo.currentPage
  );

  const handlePagination = (updatedPage: number) => {
    dispatch(goToSelectedPage(updatedPage));
    window.scrollTo(0, 0);
  };

  const { data, isSuccess, isFetching, isLoading } =
    useGetCharactersByDefaultQuery(currentPage);

  const mergeNameAlliases = (name: string, arr: string[]) => {
    let newName = '';
    //display name + titles when there is name and titles avaialble
    if (name && arr[0]) {
      newName = [name, ...arr].join(', ');
    }

    //display name if there are no titles
    if (name && !arr[0]) {
      newName = name;
    }

    //display only title when there is no name

    if (!name) {
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
      {isSuccess && !isFetching ? content : <Loader />}
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
