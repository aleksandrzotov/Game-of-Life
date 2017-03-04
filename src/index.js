import { makePulsar, makeBlinker, makeGosperGliderGun } from './libraryFigures';
import { GameOfLife } from './gameOfLife';


window.onload = () => {
  const game = new GameOfLife(makePulsar(), 'game-field-container');
  document.getElementById('blinker').onclick = game.setState.bind(game, makeBlinker());
  document.getElementById('pulsar').onclick = game.setState.bind(game, makePulsar());
  document.getElementById('glider-gun').onclick = game.setState.bind(game, makeGosperGliderGun());
  document.getElementById('speedUp').onclick = game.speedUp.bind(game);
  document.getElementById('speedDown').onclick = game.speedDown.bind(game);
  document.getElementById('pause').onclick = game.pauseGame.bind(game);
};
