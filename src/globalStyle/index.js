import { createGlobalStyle, css } from 'styled-components';

export const theme = {
  backgroundDark: '#BFC9C5',
  backgroundLight: '#f5f5f5ff',
  colorDark: '#151217ff',
  colorButtons: '#D42D46',
  colorLight: '#f5f5f5ff',
  breakpointMobile: '700px',
};

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.backgroundLight};
    color: ${theme.colorDark};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`}
`;
