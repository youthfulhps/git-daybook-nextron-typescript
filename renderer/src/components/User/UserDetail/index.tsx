import React from 'react';
import styled from 'styled-components';
import Spacer from '@components/common/Spacer';
import Avatar from './Avatar';
import Links from './Links';
import Follow from './Follow';
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

const StyledUserName = styled.div`
  font-size: 24px;
  color: var(--color-700);
  font-weight: bold;
`;

function UserDetail({ user, languages }: UserDetailProps) {
  const {
    html_url: github,
    blog,
    location,
    company,
    avatar_url: avatarUrl,
    followers,
    following,
    login,
  } = user;
  const links = { github, blog, location, company };
  const followCounts = { followers, following };

  return (
    <StyledUserDetail>
      <Avatar avatarUrl={avatarUrl} />
      <Spacer height={8} />
      <StyledUserName>{login}</StyledUserName>
      <Spacer height={16} />
      <Links links={links} />
      <Spacer height={16} />
      <Follow followCounts={followCounts} />
      <Spacer height={16} />
      <Languages languages={languages} />
    </StyledUserDetail>
  );
}

export default UserDetail;
