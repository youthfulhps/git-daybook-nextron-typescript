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

  .user-card__content {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 10;
    border-radius: 8px;
    backdrop-filter: blur(4px);
    filter: grayscale(10%);
    display: none;
    transition-duration: 0.5s;
  }

  &:hover {
    .user-card__content {
      display: block;
    }
  }
`;

function UserCard({ avatarUrl, onClick }: UserCardProps) {
  return (
    <StyledUserCard avatarUrl={avatarUrl} onClick={onClick}>
      <div className="user-card__content"></div>
    </StyledUserCard>
  );
}

export default UserCard;
