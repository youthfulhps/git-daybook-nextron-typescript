import React from 'react';
import styled from 'styled-components';
import Spacer from '@components/Common/Spacer';
import Avatar from './Avatar';
import Links from './Links';

type UserDetailProps = {
  user: any;
};

const StyledUserDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 11px 11px 17px #161619, -11px -11px 17px #1a1a1f;
`;

function UserDetail({ user }: UserDetailProps) {
  const { html_url: github, blog, location, company, avatar_url: avatarUrl } = user;
  const links = { github, blog, location, company };

  return (
    <StyledUserDetail>
      <Avatar avatarUrl={avatarUrl} />
      <Spacer height={16} />
      <Links links={links} />
    </StyledUserDetail>
  );
}

export default UserDetail;
