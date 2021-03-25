import { Size, SizeWithBorder, SpinnerProps } from "types";
import raiseError from "./raiseError";

export interface SizeMapReturn extends Omit<SpinnerProps, "size">, SizeWithBorder, Size {};

export const sizeMap = (props: SpinnerProps): SizeMapReturn => {
    if(isNaN(props.size as number) || props.size === undefined) {
        return raiseError('size', `${props.size}`);
    }

    let newSize = parseInt(`${props.size}`);
    newSize += 5;
    const borderSize = newSize / 8 + 10;
    const sizeWithBorder = newSize + borderSize;

    return {
        ...props,
        size: newSize,
        sizeWithBorder
    }
};