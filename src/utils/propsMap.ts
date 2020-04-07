import { DEFAULT_PROPS, USER_PROPS } from './constants';
import { SpinnerProps, CleanProps } from '../types';

export const propsMap = (props: SpinnerProps, theme: SpinnerProps | null, cleanProps: any): CleanProps => {
    USER_PROPS.forEach(prop => {
        if(props[(prop as keyof SpinnerProps)] !== undefined) {
            cleanProps = {
                ...cleanProps,
                [(prop as keyof SpinnerProps)]: props[(prop as keyof SpinnerProps)]
            };
        } else if( theme !== null && theme[(prop as keyof SpinnerProps)] !== undefined) {
            cleanProps = {
                ...cleanProps,
                [(prop as keyof SpinnerProps)]: theme[(prop as keyof SpinnerProps)]
            };
        } else {
            cleanProps = {
                ...cleanProps,
                [(prop as keyof SpinnerProps)]: DEFAULT_PROPS[(prop as keyof SpinnerProps)]
            };
        }
    });

    return cleanProps;
};