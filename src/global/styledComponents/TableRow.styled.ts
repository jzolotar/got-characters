import styled from 'styled-components';

export const TableRow = styled.article`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
    background: rgba(193, 193, 193, 0.528);
    font-weight: bold;
    text-shadow: 0 2px 1px #fff;
  }
`;
