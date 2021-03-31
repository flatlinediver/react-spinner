const correctValues: { [key: string]: string } = {
  speed: "'slow' | 'normal' | 'fast'",
  size: 'number',
  position: "'absolute' | 'fixed' | 'static'",
  colors: 'string or array of strings with browsers supported color value',
  top: 'string or 0',
  right: 'string or 0',
  bottom: 'string or 0',
  left: 'string or 0',
  center: 'boolean',
  thick: 'boolean',
  edges: "'round' | 'square'",
};

export default (prop: string, value: string) => {
  throw new Error(`{{ react-spinner }} -> value ${value} is not valid for prop ${prop}. 
Correct values: ${correctValues[prop]}`);
};
