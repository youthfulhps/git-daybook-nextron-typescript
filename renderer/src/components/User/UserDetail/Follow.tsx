import React from 'react';
import styled from 'styled-components';
import { TeamOutlined } from '@ant-design/icons';
import Spacer from '@components/common/Spacer';

type FollowProps = {
  followCounts: {
    followers: number;
    following: number;
  };
};

const StyledFollow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--color-700);
`;

function Follow({ followCounts }: FollowProps) {
  const { followers, following } = followCounts;

  return (
    <StyledFollow>
      <TeamOutlined />
      <Spacer width={4} />
      <span>{`followers ${followers} · following ${following}`}</span>
    </StyledFollow>
  );
}

export default Follow;
