export const collectCells = (field, x, y) => {
  if (x >= field[0].length || y >= field.length) {
    return [];
  }
  return field.reduce((acc, line, curY) =>
  line.reduce((curAcc, cell, curX) => {
    if (curX === x && curY === y) {
      return acc;
    } else if ((curX <= x + 1 && curX >= x - 1) && (curY <= y + 1 && curY >= y - 1)) {
      acc.push(cell);
      return acc;
    }
    return acc;
  }, acc), []);
};


export const step = (field) => {
  const newField = field.map((line, y) => line.map((cell, x) => {
    const liveNeighbors = collectCells(field, x, y).filter(item => item).length;

    if (!cell && liveNeighbors === 3) {
      return true;
    } else if (cell && (liveNeighbors < 2 || liveNeighbors > 3)) {
      return false;
    }
    return cell;
  }));
  return newField;
};
