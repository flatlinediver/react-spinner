import { Position } from '@types';
import { raiseError, CONSTANTS } from '@helpers';
import { SpeedMapReturn } from './speedMap';

export interface PositionMapReturn
  extends Omit<SpeedMapReturn, 'top' | 'left' | 'bottom' | 'right' | 'center' | 'position'>,
    Position {}

export const positionMap = (props: SpeedMapReturn): PositionMapReturn => {
  if (!props.position || CONSTANTS.POSITIONS.indexOf(props.position) === -1) {
    return raiseError('position', `${props.position}`);
  }
  if (!props.top) {
    return raiseError('top', `${props.top}`);
  }
  if (!props.right) {
    return raiseError('right', `${props.right}`);
  }
  if (!props.bottom) {
    return raiseError('bottom', `${props.bottom}`);
  }
  if (!props.left) {
    return raiseError('left', `${props.left}`);
  }
  if (typeof props.center !== 'boolean') {
    return raiseError('center', `${props.center}`);
  }

  const isCentered: boolean =
    props.center && (props.position === 'fixed' || props.position === 'absolute');

  const top = props.center ? (props.position === 'fixed' ? 'auto' : '50%') : props.top;
  const left = props.center ? (props.position === 'fixed' ? 'auto' : '50%') : props.left;
  return {
    ...props,
    position: props.position,
    center: isCentered,
    top,
    left,
    bottom: isCentered ? 'auto' : props.bottom,
    right: isCentered ? 'auto' : props.right,
  };
};
