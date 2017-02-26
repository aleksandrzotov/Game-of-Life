export const createField = size =>
  Array.from(Array(size)).map(line => Array.from(Array(size)).map(cell => 0));

export const collectCells = (field, x, y) => {
  if (x >= field[0].length || y >= field.length) {
    return [];
  }
  return field.reduce((acc, line, curY) =>
  line.reduce((curAcc, cell, curX) => {
    if (curX === x && curY === y) {
      return acc;
    } else if ((curX <= x + 1 && curX >= x - 1) && (curY <= y + 1 && curY >= y - 1)) {
      return acc + cell;
    }
    return acc;
  }, acc), 0);
};

export const step = (field) => {
  const newField = field.map((line, y) => line.map((cell, x) => {
    const cellsAround = collectCells(field, x, y);
    const fate = cellsAround.reduce((acc, item) => acc + item, 0);
    if (cell === 0 && fate === 3) {
      cell = 1;
    } else if (cell === 1 && (fate < 2 || fate > 3)) {
      cell = 0;
    }
    return cell;
  }));
  return newField;
};
