import React from 'react';
import styled from 'styled-components';
import useRepoList from '@hooks/Repos/useRepoList';
import Skeleton from '@components/Common/Skeleton';
import RepoItem from '@components/Repo/RepoItem';

const StyledRepo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 16px;
  background-color: var(--color-100);
  color: var(--color-600);
  overflow-x: hidden;
  overflow-y: scroll;
`;

function Repo() {
  const { data, error, isValidating, mutate, mutateSort } = useRepoList();

  if (!data) return <Skeleton width={616} height={316} />;

  return (
    <StyledRepo>
      {data.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </StyledRepo>
  );
}

export default Repo;
