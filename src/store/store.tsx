import React, { FC, useContext, createContext } from 'react';
import { SpinnerProps } from '../types';
import { CONSTANTS } from '../helpers';

export const Store = createContext<SpinnerProps>(CONSTANTS.DEFAULT_PROPS);

export const StoreProvider: FC<SpinnerProps> = ({ children, ...props }) => (
  <Store.Provider value={{ ...props }}>{children}</Store.Provider>
);

export const useStore = () => useContext(Store);
