import React from 'react';
import styled from 'styled-components';
import RepoItem from '@components/Repo/RepoList/RepoItem';

type RepoListProps = {
  repos: any;
};

const StyledRepoList = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

function Index({ repos }: RepoListProps) {
  return (
    <StyledRepoList>
      {repos.map((repo) => (
        <RepoItem repo={repo} />
      ))}
    </StyledRepoList>
  );
}

export default Index;