import React from 'react';
import { Progress as AntdProgress, ProgressProps } from 'antd';
import styled from 'styled-components';

const StyledProgress = styled(AntdProgress)`
  margin-top: 8px;
  .ant-progress-outer {
    margin: 4px 0;
  }

  .ant-progress-text {
    color: var(--color-400);
    font-size: 12px;
  }

  .ant-progress-bg {
    border-radius: 4px;
  }
`;

function Progress(props: ProgressProps) {
  return <StyledProgress {...props} />;
}

export default Progress;
