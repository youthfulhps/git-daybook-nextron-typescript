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
        font-family: 'Pretendard', -apple-system, sans-serif;
        font-size: 14px;
        background-color: #18181C;
        color: white;
        padding-top: 50px;
    }
`;

export default GlobalStyles;
