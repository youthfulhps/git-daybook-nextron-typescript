import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type AvatarProps = {
  avatarUrl: string;
};

const StyledAvatar = styled(Image)`
  border-radius: 50%;
`;

function Avatar({ avatarUrl }: AvatarProps) {
  return <StyledAvatar src={avatarUrl} height={60} width={60} />;
}

export default Avatar;
