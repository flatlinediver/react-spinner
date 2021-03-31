import { Size, SizeWithBorder, SpinnerProps } from 'types';
import { raiseError } from 'helpers';

export interface SizeMapReturn extends Omit<SpinnerProps, 'size'>, SizeWithBorder, Size {}

export const sizeMap = (props: SpinnerProps): SizeMapReturn => {
  if (isNaN(props.size as number) || props.size === undefined) {
    return raiseError('size', `${props.size}`);
  }

  let newSize = parseInt(`${props.size}`);
  newSize += 5;
  const borderSize = newSize / 8 + 10;
  const sizeWithBorder = newSize + borderSize;

  return {
    ...props,
    size: newSize,
    sizeWithBorder,
  };
};

export interface SizeMapReturn2 extends SizeWithBorder, Size {}

export const sizeMap2 = (size: number): SizeMapReturn2 => {
  if (isNaN(size as number) || size === undefined) {
    return raiseError('size', `${size}`);
  }

  let newSize = parseInt(`${size}`);
  newSize += 5;
  const borderSize = newSize / 8 + 10;
  const sizeWithBorder = newSize + borderSize;

  return {
    size: newSize,
    sizeWithBorder,
  };
};
