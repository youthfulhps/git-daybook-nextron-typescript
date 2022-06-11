import React from 'react';
import useUser from '@hooks/Users/useUser';
import Skeleton from '@components/Common/Skeleton';
import UserCard from './UserCard';
import UserDetail from './UserDetail';
import useActiveSection from '@hooks/common/useActiveSection';
import userLanguageList from '@hooks/languages/useLanguageList';

function UserSection() {
  const { data: user } = useUser('youthfulhps');
  const { languages } = userLanguageList('youthfulhps');
  const { isSectionActivated, activateSection } = useActiveSection('user');

  if (!user) return <Skeleton height={300} width={300} />;

  if (!isSectionActivated)
    return <UserCard avatarUrl={user.avatar_url} onClick={activateSection} />;

  return <UserDetail user={user} languages={languages} />;
}

export default UserSection;
