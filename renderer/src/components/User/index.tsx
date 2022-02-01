import React from 'react';
import useUser from '@hooks/Users/useUser';
import useUserSection from '@hooks/Users/useUserSection';
import useUserLanguage from '@hooks/Users/useUserLanguage';
import Skeleton from '@components/Common/Skeleton';
import UserCard from './UserCard';
import UserDetail from './UserDetail';

function UserSection() {
  const { data: user } = useUser('youthfulhps');
  const { languages } = useUserLanguage('youthfulhps');

  const { isUserSectionActive, activeUserSection } = useUserSection();

  if (!user) return <Skeleton height={300} width={300} />;

  const { avatar_url: avatarUrl } = user;

  if (!isUserSectionActive) return <UserCard avatarUrl={avatarUrl} onClick={activeUserSection} />;

  return <UserDetail user={user} languages={languages} />;
}

export default UserSection;
