import raiseError from "./raiseError";
import raiseWarn from './raiseWarn';
import { CleanProps } from "types";


const colorsCheck = (colors: string[]) => {
    const findInvalid: string | undefined = colors.find((c: string) => {
        let s = {color: 'placeholder'}
        if(Option !== undefined) {
            s = new Option().style;
            s.color = c;
        }
        return s.color === '';
    });
    if(findInvalid !== undefined) raiseError('colors', JSON.stringify(colors));

    if(colors.length > 4) {
        raiseWarn('if colors length is greater then 4, only 4 values are used.');
        colors.length = 4;
    };
    return colors;
};

export const colorsMap = (cleanProps: CleanProps) => {
    let colors;
    !Array.isArray(cleanProps.colors)
     ? colors = [cleanProps.colors]
     : colors = cleanProps.colors;
    cleanProps.colors = colorsCheck(colors);

    return cleanProps;
};