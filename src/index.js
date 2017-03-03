import { makePulsar, makeBlinker } from './createField';
import Main from './main';


window.onload = () => {
  const game = new Main(makePulsar(), 'game-field-container');
  document.getElementById('blinker').onclick = () => {
    game.setState(makeBlinker());
  };
};
