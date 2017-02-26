export const makeField = (size) => {
  const stateCell = {
    alive: '#',
    frame: '*',
    dead: ' ',
  };
  const makeCell = (x, y) => {
    const detFrame = (curX, curY) =>
      curX === 0 || curX === size - 1 || curY === 0 || curY === size - 1;
    const cell = detFrame(x, y) ? stateCell.frame : stateCell.dead;
    return cell;
  };
  const field = Array.from(Array(size)).map((line, y) =>
  Array.from(Array(size)).map((cell, x) => makeCell(x, y)));
  field[4][5] = stateCell.alive;
  field[5][5] = stateCell.alive;
  field[6][5] = stateCell.alive;
  field[4][6] = stateCell.alive;
  field[5][7] = stateCell.alive;
  return field;
};

// export default makeField();
// console.log(makeField(15));
