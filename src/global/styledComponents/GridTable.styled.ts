import styled from 'styled-components';

export const GridTable = styled.section`
  display: grid;
  margin: 0 auto;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
  background: rgba(236, 232, 232, 0.98);
  border-radius: 0.5rem;
  gap: 0.25rem;

  @media (max-width: 800px) {
    margin-top: 3.75rem;
    grid-gap: 2rem;
    background: transparent;
    box-shadow: none;
    article:first-of-type {
      display: none;
    }
  }
`;
