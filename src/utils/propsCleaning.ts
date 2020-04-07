import {
    CleanProps,
    SpinnerProps
} from '../types';
import {
    sizeMap,
    positionMap,
    colorsMap,
    propsMap,
    speedMap
} from '../utils';

export const propsCleaning = (props: SpinnerProps, theme: SpinnerProps | null): CleanProps => {
    let returnedProps: CleanProps;
    let cleanProps: any;

    cleanProps = propsMap(props, theme, cleanProps);
    cleanProps = sizeMap(cleanProps);
    cleanProps = speedMap(cleanProps);
    cleanProps = positionMap(cleanProps);
    cleanProps = colorsMap(cleanProps);

    returnedProps = cleanProps;
    return returnedProps;
};