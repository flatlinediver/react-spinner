import { SPEEDS } from "./constants";
import { SpeedsOptions } from "types";
import raiseError from "./raiseError";

export const speedMap = (cleanProps: any) => {
    if(!SPEEDS[cleanProps.speed as keyof SpeedsOptions]) raiseError('speed', cleanProps.speed);

    cleanProps.speed = SPEEDS[cleanProps.speed as keyof SpeedsOptions];

    return cleanProps;
};