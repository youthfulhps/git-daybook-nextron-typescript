import React, { useContext } from 'react';
import styled from 'styled-components';
import userLanguageList from '@hooks/language/useLanguageList';
import { UserContext } from '@contexts/UserContext';

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
`;

function UserLog() {
  const { userId } = useContext(UserContext);
  const { totalLanguageList } = userLanguageList(userId);
  return <StyledUserLog>안녕하세요.</StyledUserLog>;
}

export default UserLog;
