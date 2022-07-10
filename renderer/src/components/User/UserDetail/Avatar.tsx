import React from 'react';
import styled from 'styled-components';

type AvatarProps = {
  avatarUrl: string;
};

const StyledAvatar = styled.img`
  border-radius: 50%;
`;

function Avatar({ avatarUrl }: AvatarProps) {
  return <StyledAvatar src={avatarUrl} height={60} width={60} />;
}

export default Avatar;
