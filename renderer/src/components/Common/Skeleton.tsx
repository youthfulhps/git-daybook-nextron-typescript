import React from 'react';
import styled from 'styled-components';

type SkeletonProps = {
  className?: string;
  width?: number;
  height?: number;
};

const StyledSkeleton = styled.div<SkeletonProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  border-radius: 16px;
  -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
  animation: skeleton-gradient 1.8s infinite ease-in-out;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(90, 90, 105, 0.5);
    }

    50% {
      background-color: rgba(90, 90, 105, 0.8);
    }

    100% {
      background-color: rgba(90, 90, 105, 0.5);
    }
  }
`;

function Skeleton({ className, height, width }: SkeletonProps) {
  return <StyledSkeleton className={className} height={height} width={width} />;
}

export default Skeleton;
