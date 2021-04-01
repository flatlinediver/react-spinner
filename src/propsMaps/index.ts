import {
  Bottom,
  Center,
  CleanProps,
  Edges,
  Left,
  Position,
  Right,
  Size,
  SpinnerProps,
  Thickness,
  Top,
} from '../types';
import { commonMap, errorGuards } from '../helpers';
import { colorsMap } from './colorsMap';
import { speedMap } from './speedMap';

export default (props: SpinnerProps): CleanProps => {
  errorGuards(props);
  return {
    colors: colorsMap(props.colors),
    speed: speedMap(props.speed),
    edges: commonMap<Edges, Edges>(props.edges),
    thick: commonMap<Thickness, Thickness>(props.thick),
    size: commonMap<Size, Size>(props.size),
    position: commonMap<Position, Position>(props.position),
    top: commonMap<Top, Top>(props.top),
    right: commonMap<Right, Right>(props.right),
    bottom: commonMap<Bottom, Bottom>(props.bottom),
    left: commonMap<Left, Left>(props.left),
    center: commonMap<Center, Center>(props.center),
  };
};
