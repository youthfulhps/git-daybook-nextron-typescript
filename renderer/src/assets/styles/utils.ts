import { css } from 'styled-components';

export const getTemplateAreaBySection = (activeSection: string) => {
  switch (activeSection) {
    case 'user':
      return css`
        grid-template-areas:
          'user div2 div2'
          'user div2 div2'
          'user div2 div2'
          'user div4 div4'
          'div3 div4 div4';
      `;
    default:
      return css`
        grid-template-areas:
          'user div2 div2'
          'user div2 div2'
          'div3 div4 div4'
          'div3 div4 div4'
          'div3 div4 div4';
      `;
  }
};
