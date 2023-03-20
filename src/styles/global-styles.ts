import { createGlobalStyle } from 'styled-components';
import { typography } from './typography';

export const GlobalStyles = createGlobalStyle`

  html,
  body,
  #root,
  .app,
  .content {
    height: 100%;
    width: 100%;
    font-family: "Source Sans Pro", sans-serif;
    margin: 0;

  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    $:hover {
      opacity: .6;
    }
  }

  body {
    font-size: ${typography.fontSize.medium};
    background: white;
  }
  [data-theme="dark"] {
    body {
      background: blue;

    }
  }

  h1 {
    font-size: ${typography.h1.fontSize};
    font-family: ${typography.h1.fontFamily};
  }

  h2 {
    font-size: ${typography.h2.fontSize};
    font-family: ${typography.h2.fontFamily};
  }

  h3 {
    font-size: ${typography.h3.fontSize};
    font-family: ${typography.h3.fontFamily};
  }

  h4 {
    font-size: ${typography.h4.fontSize};
    font-family: ${typography.h4.fontFamily};
  }

  h5 {
    font-size: ${typography.h5.fontSize};
    font-family: ${typography.h5.fontFamily};
  }

  h6 {
    font-size: ${typography.h6.fontSize};
    font-family: ${typography.h6.fontFamily};
  }


  .app {
    display: flex;
    position: relative;
  }

  .content-page {
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
