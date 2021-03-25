import { Position } from "types";
import { POSITIONS } from "./constants";
import raiseError from "./raiseError";
import {SpeedMapReturn} from './speedMap'

export interface PositionMapReturn extends
    Omit<SpeedMapReturn, "top" | "left" | "bottom" | "right" | "center" | "position">,
    Position
{};

export const positionMap = (props: SpeedMapReturn): PositionMapReturn  => {
    
    if(!props.position || POSITIONS.indexOf(props.position) === -1) {
        return raiseError('position', `${props.position}`)
    };
    if(!props.top) {
        return raiseError('top', `${props.top}`)
    };
    if(!props.right) {
        return raiseError('right', `${props.right}`)
    };
    if(!props.bottom) {
        return raiseError('bottom', `${props.bottom}`)
    };
    if(!props.left) {
        return raiseError('left', `${props.left}`)
    };
    if(typeof props.center !== "boolean") {
        return raiseError('center', `${props.center}`)
    };

    const isCentered: boolean = props.center && (props.position === 'fixed' || props.position === 'absolute');
    return {
        ...props,
        position: props.position,
        center: isCentered,
        top: isCentered ? '50%' : props.top,
        left: isCentered ? '50%' : props.left,
        bottom: isCentered ? 'auto' : props.bottom,
        right: isCentered ? 'auto' : props.right
    }
};