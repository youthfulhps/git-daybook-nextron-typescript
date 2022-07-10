import { css } from 'styled-components';

export const getTemplateAreaBySection = (activeSection: string) => {
  return css`
    grid-template-areas:
      'user-profile user-log user-log'
      'user-profile user-log user-log'
      '. . .'
      '. div4 div4'
      'div3 div4 div4';
  `;

  // switch (activeSection) {
  //   case 'user':
  //     return css`
  //       grid-template-areas:
  //         'user repo repo'
  //         'user repo repo'
  //         'user . .'
  //         'user div4 div4'
  //         'div3 div4 div4';
  //     `;
  //   case 'repo':
  //     return css`
  //       grid-template-areas:
  //         'user repo repo'
  //         'user repo repo'
  //         'div3 repo repo'
  //         'div3 repo repo'
  //         'div3 div4 div4';
  //     `;
  //   default:
  //     return css`
  //       grid-template-areas:
  //         'user repo repo'
  //         'user repo repo'
  //         'div3 div4 div4'
  //         'div3 div4 div4'
  //         'div3 div4 div4';
  //     `;
  // }
};
