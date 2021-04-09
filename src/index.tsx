import React, { FC } from 'react';
import { StoreProvider, useStore } from './store';
import { Spinner as SpinnerSvg } from './presentation';
import { SpinnerProps } from './types';
import { CONSTANTS, ErrorBoundary } from './helpers';

export const DEFAULT_SPINNER_VALUES = CONSTANTS.DEFAULT_PROPS;

export const SpinnerProvider = StoreProvider;

const Spinner: FC<SpinnerProps> = (props) => {
  const theme = useStore();

  return (
    <ErrorBoundary>
      <SpinnerSvg props={{ ...DEFAULT_SPINNER_VALUES, ...theme, ...props }} />
    </ErrorBoundary>
  );
};

export default Spinner;
