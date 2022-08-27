import { StyledPagination } from './Pagination.styled';

interface Props {
  currentPage: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, handlePagination }: Props) => {
  const DOTS = '...';

  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationMagic = (
    currentPage: number,
    totalPages: number,
    siblingCount: number = 1
  ) => {
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
     Case 1:
     If the number of pages is less than the page numbers we want to show in our
     paginationComponent, we return the range [1..totalPageCount]
   */
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    /*
       Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
   */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    /*
     We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
   */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    /*
       Case 2: No left dots to show, but rights dots to be shown
   */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    /*
       Case 3: No right dots to show, but left dots to be shown
   */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
       Case 4: Both left and right dots to be shown
   */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  };

  const paginationRange = paginationMagic(currentPage, totalPages);

  return (
    <StyledPagination>
      <div>
        <button
          onClick={() => handlePagination(currentPage - 1)}
          type='button'
          className='side-button'
          disabled={currentPage === 1}
          key='start'
        >
          &lt;
        </button>
        <>
          {paginationRange!.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return <span key={index}>...</span>;
            }
            return (
              <button
                key={index}
                onClick={() => handlePagination(Number(pageNumber))}
                type='button'
                className={pageNumber === currentPage ? 'active' : ''}
              >
                {pageNumber}
              </button>
            );
          })}
        </>

        <button
          onClick={() => handlePagination(currentPage + 1)}
          type='button'
          className='side-button'
          disabled={currentPage === totalPages}
          key='end'
        >
          &gt;
        </button>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
