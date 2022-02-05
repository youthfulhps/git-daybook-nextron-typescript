import React from 'react';
import styled from 'styled-components';
import Spacer from '@components/Common/Spacer';
import Avatar from './Avatar';
import Links from './Links';
import Languages from './Languages';

type UserDetailProps = {
  user: any;
  languages: any;
};

const StyledUserDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: var(--color-100);
  border-radius: 16px;
`;

function UserDetail({ user, languages }: UserDetailProps) {
  const { html_url: github, blog, location, company, avatar_url: avatarUrl } = user;
  const links = { github, blog, location, company };

  return (
    <StyledUserDetail>
      <Avatar avatarUrl={avatarUrl} />
      <Spacer height={16} />
      <Links links={links} />
      <Spacer height={16} />
      <Languages languages={languages} />
    </StyledUserDetail>
  );
}

export default UserDetail;
