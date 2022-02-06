import React from 'react';
import styled from 'styled-components';

type RepoItemProps = {
  repo: any;
};

const StyledRepoItem = styled.div`
  background-color: var(--color-100);
  padding: var(--size-400) 0;
  color: var(--color-600);
  //border-top: 1px solid var(--color-200);
  cursor: pointer;

  .repo__title--highlight {
    font-weight: var(--weight-700);
    margin-bottom: var(--size-200);
  }

  .repo__description--blur {
    color: var(--color-500);
    font-size: 10px;
  }

  :not(:first-child) {
    border-top: 1px solid var(--color-200);
  }

  &:hover {
    color: var(--color-800);
  }
`;

function RepoItem({ repo }: RepoItemProps) {
  return (
    <StyledRepoItem>
      <div className="repo__title--highlight">{repo.name}</div>
      <div className="repo__description--blur">{repo.description}</div>
    </StyledRepoItem>
  );
}

export default RepoItem;
