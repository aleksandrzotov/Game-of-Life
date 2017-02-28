import { makeBlinker, makePulsar, makeGosperGliderGun } from './createField';
import { step } from './gameOfLife';
import render from './render';


const main = () => {
  const startField = makeGosperGliderGun();

  const updateField = (field) => {
    render(field, 'game-field-container');
    const newField = step(field);

    setTimeout(updateField, 50, newField);
  };
  setTimeout(updateField, 50, startField);
};

window.onload = main;
