import { makePulsar } from './createField';
import { step } from './gameOfLife';
import render from './render';


const configurateMain = (builder, period) => {
  const main = () => {
    const startField = builder();
    const updateField = (field) => {
      render(field, 'game-field-container');
      const newField = step(field);
      setTimeout(updateField, period, newField);
    };
    setTimeout(updateField, period, startField);
  };
  return main;
};

window.onload = configurateMain(makePulsar, 150);
