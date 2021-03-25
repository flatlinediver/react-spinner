import raiseWarn from './raiseWarn';
import { Color } from "types";
import { PositionMapReturn } from './positionMap';
import raiseError from './raiseError';

export interface ColorsMapReturn extends
    Omit<PositionMapReturn, "colors">,
    Color
{};

const colorsCheck = (colors: string[]) => {
    if(colors.length > 4) {
        raiseWarn('if colors length is greater then 4, only 4 values are used.');
        colors.length = 4;
    };
    return colors;
};

export const colorsMap = (props: PositionMapReturn): ColorsMapReturn => {
    if(!props.colors) {
        return raiseError('colors', `${props.colors}`);
    }

    let colors;
    !Array.isArray(props.colors)
     ? colors = [props.colors]
     : colors = props.colors;

    return {
        ...props,
        colors: colorsCheck(colors)
    };
};