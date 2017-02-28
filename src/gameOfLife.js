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
  const changeCell = (cell, x, y) => {
    const liveNeighbors = collectCells(field, x, y).filter(item => item).length;
    const mustDie = (liveNeighbors < 2) || (liveNeighbors > 3);
    const spawning = !cell && (liveNeighbors === 3);
    return spawning || (cell && !mustDie);
  };
  const newField = field.map((line, y) => line.map((cell, x) => changeCell(cell, x, y)));
  return newField;
};
