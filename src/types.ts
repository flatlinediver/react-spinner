// I = Input, O = Output, nothing = same Input as Output
// change Type suffix when types are normalized

// Received Props
export type ColorsI = string[] | string;
export type SpeedI = 'slow' | 'normal' | 'fast';
export type Thickness = boolean;
export type Edges = 'round' | 'square';
export type SizeType = number;
export type PositionType = 'absolute' | 'fixed' | 'static';
export type Center = boolean;
export type Top = string | 0;
export type Bottom = string | 0;
export type Right = string | 0;
export type Left = string | 0;

// Mapped Props
export type ColorsO = string[];
export type SpeedO = 2.5 | 2 | 1.5;

// old ones

export interface Size {
  size: number;
}

export interface Colors {
  colors: string[] | string;
}
export interface SpeedsOptions {
  slow: number;
  normal: number;
  fast: number;
}
export interface Speeds {
  speed: 'slow' | 'normal' | 'fast';
}
export interface Speed {
  speed: number;
}
export interface SizeWithBorder {
  sizeWithBorder: number;
}
export interface Color {
  colors: string[];
}

export interface Look {
  thick: boolean;
  edges: 'round' | 'square';
}
export interface Position {
  position: 'absolute' | 'fixed' | 'static';
  center: boolean;
  top: string | 0;
  bottom: string | 0;
  left: string | 0;
  right: string | 0;
}
export interface Wrapper extends Size, Position {
  isCenteredAndNotStatic: boolean;
}
export interface Ring extends Size, Speed {
  colors: string[];
}

export interface DefaultProps extends Position, Look, Size, Speeds, Colors {}
export type SpinnerProps = Partial<DefaultProps>;
export interface CleanProps extends Position, Look, Size, Speed, Color {}
