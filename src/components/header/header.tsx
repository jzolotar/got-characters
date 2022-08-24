import styled from 'styled-components';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <StyledHeader>
      <div>
        <h1>{title}</h1>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #000;

  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: #f4f4f4;
    }
  }
`;

export default Header;
