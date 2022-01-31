import React from 'react';
import styled from 'styled-components';

type SpacerProps = {
  height?: number;
  width?: number;
};

const StyledSpacer = styled.div<SpacerProps>`
  height: ${({ height }) => height && `${height}px`};
  min-height: ${({ height }) => !height && '100%'};

  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

function Spacer({ height, width }: SpacerProps) {
  return <StyledSpacer height={height} width={width} />;
}

export default Spacer;
