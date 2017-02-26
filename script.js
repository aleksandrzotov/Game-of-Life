const createField = size =>
  Array.from(Array(size)).map(() => Array.from(Array(size)).map(() => 0));

const collectCells = (field, x, y) => {
  if (x >= field[0].length || y >= field.length) {
    return [];
  }
  return field.reduce((acc, line, curY) =>
  line.reduce((curAcc, cell, curX) => {
    if (curX === x && curY === y) {
      return acc;
    } else if ((curX <= x + 1 && curX >= x - 1) && (curY <= y + 1 && curY >= y - 1)) {
      acc.push(cell);
      return acc;
    }
    return acc;
  }, acc), []);
};

const step = (field) => {
  const newField = field.map((line, y) => line.map((cell, x) => {
    const cellsAround = collectCells(field, x, y);
    const fate = cellsAround.reduce((acc, item) => acc + item, 0);
    if (cell === 0 && fate === 3) {
      cell = 1;
    } else if (cell === 1 && (fate < 2 || fate > 3)) {
      cell = 0;
    }
    return cell;
  }));
  return newField;
};


const render = (array, id) => {
  document.getElementById(id).innerHTML = '';
  const newTable = document.createElement('table');
  newTable.className = 'game-field';
  const gameFieldContainer = document.getElementById(id);
  gameFieldContainer.appendChild(newTable);
  for (let i = 0; i < array.length; i++) {
    const line = array[i];
    const curRow = newTable.insertRow(i);
    for (let j = 0; j < line.length; j++) {
      const curCell = curRow.insertCell(j);
      if (line[j] !== 0) {
        curCell.className = 'field-cell-black';
      } else {
        curCell.className = 'field-cell-white';
      }
    }
  }
};

const makeBlinker = () => {
  const field = createField(5);
  field[2][1] = 1;
  field[2][2] = 1;
  field[2][3] = 1;
  return field;
};

const makePulsar = () => {
  const field = createField(17);
  field[2][4] = 1;
  field[2][5] = 1;
  field[2][6] = 1;
  field[2][10] = 1;
  field[2][11] = 1;
  field[2][12] = 1;
  field[7][4] = 1;
  field[7][5] = 1;
  field[7][6] = 1;
  field[7][10] = 1;
  field[7][11] = 1;
  field[7][12] = 1;
  field[9][4] = 1;
  field[9][5] = 1;
  field[9][6] = 1;
  field[9][10] = 1;
  field[9][11] = 1;
  field[9][12] = 1;
  field[14][4] = 1;
  field[14][5] = 1;
  field[14][6] = 1;
  field[14][10] = 1;
  field[14][11] = 1;
  field[14][12] = 1;
  field[4][2] = 1;
  field[4][7] = 1;
  field[4][9] = 1;
  field[4][14] = 1;
  field[5][2] = 1;
  field[5][7] = 1;
  field[5][9] = 1;
  field[5][14] = 1;
  field[6][2] = 1;
  field[6][7] = 1;
  field[6][9] = 1;
  field[6][14] = 1;
  field[10][2] = 1;
  field[10][7] = 1;
  field[10][9] = 1;
  field[10][14] = 1;
  field[11][2] = 1;
  field[11][7] = 1;
  field[11][9] = 1;
  field[11][14] = 1;
  field[12][2] = 1;
  field[12][7] = 1;
  field[12][9] = 1;
  field[12][14] = 1;
  return field;
};

const makeGosperGliderGun = () => {
  const field = createField(38);
  field[1][25] = 1;
  field[2][23] = 1;
  field[2][25] = 1;
  field[3][13] = 1;
  field[3][14] = 1;
  field[3][21] = 1;
  field[3][22] = 1;
  field[3][35] = 1;
  field[3][36] = 1;
  field[4][12] = 1;
  field[4][16] = 1;
  field[4][21] = 1;
  field[4][22] = 1;
  field[4][35] = 1;
  field[4][36] = 1;
  field[5][1] = 1;
  field[5][2] = 1;
  field[5][11] = 1;
  field[5][17] = 1;
  field[5][21] = 1;
  field[5][22] = 1;
  field[6][1] = 1;
  field[6][2] = 1;
  field[6][11] = 1;
  field[6][15] = 1;
  field[6][17] = 1;
  field[6][18] = 1;
  field[6][23] = 1;
  field[6][25] = 1;
  field[7][11] = 1;
  field[7][17] = 1;
  field[7][25] = 1;
  field[8][12] = 1;
  field[8][16] = 1;
  field[9][13] = 1;
  field[9][14] = 1;
  return field;
};


const main = () => {
  const startField = makePulsar();

  const updateField = (field) => {
    render(field, 'game-field-container');
    const newField = step(field);


    setTimeout(updateField, 500, newField);
  };
  setTimeout(updateField, 500, startField);
};
