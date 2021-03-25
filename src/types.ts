export interface Size { size: number; };
export interface Colors { colors: string[] | string; };
export interface SpeedsOptions { slow: number; normal: number; fast: number };
export interface Speeds { speed: 'slow' | 'normal' | 'fast' };
export interface Speed { speed: number; };
export interface SizeWithBorder { sizeWithBorder: number; };
export interface Color { colors: string[] };

export interface Look {
    thick: boolean;
    edges: 'round' | 'square';
};
export interface Position {
    position: 'absolute' | 'fixed' | 'static'; 
    center: boolean; 
    top: string | 0;
    bottom: string | 0;
    left: string | 0;
    right: string | 0;
};
export interface Wrapper extends Size, Position {};
export interface Ring extends Size, Speed {colors: string[]};

export interface DefaultProps extends
    Position,
    Look,
    Size,
    Speeds,
    Colors
{};
export interface SpinnerProps extends Partial<DefaultProps>{};
export interface CleanProps extends
    Position,
    Look,
    Size,
    Speed,
    SizeWithBorder,
    Color
{};