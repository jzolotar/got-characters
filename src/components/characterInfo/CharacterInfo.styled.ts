import styled from 'styled-components';

interface Props {
  dataAtr: string;
}

export const StyledCharacterInfo = styled.div<Props>`
  padding: 1rem;
  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }

  @media (max-width: 800px) {
    text-align: center;
    padding: 0 0 1rem 0;
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 5;
      border-bottom: 1px solid #ddd;
    }
  }

  @media (max-width: 800px) {
    &:before {
      content: '${(props) => props.dataAtr}';
      font-weight: bold;
      display: block;
      background: rgba(193, 193, 193, 0.528);
      padding: 0.75rem;
      margin-bottom: 0.75rem;
      font-size: 1rem;
    }
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 5;
      border-bottom: 1px solid #ddd;
      &:before {
        border-radius: 0.5rem 0.5rem 0 0;
      }
    }
  }

  @media (max-width: 400px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;
