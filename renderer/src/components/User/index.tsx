import React, { Suspense, lazy, useContext } from 'react';
import ErrorBoundary from '@components/common/ErrorBoundary';
import useUser from '@hooks/user/useUser';
import userLanguageList from '@hooks/language/useLanguageList';
import { UserContext } from '@contexts/UserContext';

const UserCard = lazy(() => import('./UserCard'));
const Skeleton = lazy(() => import('@components/common/Skeleton'));

function UserSection() {
  const { userId } = useContext(UserContext);

  const { user } = useUser(userId);
  const { totalLanguageList } = userLanguageList(userId);

  return (
    <ErrorBoundary fallback={<div>에러 발생!</div>}>
      <Suspense fallback={<Skeleton height={648} width={300} />}>
        <UserCard avatarUrl={user.avatar_url} onClick={() => {}} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default UserSection;
