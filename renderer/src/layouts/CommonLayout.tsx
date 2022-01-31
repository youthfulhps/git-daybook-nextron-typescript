import React from 'react';
import styled from 'styled-components';

const StyledCommonLayout = styled.div`
  width: 100%;
  max-width: 932px;
  margin: 0 auto;

  @media (max-width: 924px) {
    width: 100%;
  }
`;

interface CommonLayoutProps {
  children: React.ReactNode;
}

function CommonLayout({ children }: CommonLayoutProps) {
  return <StyledCommonLayout>{children}</StyledCommonLayout>;
}

export default CommonLayout;
