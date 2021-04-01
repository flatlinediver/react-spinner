import propsMap from '../../propsMap';
import React, { FC } from 'react';
import { CleanProps, SpinnerProps } from '../../types';
import { Circle, Svg, Container } from './style';

const Spinner: FC<{ props: SpinnerProps }> = ({ props }) => {
  const {
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
  }: CleanProps = {
    ...propsMap(props),
  };

  let newSize = parseInt(`${size}`);
  newSize += 5;
  const borderSize = newSize / 8 + 10;
  const sizeWithBorder = newSize + borderSize;
  const isCenteredAndNotStatic: boolean =
    center && (position === 'fixed' || position === 'absolute');

  return (
    <Container
      data-testid="spinner"
      isCenteredAndNotStatic={isCenteredAndNotStatic}
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      center={center}
      size={newSize}
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
          size={newSize}
          cx={sizeWithBorder / 2}
          cy={sizeWithBorder / 2}
          r={newSize / 2}
          fill="none"
          strokeWidth={sizeWithBorder / (thick ? 8 : 16)}
          strokeMiterlimit="10"
          strokeLinecap={edges}
          strokeDasharray={`1, ${newSize} * 6`}
          strokeDashoffset={0}
        />
      </Svg>
    </Container>
  );
};

export default Spinner;
