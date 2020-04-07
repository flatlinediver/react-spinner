import styled from 'styled-components';
import {
    Wrapper,
    Speed,
    Ring
} from './types';
import {
    rotate,
    dash,
    colorsAnimation
} from './animations';


export const Container = styled.div<Wrapper>`
    position: ${({position}) => position};
    top: ${({top}) => top};
    bottom: ${({bottom}) => bottom};
    left: ${({left}) => left};
    right: ${({right}) => right};
    width: ${({size}) => size + 'px'};
    height: ${({size}) => size + 'px'};
    transform: ${({center}) => center && 'translate(-50%, -50%)'};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const Svg = styled.svg<Speed>`
    box-sizing: border-box;
    animation-name: ${rotate};
    animation-duration: ${({speed}) => speed}s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    width: 100%;
    height: 100%;
    transform-origin: center center;
`;
export const Circle = styled.circle<Ring>`
    box-sizing: border-box;
    stroke: ${({colors}) => colors.length === 1 && colors};
    animation: ${({size}) =>
        dash(size)} ${({speed}) => speed}s ease-in-out infinite,
        ${({colors}) => colors.length > 1
            ? colorsAnimation(colors)
            : 'none'}
            ${({speed}) => speed * 3}s ease-in-out infinite;
`;

