import styled from 'styled-components';

export const StyledHouseDetails = styled.section`
  border-radius: 0.5rem;
  padding: 1.2rem 2rem;
  backdrop-filter: grayscale(0.05);
  border: 3px solid rgba(193, 193, 193, 0.9);
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  margin-top: 5.5rem;
  @media (max-width: 820px) {
    margin-top: 7rem;
  }

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
