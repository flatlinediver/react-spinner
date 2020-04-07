import { POSITIONS } from "./constants";
import raiseError from "./raiseError";

export const positionMap = (cleanProps: any) => {
    
    if(POSITIONS.indexOf(cleanProps.position) === -1) raiseError('position', cleanProps.position);

    cleanProps.center = (cleanProps.position === 'fixed' || cleanProps.position === 'absolute') && cleanProps.center;
    if(cleanProps.center) {
        cleanProps = {
            ...cleanProps,
            top: '50%',
            left: '50%',
            bottom: 'auto',
            right: 'auto'
        }
    }
    return cleanProps;
};