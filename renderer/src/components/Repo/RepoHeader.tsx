import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import useRepoList from '@hooks/Repos/useRepoList';
import Dropdown from '@components/Common/Dropdown';

const StyledRepoHeader = styled.div`
  padding: 16px 0;
  font-size: var(--size-4);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    font-size: var(--size-400);
    font-weight: var(--weight-700);
    color: var(--color-700);
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function RepoHeader({ mutateSort }: { mutateSort: any }) {
  const { sortBy } = useRepoList();
  const selectableSortBy = (
    <Menu>
      {sortBy.map((sort, index) => (
        <Menu.Item onClick={() => mutateSort(sort)} key={index.toString()}>
          {sort}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <StyledRepoHeader>
      <div className={'left'}>My Repos</div>
      <div className={'right'}>
        <Dropdown overlay={selectableSortBy}>sort</Dropdown>
      </div>
    </StyledRepoHeader>
  );
}

export default RepoHeader;
