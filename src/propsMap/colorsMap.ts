import { ColorsI, ColorsO } from 'types';
import { raiseWarn } from '../helpers/';

const colorsCheck = (colors: ColorsO) => {
  if (colors.length > 4) {
    raiseWarn('if colors length is greater then 4, only 4 values are used.');
    colors.length = 4;
  }
  return colors;
};

export const colorsMap = (colors?: ColorsI): ColorsO => {
  let colorsList: ColorsO;
  !Array.isArray(colors) ? (colorsList = [colors as string]) : (colorsList = colors);

  return colorsCheck(colorsList);
};
