import styled from 'styled-components';

export const StyledHouseDetails = styled.section`
  article {
    display: grid;
    grid-template-areas:
      'name name name'
      'region diedOut seats'
      'titles titles titles'
      'overlord words numOfCad';
  }
`;
