import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


*, *::before, *::after {
  box-sizing: border-box;
  
}
* {
  margin: 0;
  
}
html, body {
  min-height: 100vh;
  overscroll-behavior: none;
  
  
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(to right, #5B86E5, #36D1DC);
  padding: 5vw 10%;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  @media (max-width:800px){
    justify-content: center
  };
  gap: 0.25rem;
}
#root, #__next {
  isolation: isolate;
}


`;
