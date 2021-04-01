import { DefaultProps, Position, SpeedI, SpeedO } from '../types';

export const DEFAULT_PROPS: DefaultProps = {
  position: 'static',
  center: false,
  top: 'auto',
  bottom: 'auto',
  left: 'auto',
  right: 'auto',
  colors: ['#222', '#555'],
  speed: 'normal',
  size: 32,
  thick: false,
  edges: 'round',
};
export const SPEEDS: Record<SpeedI, SpeedO> = { slow: 2.5, normal: 2, fast: 1.5 };
export const POSITIONS: Position[] = ['absolute', 'fixed', 'static'];

export default {
  DEFAULT_PROPS,
  SPEEDS,
  POSITIONS,
};
