export const parseField = field =>
  field.map(item => item.split('').map(symbol => symbol === '#'));

export const makeBlinker = () => {
  const field = [
    '.....',
    '.....',
    '.###.',
    '.....',
    '.....'];
  return parseField(field);
};

export const makePulsar = () => {
  const field = [
    '.................',
    '.................',
    '....###...###....',
    '.................',
    '..#....#.#....#..',
    '..#....#.#....#..',
    '..#....#.#....#..',
    '....###...###....',
    '.................',
    '....###...###....',
    '..#....#.#....#..',
    '..#....#.#....#..',
    '..#....#.#....#..',
    '.................',
    '....###...###....',
    '.................',
    '.................'];
  return parseField(field);
};

export const makeGosperGliderGun = () => {
  const field = [
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '.........................#............',
    '.......................#.#............',
    '.............##......##............##.',
    '............#...#....##............##.',
    '.##........#.....#...##...............',
    '.##........#...#.##....#.#............',
    '...........#.....#.......#............',
    '............#...#.....................',
    '.............##.......................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................',
    '......................................'];
  return parseField(field);
};
