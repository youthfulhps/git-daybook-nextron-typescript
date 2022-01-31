import React, { useContext } from 'react';
import styled from 'styled-components';
import { getTemplateAreaBySection } from '@assets/styles/utils';
import { SectionContext } from '@contexts/SectionContext';
import UserSection from '@components/User';

const StyledInnerLayout = styled.div<{ activeSection: string }>`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(5, 150px);
  grid-gap: 16px;

  ${({ activeSection }) => getTemplateAreaBySection(activeSection)};

  .user {
    grid-area: user;
    /* border: 2px solid white; */
  }
  .div2 {
    grid-area: div2;
    /* border: 2px solid white; */
  }
  .div3 {
    grid-area: div3;
    /* border: 2px solid white; */
  }
  .div4 {
    grid-area: div4;
    /* border: 2px solid white; */
  }
`;

function Home() {
  const sectionContext = useContext(SectionContext);

  return (
    <StyledInnerLayout activeSection={sectionContext.activeSection}>
      <div className="user">
        <UserSection />
      </div>
      <div className="div2"></div>
      <div className="div3"></div>
      <div className="div4"></div>
    </StyledInnerLayout>
  );
}

export default Home;
