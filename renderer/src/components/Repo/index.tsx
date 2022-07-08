import React, { useContext } from 'react';
import styled from 'styled-components';
import useRepoList from '@hooks/repo/useRepoList';
import Skeleton from '@components/common/Skeleton';
import RepoList from './RepoList';
import RepoHeader from './RepoHeader';
import useActiveSection from '@hooks/common/useActiveSection';
import { UserContext } from '@contexts/UserContext';

const StyledRepoSection = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 16px;
  background-color: var(--color-100);
  color: var(--color-600);
  overflow: hidden;
`;

function Repo() {
  const { userId } = useContext(UserContext);
  const { data: repos, mutateSort } = useRepoList(userId);
  const { activateSection } = useActiveSection('repo');

  if (!repos) return <Skeleton width={616} height={316} />;

  return (
    <StyledRepoSection>
      <RepoHeader mutateSort={mutateSort} />
      <RepoList repos={repos} activateSection={activateSection} />
    </StyledRepoSection>
  );
}

export default Repo;
