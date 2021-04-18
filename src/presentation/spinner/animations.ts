import { keyframes } from 'styled-components';
import { Size, ColorsO } from '../../types';

export const rotate = keyframes`
    100% { transform: rotate(360deg); }
`;

export const dash = (size: Size) => keyframes`
    0% {
        stroke-dasharray: 1, ${size * 6};
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: ${size * 3}, ${size * 6};
        stroke-dashoffset: -${size}px;
    }
    100% {
        stroke-dasharray: ${size * 3}, ${size * 6};
        stroke-dashoffset: -${size * 4}px;
    }
`;

export const colorsAnimation = (colors: ColorsO) => keyframes`
    ${colors.map((c: string, i: number) =>
      i === 0 ? `100%, 0% { stroke: ${c}; }` : `${(100 / colors.length) * i}% { stroke: ${c}; }`
    )};
`;
