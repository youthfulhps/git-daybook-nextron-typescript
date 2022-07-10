import React from 'react';
import styled from 'styled-components';

const StyledUserLog = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: var(--color-100);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  padding: var(--size-500);
  font-size: var(--size-500);
  font-weight: var(--weight-700);
`;

function UserLog() {
  return <StyledUserLog>안녕하세요.</StyledUserLog>;
}

export default UserLog;
