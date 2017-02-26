
import { getCellsNear } from './getCellsNear';

export const step = (field) => {
  const newField = field.map((line, y) => line.map((cell, x) => {
    const cellsNear = getCellsNear(field, x, y);
    const fate = cellsNear.reduce((acc, item) => {
      if (item === '#') {
        return acc + 1;
      } else if (item === '*') {
        return acc - 100;
      }
      return acc;
    }, 0);
    if (cell === '*') {
      return '*';
    } if (cell === ' ' && fate === 3) {
      return '#';
    } else if (cell === '#' && (fate === 2 || fate === 3)) {
      return '#';
    } else if (fate < 2) {
      return ' ';
    } else if (fate > 3) {
      return ' ';
    }
    return cell;
  }));
  return newField;
};
// export default step;

// console.log(curField);
// console.log(iter(curField));
