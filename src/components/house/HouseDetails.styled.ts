import styled from 'styled-components';

export const StyledHouseDetails = styled.section`
  border-radius: 0.5rem;
  padding: 1.2rem 2rem;
  backdrop-filter: grayscale(0.05);
  border: 3px solid rgba(193, 193, 193, 0.9);
  width: 100%;
  max-width: 950px;
  margin: 0 auto;

  article {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;

    @media (min-width: 820px) {
      grid-gap: 2rem;
      grid-template-areas:
        'name name name name '
        'region arms arms  arms'
        'words words overlord overlord '
        'titles titles titles died'
        'branches seats seats seats';
      grid-template-columns: repeat(4, 1fr);
    }
  }

  div {
    padding: 1rem;
    text-align: center;
    padding: 0 0 1rem 0;
    border-radius: 0.5rem;

    background-color: #f4f4f4;

    /* &:before {
      content: 'Test';
      font-weight: bold;
      display: block;
      background: rgba(193, 193, 193, 0.528); */
    /* background: linear-gradient(to right, #5b86e5, #36d1dc); */
    /* padding: 0.75rem;
      margin-bottom: 0.75rem;
      font-size: 1rem;
      border-radius: 0.5rem 0.5rem 0 0; */
    /* } */

    &:first-child {
      @media (min-width: 820px) {
        grid-area: name;
      }
    }

    &:nth-child(2) {
      @media (min-width: 820px) {
        grid-area: region;
      }
    }
    &:nth-child(3) {
      @media (min-width: 820px) {
        grid-area: arms;
      }
    }
    &:nth-child(4) {
      @media (min-width: 820px) {
        grid-area: words;
      }
    }
    &:nth-child(5) {
      @media (min-width: 820px) {
        grid-area: titles;
      }
    }
    &:nth-child(6) {
      @media (min-width: 820px) {
        grid-area: seats;
      }
    }
    &:nth-child(7) {
      @media (min-width: 820px) {
        grid-area: overlord;
      }
    }

    &:nth-child(8) {
      @media (min-width: 820px) {
        grid-area: died;
      }
    }

    &:last-child {
      @media (min-width: 820px) {
        grid-area: branches;
      }
    }
  }
`;
