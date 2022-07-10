import React, { useContext } from 'react';
import styled from 'styled-components';
import { getTemplateAreaBySection } from '@assets/styles/utils';
import { SectionContext } from '@contexts/SectionContext';
import UserSection from '@components/user';
import Repo from '@components/Repo';
import SettingModal from '@components/common/Modal/SettingModal';
import { UserContext } from '@contexts/UserContext';

const StyledInnerLayout = styled.div<{ activeSection: string }>`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(5, 150px);
  grid-gap: 16px;

  ${({ activeSection }) => getTemplateAreaBySection(activeSection)};

  section {
    box-shadow: 20px 20px 60px #b6becc, -20px -20px 60px #f6ffff;
    border-radius: 16px;
  }

  .user {
    grid-area: user;
  }
  .repo {
    grid-area: repo;
  }
  .div3 {
    grid-area: div3;
  }
  .div4 {
    grid-area: div4;
  }
`;

function Home() {
  const sectionContext = useContext(SectionContext);
  const userContext = useContext(UserContext);

  return (
    <>
      <StyledInnerLayout activeSection={sectionContext.activeSection}>
        <section className="user">
          <UserSection />
        </section>
        <section className="repo">
          <Repo />
        </section>
        <div className="div3"></div>
        <div className="div4"></div>
      </StyledInnerLayout>
      <SettingModal visible={!userContext.userId} title={'아이디 입력'} />
    </>
  );
}

export default Home;
