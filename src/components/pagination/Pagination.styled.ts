import styled from 'styled-components';

export const StyledPagination = styled.section`
  display: grid;
  place-items: center;
  padding: 1.5rem 0;

  div {
    display: grid;
    grid-template-columns: repeat(9, 1fr);

    span {
      text-align: center;
      font-weight: 600;
    }
    button {
      cursor: pointer;
      background: transparent;
      border: none;
      height: 2rem;
      width: 2rem;
      margin: 0 0.25rem;
      border-radius: 50%;
      font-weight: 600;
      &.side-button {
        background-color: #f4f4f4;
        box-shadow: transparent 0px 0px 0px 5px, transparent 0px 0px 0px 4px,
          rgba(0, 0, 0, 0.85) 0px 2px 4px;
      }
      &.active {
        background-color: #f4f4f4;
        box-shadow: transparent 0px 0px 0px 5px, transparent 0px 0px 0px 4px,
          rgba(0, 0, 0, 0.85) 0px 2px 4px;
      }
    }
  }
`;
