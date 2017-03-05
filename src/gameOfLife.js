export const countLiveNeighbors = (field, x, y) => {
  const range = [-1, 0, 1];
  const neighbors = range.map(dy => range.map((dx) => {
    if (dx === 0 && dy === 0) {
      return undefined;
    }
    return field[y + dy] && field[y + dy][x + dx];
  }));
  return [].concat(...neighbors).filter(item => item).length;
};

export const step = (field) => {
  const changeCell = (cell, x, y) => {
    const liveNeighbors = countLiveNeighbors(field, x, y);
    const mustDie = (liveNeighbors < 2) || (liveNeighbors > 3);
    const spawning = !cell && (liveNeighbors === 3);
    return spawning || (cell && !mustDie);
  };
  return field.map((line, y) => line.map((cell, x) => changeCell(cell, x, y)));
};


export class GameOfLife {
  constructor(state, containerId) {
    this.state = state;
    this.interval = 800;
    this.containerId = containerId;
    this.pause = false;
    this.intervalId = setInterval(this.createField.bind(this), this.interval);
  }
  createField() {
    this.setState(step(this.state));
  }

  speedUp() {
    clearInterval(this.intervalId);
    this.interval = this.interval <= 150 ? this.interval : this.interval - 100;
    this.intervalId = setInterval(this.createField.bind(this), this.interval);
  }

  speedDown() {
    clearInterval(this.intervalId);
    this.interval = this.interval + 100;
    this.intervalId = setInterval(this.createField.bind(this), this.interval);
  }

  pauseGame() {
    if (this.pause) {
      this.intervalId = setInterval(this.createField.bind(this), this.interval);
    } else {
      clearInterval(this.intervalId);
    }
    this.pause = !this.pause;
  }

  setState(state) {
    this.state = state;
    this.render();
  }

  render() {
    const gameFieldContainer = document.getElementById(this.containerId);
    gameFieldContainer.innerHTML = '';
    const newTable = document.createElement('table');
    switch (this.state.length) {
      case 5:
        newTable.className = 'blinker';
        break;
      case 17:
        newTable.className = 'pulsar';
        break;
      case 24:
        newTable.className = 'glider-gun';
        break;
    }
    gameFieldContainer.appendChild(newTable);
    this.state.forEach((line) => {
      const curRow = newTable.insertRow();
      line.forEach((elem) => {
        const curCell = curRow.insertCell();
        curCell.className = elem ? 'cell-black' : 'cell-white';
      });
    });
  }
}
