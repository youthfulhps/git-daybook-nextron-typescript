import React, { useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import userLanguageList from '@hooks/language/useLanguageList';
import { UserContext } from '@contexts/UserContext';
import useContribution from '@hooks/contributions/useContribution';
import DateUtils from '@utils/DateUtils';

const StyledUserLog = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-300);
  position: relative;
  padding: var(--size-500);
  font-size: var(--size-500);
  font-weight: var(--weight-700);
  transition-duration: 0.5s;
  position: relative;

  &:hover {
    backdrop-filter: blur(30px);
    background-color: var(--color-800);
  }

  .user-log {
    &__commit-count {
      position: absolute;
      bottom: var(--size-500);
      right: var(--size-500);
      color: var(--color-commit-middle);
      font-size: var(--size-700);
    }
  }
`;

function UserLog() {
  const { userId } = useContext(UserContext);

  const tomorrowDate = DateUtils.getTomorrowDate();
  const todayDate = DateUtils.getTodayDate();
  const { contributions } = useContribution(userId, todayDate, tomorrowDate);

  return (
    <StyledUserLog>
      오늘은
      <div className="user-log__commit-count">{contributions.totalCommitContributions}</div>
    </StyledUserLog>
  );
}

export default UserLog;
