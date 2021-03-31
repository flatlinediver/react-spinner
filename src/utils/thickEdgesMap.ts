import { Look, SizeWithBorder } from '@types';
import { ColorsMapReturn } from './colorsMap';
import { raiseError } from '@helpers';

export interface SizeMapReturn
  extends Omit<ColorsMapReturn, 'thick' | 'edges'>,
    SizeWithBorder,
    Look {}

export const thickEdgesMap = (props: ColorsMapReturn): SizeMapReturn => {
  if (props.thick === undefined || props.thick === null) {
    return raiseError('thick', `${props.thick}`);
  }
  if (props.edges === undefined || props.edges === null) {
    return raiseError('edges', `${props.edges}`);
  }
  return {
    ...props,
    thick: props.thick,
    edges: props.edges,
  };
};
