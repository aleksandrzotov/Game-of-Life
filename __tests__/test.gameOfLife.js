import { countLiveNeighbors, step } from '../src/gameOfLife';
import { makeBlinker, parseField } from '../src/libraryFigures';

test('Parse game field.', () => {
  const field = [
    '.....',
    '.....',
    '.###.',
    '.....',
    '.....'];
  const result = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
    [false, false, false, false, false]];
  expect(parseField(field)).toEqual(result);
});

test('Collect cells near with specified cell', () => {
  const field = makeBlinker();
  expect(countLiveNeighbors(field, 21, 34)).toBe(0);
});

test('Collect cells near with specified cell', () => {
  const field = makeBlinker();
  expect(countLiveNeighbors(field, 0, 0)).toBe(0);
});

test('Collect cells near with specified cell', () => {
  const field = makeBlinker();
  expect(countLiveNeighbors(field, 3, 3)).toBe(2);
});

test('Collect cells near with specified cell', () => {
  const field = makeBlinker();
  expect(countLiveNeighbors(field, 2, 3)).toBe(3);
});


test('Make one iteration games', () => {
  const field1 = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
    [false, false, false, false, false]];
  const field2 = step(field1);
  const field3 = step(field2);
  expect(field2).toEqual(
    [[false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false]]);
  expect(field3).toEqual(field1);
});
