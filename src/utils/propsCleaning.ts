import {
    CleanProps,
    SpinnerProps
} from '../types';
import {
    sizeMap,
    positionMap,
    colorsMap,
    speedMap,
    thickEdgesMap
} from '../utils';

export const propsCleaning = (props: SpinnerProps): CleanProps => {
    return thickEdgesMap( colorsMap( positionMap( speedMap( sizeMap(props) ) ) ) );
};