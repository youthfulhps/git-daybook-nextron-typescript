import React from 'react';
import styled from 'styled-components';

type UserCardProps = {
  avatarUrl: string;
  onClick: () => void;
};

const StyledUserCard = styled.div<{ avatarUrl: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ avatarUrl }) => avatarUrl && `url(${avatarUrl})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  opacity: 0.8;
  transition-duration: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

function UserCard({ avatarUrl, onClick }: UserCardProps) {
  return <StyledUserCard avatarUrl={avatarUrl} onClick={onClick} />;
}

export default UserCard;
