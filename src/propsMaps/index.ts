import {
  Bottom,
  Center,
  CleanProps,
  Edges,
  Left,
  PositionType,
  Right,
  SizeType,
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
    size: commonMap<SizeType, SizeType>(props.size),
    position: commonMap<PositionType, PositionType>(props.position),
    top: commonMap<Top, Top>(props.top),
    right: commonMap<Right, Right>(props.right),
    bottom: commonMap<Bottom, Bottom>(props.bottom),
    left: commonMap<Left, Left>(props.left),
    center: commonMap<Center, Center>(props.center),
  };
};
