export default(array, id) => {
  document.getElementById(id).innerHTML = '';
  const newTable = document.createElement('table');
  newTable.className = 'game-field';
  const gameFieldContainer = document.getElementById(id);
  gameFieldContainer.appendChild(newTable);
  array.forEach((line) => {
    const curRow = newTable.insertRow();
    line.forEach((elem) => {
      const curCell = curRow.insertCell();
      curCell.className = elem ? 'field-cell-black' : 'field-cell-white';
    });
  });
};
