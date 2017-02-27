export default(array, id) => {
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
      if (line[j]) {
        curCell.className = 'field-cell-black';
      } else {
        curCell.className = 'field-cell-white';
      }
    }
  }
};
