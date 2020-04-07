import raiseError from "./raiseError";

export const sizeMap = (cleanProps: any) => {
    if(isNaN(parseInt(cleanProps.size)) || cleanProps.size === undefined) raiseError('size', cleanProps.size);

    cleanProps.size = parseInt(cleanProps.size);
    cleanProps.size += 5;
    cleanProps.borderSize = cleanProps.size / 8 + 10;
    cleanProps.sizeWithBorder = cleanProps.size + cleanProps.borderSize;
    return cleanProps;
};