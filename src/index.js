import { makePulsar } from './createField';
import { step } from './gameOfLife';
import render from './render';


const main = () => {
  const startField = makePulsar();

  const updateField = (field) => {
    render(field, 'game-field-container');
    const newField = step(field);

    setTimeout(updateField, 500, newField);
  };
  setTimeout(updateField, 500, startField);
};

window.onload = main;
