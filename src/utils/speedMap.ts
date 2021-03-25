import { SPEEDS } from "./constants";
import { Speed, SpeedsOptions } from "types";
import {SizeMapReturn} from './sizeMap';
import raiseError from "./raiseError";

export interface SpeedMapReturn extends Omit<SizeMapReturn, "speed">, Speed {};

export const speedMap = (props: SizeMapReturn): SpeedMapReturn => {
    if(!SPEEDS[props.speed as keyof SpeedsOptions]) raiseError('speed', `${props.speed}`);

    return {
        ...props,
        speed: SPEEDS[props.speed as keyof SpeedsOptions]
    };
};