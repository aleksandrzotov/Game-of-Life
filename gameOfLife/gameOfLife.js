import { makeField } from './makeField';
import { step } from './step';

const curField = makeField(10);

const gameOfLife = (field) => {
  let stepCount = 0;
  while (stepCount < 20) {
    console.log(field);
    const newField = step(field);
    field = newField.slice();
    stepCount += 1;
  }
};
gameOfLife(curField);
