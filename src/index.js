import { makeBlinker, makePulsar, makeGosperGliderGun } from './createField';
import { step } from './gameOfLife';
import render from './render';


const main = (period) => {
  const startField = makeGosperGliderGun();

  const updateField = (field) => {
    render(field, 'game-field-container');
    const newField = step(field);

    setTimeout(updateField, period, newField);
  };
  setTimeout(updateField, period, startField);
};

window.onload = main(100);
