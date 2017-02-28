export const countLiveNeighbors = (field, x, y) => {
  const range = [-1, 0, 1];
  const neighbors = range.map(dy => range.map((dx) => {
    if (dx === 0 && dy === 0) {
      return undefined;
    }
    return field[y + dy] && field[y + dy][x + dx];
  }));
  return [].concat(...neighbors).filter(item => item).length;
};

export const step = (field) => {
  const changeCell = (cell, x, y) => {
    const liveNeighbors = countLiveNeighbors(field, x, y);
    const mustDie = (liveNeighbors < 2) || (liveNeighbors > 3);
    const spawning = !cell && (liveNeighbors === 3);
    return spawning || (cell && !mustDie);
  };
  const newField = field.map((line, y) => line.map((cell, x) => changeCell(cell, x, y)));
  return newField;
};
