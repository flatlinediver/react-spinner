export type Thickness = boolean;
export type Edges = 'round' | 'square';
export type Size = number;
export type Position = 'absolute' | 'fixed' | 'static';
export type Center = boolean;
export type Top = string | 0;
export type Bottom = string | 0;
export type Right = string | 0;
export type Left = string | 0;
export type ColorsI = string[] | string;
export type SpeedI = 'slow' | 'normal' | 'fast';
export type ColorsO = string[];
export type SpeedO = 2.5 | 2 | 1.5;

export interface DefaultProps {
  colors: ColorsI;
  speed: SpeedI;
  thick: Thickness;
  edges: Edges;
  size: Size;
  position: Position;
  center: Center;
  top: Top;
  bottom: Bottom;
  right: Right;
  left: Left;
}
export type SpinnerProps = Partial<DefaultProps>;
export interface CleanProps extends Omit<DefaultProps, 'colors' | 'speed'> {
  colors: ColorsO;
  speed: SpeedO;
}
export interface Wrapper extends Omit<CleanProps, 'colors' | 'speed' | 'thick' | 'edges'> {
  isCenteredAndNotStatic: boolean;
}
export interface Ring extends Pick<CleanProps, 'size' | 'speed' | 'colors'> {}
