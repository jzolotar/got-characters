import styled from 'styled-components';

export const StyledHouseDetails = styled.section`
  background-color: #efefef;
  border-radius: 0.5rem;

  article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  div {
    padding: 1rem;

    text-align: center;
    padding: 0 0 1rem 0;
    &:first-child {
      border-bottom: 1px solid #ddd;
      grid-column-start: 1;
      grid-column-end: 4;
    }
    &:nth-child(5) {
      grid-column-start: 1;
      grid-column-end: 4;
    }
    &:last-child {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    &:before {
      content: 'Test';
      font-weight: bold;
      display: block;
      background: rgba(193, 193, 193, 0.528);
      padding: 0.75rem;
      margin-bottom: 0.75rem;
      font-size: 1rem;
    }
    &:first-child {
      &:before {
        border-radius: 0.5rem 0.5rem 0 0;
      }
    }
  }
`;
