import React, { FC, useContext, createContext, useMemo } from 'react';
import { SpinnerProps } from 'types';
import { CONSTANTS } from 'helpers';

export const Store = createContext<SpinnerProps>(CONSTANTS.DEFAULT_PROPS);

export const StoreProvider: FC<SpinnerProps> = ({
  children,
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
}) => {
  const value = useMemo(
    () => ({
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
    }),
    [position, center, top, bottom, left, right, colors, speed, size, thick, edges]
  );

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export const useStore = () => useContext(Store);
