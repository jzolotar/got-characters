import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBtn = styled(NavLink)`
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 95px;
  border-radius: 0.5rem;
  border: none;
  padding: 0.1rem 3.5rem;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  border: 2px solid #333;
  cursor: pointer;
  @media (max-width: 833px) {
    width: 320px;
    text-align: center;
    padding: 0.1rem 0;
  }
`;
