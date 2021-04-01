import React, { FC } from 'react';
import { Store, StoreProvider, useStore } from './store';
import { Spinner as SpinnerSvg } from './presentation';
import { SpinnerProps } from './types';
import { CONSTANTS, ErrorBoundary } from './helpers';

export const DEFAULT_SPINNER_VALUES = CONSTANTS.DEFAULT_PROPS;

// Deprecated
export const SpinnerContext = Store;

export const SpinnerProvider = StoreProvider;

const Spinner: FC<SpinnerProps> = (props) => {
  const theme = useStore();

  return (
    <ErrorBoundary>
      <SpinnerSvg props={{ ...CONSTANTS.DEFAULT_PROPS, ...theme, ...props }} />
    </ErrorBoundary>
  );
};

export default Spinner;
