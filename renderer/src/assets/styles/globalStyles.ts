import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 

    ${reset}
  
    html, body, #root {
    height: 100%;
    position: relative;
    touch-action: manipulation;
    overscroll-behavior-x: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    margin: 0;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{    
        box-sizing: border-box;
    }
    body {
        font-family: 'IBM Plex Sans KR', -apple-system, sans-serif;
        font-size: 14px;
        background-color: var(--color-900);
        color: var(--color-800);
        padding-top: 50px;

        --color-100: #f1f3f8;
        --color-200: #d6e0f0;
        --color-300: #b1bbd4;
        --color-400: #99a2be;
        --color-500: #8790ab;
        --color-600: #767c93;
        --color-700: #393b44;
        --color-800: #24252b;
        --color-900: #17181c;
        --color-commit-row: #9be9a8;
        --color-commit-middle: #40c463;
        --color-commit-high: #216e39;

        --size-100: 2px;
        --size-200: 4px;
        --size-300: 8px;
        --size-400: 16px;
        --size-500: 32px;
        --size-600: 64px;
        --size-700: 128px;

        --weight-400: 400;
        --weight-700: 700;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyles;
