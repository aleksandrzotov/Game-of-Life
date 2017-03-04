import { makePulsar, makeBlinker } from './libraryFigures';
import { GameOfLife } from './gameOfLife';


window.onload = () => {
  const game = new GameOfLife(makePulsar(), 'game-field-container');
  document.getElementById('blinker').onclick = () => {
    game.setState(makeBlinker());
  };
  document.getElementById('speedUp').onclick = () => {
    // console.log(game.state);
    game.speedUp();
  };
};
