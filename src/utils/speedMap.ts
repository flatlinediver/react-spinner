import { CONSTANTS, raiseError } from 'helpers';
import { Speed, SpeedsOptions } from 'types';
import { SizeMapReturn } from './sizeMap';

export interface SpeedMapReturn extends Omit<SizeMapReturn, 'speed'>, Speed {}

export const speedMap = (props: SizeMapReturn): SpeedMapReturn => {
  if (!CONSTANTS.SPEEDS[props.speed as keyof SpeedsOptions]) raiseError('speed', `${props.speed}`);

  return {
    ...props,
    speed: CONSTANTS.SPEEDS[props.speed as keyof SpeedsOptions],
  };
};
