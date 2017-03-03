import { step } from './gameOfLife';

export default class {
  constructor(state, containerId) {
    this.state = state;
    this.speed = 700;
    this.containerId = containerId;
    const createField = () => {
      this.render();
      this.updateState();
    };
    setInterval(createField, this.speed);
  }

  speedUp() {
    this.speed = this.speed - 250; // TODO minimal speed value
  }

  speedDown() {
    this.speed = this.speed + 50;
  }

  setState(state) {
    this.state = state;
  }

  updateState() {
    this.state = step(this.state);
  }

  render() {
    const gameFieldContainer = document.getElementById(this.containerId);
    gameFieldContainer.innerHTML = '';
    const newTable = document.createElement('table');
    newTable.className = 'game-field';
    gameFieldContainer.appendChild(newTable);
    this.state.forEach((line) => {
      const curRow = newTable.insertRow();
      line.forEach((elem) => {
        const curCell = curRow.insertCell();
        curCell.className = elem ? 'field-cell-black' : 'field-cell-white';
      });
    });
  }


}
