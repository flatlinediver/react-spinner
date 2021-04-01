import React, { FC } from 'react';
import { CleanProps } from '../../types';
import { Circle, Svg, Container } from './style';

const Spinner: FC<CleanProps> = ({
  position,
  center,
  top,
  bottom,
  left,
  right,
  colors,
  speed,
  size,
  thick,
  edges,
  sizeWithBorder,
}) => (
  <Container
    data-testid="spinner"
    position={position}
    top={top}
    bottom={bottom}
    left={left}
    right={right}
    center={center}
    size={size}
    aria-busy="true"
  >
    <Svg
      data-testid="svg"
      speed={speed}
      viewBox={`0 0 ${sizeWithBorder} ${sizeWithBorder}`}
      role="progressbar"
    >
      <Circle
        data-testid="circle"
        speed={speed}
        colors={colors}
        size={size}
        cx={sizeWithBorder / 2}
        cy={sizeWithBorder / 2}
        r={size / 2}
        fill="none"
        strokeWidth={sizeWithBorder / (thick ? 8 : 16)}
        strokeMiterlimit="10"
        strokeLinecap={edges}
        strokeDasharray={`1, ${size} * 6`}
        strokeDashoffset={0}
      />
    </Svg>
  </Container>
);

export default Spinner;
