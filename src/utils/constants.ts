import { DefaultProps, SpeedsOptions } from '../types';

export const USER_PROPS = [
    'position',
    'center',
    'top',
    'bottom',
    'left',
    'right',
    'colors',
    'speed',
    'size',
    'thick',
    'edges'
];
export const DEFAULT_PROPS: DefaultProps = {
    position: 'static',
    center: false,
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    right: 'auto',
    colors: ['#222', '#555'],
    speed: 'normal',
    size: 32,
    thick: false,
    edges: 'round'
};
export const SPEEDS: SpeedsOptions = { slow: 2.5, normal: 2, fast: 1.5 };
export const POSITIONS: string[] = [ 'absolute', 'fixed', 'static' ];