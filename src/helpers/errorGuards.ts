import {
  ColorsI,
  Bottom,
  SpinnerProps,
  Center,
  Thickness,
  Edges,
  SpeedI,
  Size,
  Position,
  Top,
  Right,
  Left,
} from '../types';
import { raiseError } from '../helpers';

const guard = <T>(condition: boolean, label: string, prop?: T): T => {
  if (condition) raiseError(label, `${prop}`);
  return prop as T;
};

export default (props: SpinnerProps) => {
  guard<ColorsI>(!props.colors, 'colors', props.colors);
  guard<Bottom>(!props.bottom, 'bottom', props.bottom);
  guard<Center>(typeof props.center !== 'boolean', 'center', props.center);
  guard<Thickness>(typeof props.thick !== 'boolean', 'thick', props.thick);
  guard<Edges>(!props.edges, 'edges', props.edges);
  guard<SpeedI>(!props.speed, 'speed', props.speed);
  guard<Size>(!props.size, 'size', props.size);
  guard<Position>(!props.position, 'position', props.position);
  guard<Top>(!props.top, 'top', props.top);
  guard<Right>(!props.right, 'right', props.right);
  guard<Left>(!props.left, 'left', props.left);
};
