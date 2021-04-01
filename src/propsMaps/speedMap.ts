import { CONSTANTS } from '../helpers';
import { SpeedI, SpeedO } from '../types';

export const speedMap = (speed?: SpeedI): SpeedO => CONSTANTS.SPEEDS[speed as SpeedI];
