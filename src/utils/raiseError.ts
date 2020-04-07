export const correctValues: any = {
    speed: "'slow' | 'normal' | 'fast'",
    size: "number",
    position: "'absolute' | 'fixed' | 'static'",
    colors: "string or array of strings with browsers supported color value"
};

export default (prop: string, value: string) => {
    throw new Error(`{{ react-spinner }} -> value ${value} is not valid for prop ${prop}. 
Correct values: ${correctValues[prop]}`);
};