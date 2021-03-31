import React, { FC } from 'react';
import { propsCleaning } from '@utils';
import { Store, StoreProvider, useStore } from '@store';
import { Spinner as SpinnerSvg } from '@presentation';
import { SpinnerProps } from '@types';
import { CONSTANTS } from '@helpers';

export const DEFAULT_SPINNER_VALUES = CONSTANTS.DEFAULT_PROPS;

// Deprecated
export const SpinnerContext = Store;

export const SpinnerProvider = StoreProvider;

const Spinner: FC<SpinnerProps> = (props) => {
  const theme = useStore();

  return <SpinnerSvg {...propsCleaning({ ...CONSTANTS.DEFAULT_PROPS, ...theme, ...props })} />;
};

export default Spinner;
