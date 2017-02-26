export const getCellsNear = (field, x, y) => {
  const size = field.length - 1;
  const cellsNear = [];
  if (y - 1 >= 0) {
    cellsNear.push(field[y - 1][x]);
  }
  if (x + 1 < size && y - 1 >= 0) {
    cellsNear.push(field[y - 1][x + 1]);
  }
  if (x + 1 < size) {
    cellsNear.push(field[y][x + 1]);
  }
  if (x + 1 < size && y + 1 < size) {
    cellsNear.push(field[y + 1][x + 1]);
  }
  if (y + 1 < size) {
    cellsNear.push(field[y + 1][x]);
  }
  if (x - 1 >= 0 && y + 1 < size) {
    cellsNear.push(field[y + 1][x - 1]);
  }
  if (x - 1 >= 0) {
    cellsNear.push(field[y][x - 1]);
  }
  if (x - 1 >= 0 && y - 1 >= 0) {
    cellsNear.push(field[y - 1][x - 1]);
  }
  return cellsNear;
};
// export default getCellsNear;
