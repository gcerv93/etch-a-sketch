const container = document.querySelector('.container');

function createGrid(size) {
  i = 1
  while (i <= size) {
    const row = document.createElement('div');
    row.classList.toggle('row');
    container.appendChild(row);

    i++
  }

  const rows = document.querySelectorAll(".row");
  rows.forEach(row => {
    i = 1
    while (i <= size) {
      const cell = document.createElement('div');
      cell.classList.toggle('cell');
      row.appendChild(cell);

      i++
    }
  })
}

createGrid(16);