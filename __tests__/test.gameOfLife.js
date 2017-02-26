import { createField, collectCells, step } from '../gameOfLife';

test('Create game field with specified size', () => {
  const field = createField(10);
  expect(field.length).toBe(10);
});

test('Collect cells near with specified cell', () => {
  const field = createField(10);
  expect(collectCells(field, 11, 0).length).toBe(0);
  expect(collectCells(field, 0, 0).length).toBe(3);
  expect(collectCells(field, 5, 5).length).toBe(8);
});

test('Make one iteration games', () => {
  const field1 =
    [[0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0],
     [0, 1, 1, 1, 0],
     [0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0]];
  const field2 = step(field1);
  const field3 = step(field2);
  expect(field2).toEqual(
    [[0, 0, 0, 0, 0],
     [0, 0, 1, 0, 0],
     [0, 0, 1, 0, 0],
     [0, 0, 1, 0, 0],
     [0, 0, 0, 0, 0]]);
  expect(field3).toEqual(field1);
});
