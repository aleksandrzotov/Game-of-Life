import { collectCells, step } from '../src/gameOfLife';
import { makePulsar, parseField } from '../src/createField';

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
  const field = makePulsar();
  expect(collectCells(field, 21, 0).length).toBe(0);
  expect(collectCells(field, 0, 0).length).toBe(3);
  expect(collectCells(field, 5, 5).length).toBe(8);
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
