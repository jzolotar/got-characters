import styled from 'styled-components';

export const StyledLoader = styled.div`
  display: inline-block;
  font-size: 0px;
  padding: 0px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 50%;
  @media (max-width: 800px) {
    top: 30%;
  }

  span {
    vertical-align: middle;
    border-radius: 100%;

    display: inline-block;
    width: 1.1rem;
    height: 1.1rem;
    margin: 3px 2px;
    -webkit-animation: loader 0.8s linear infinite alternate;
    animation: loader 0.8s linear infinite alternate;
  }

  span:nth-child(1) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    background: rgba(255, 255, 255, 0.6);
  }

  span:nth-child(2) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
    background: rgba(255, 255, 255, 0.8);
  }
  span:nth-child(3) {
    -webkit-animation-delay: -0.26666s;
    animation-delay: -0.26666s;
    background: rgba(255, 255, 255, 1);
  }
  span:nth-child(4) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
    background: rgba(255, 255, 255, 0.8);
  }
  span:nth-child(5) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    background: rgba(255, 255, 255, 0.4);
  }

  @keyframes loader {
    from {
      transform: scale(0, 0);
    }
    to {
      transform: scale(1, 1);
    }
  }
  @-webkit-keyframes loader {
    from {
      -webkit-transform: scale(0, 0);
    }
    to {
      -webkit-transform: scale(1, 1);
    }
  }
`;
