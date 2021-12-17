const container = document.querySelector('.container');

createGrid(16);

function createGrid(size) {
  i = 1
  // create rows
  while (i <= size) {
    const row = document.createElement('div');
    row.classList.toggle('row');
    container.appendChild(row);

    i++
  }

  const rows = document.querySelectorAll(".row");
  // create cells for each row
  rows.forEach(row => {
    i = 1
    while (i <= size) {
      const cell = document.createElement('div');
      cell.classList.toggle('cell');
      row.appendChild(cell);

      i++
    }
  })
  cellEventListen();
}

function cellEventListen() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', (e) => {
      // when a specific cell is targeted, change its color
      e.target.setAttribute("style",  "background-color: black");
    })
  })
}

const gridSizeBtn = document.querySelector('.gridBtn');
gridSizeBtn.addEventListener('click', () => {
  let size = prompt("Enter a grid size: ")
  while (size > 100) {
    size = prompt("Please enter a value less than or equals to 100: ");
  }
  removeAllChildNodes(container);
  createGrid(size);
})

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}