import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
  body::-webkit-scrollbar {
  width: 1px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: white;        /* color of the tracking area */
}
body{
  padding: 0 !important;
}
`;

export default GlobalStyles;
