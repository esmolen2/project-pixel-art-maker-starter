// Select color input
const inputColor = document.querySelector('#colorPicker');

// Select size input
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');

//Canvas element variable
const pixelCanvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    event.preventDefault();
    if (pixelCanvas.rows.length === 0) {
      for (let i = 1; i <= inputHeight.value; i++) {
          const newRow = document.createElement('tr');
          pixelCanvas.appendChild(newRow);
          for (let j = 1; j <= inputWidth.value; j++) {
            const newColumn = document.createElement('td');
            newRow.appendChild(newColumn);
            newColumn.addEventListener('click', function () {
              newColumn.style.backgroundColor = inputColor.value;
            });
          }
      };
    } else {
        for (let h = pixelCanvas.rows.length; h > 0; h--) {
          pixelCanvas.deleteRow(0);
        };
        for (let i = 1; i <= inputHeight.value; i++) {
            const newRow = document.createElement('tr');
            pixelCanvas.appendChild(newRow);
            for (let j = 1; j <= inputWidth.value; j++) {
              const newColumn = document.createElement('td');
              newRow.appendChild(newColumn);
              newColumn.addEventListener('click', function () {
                newColumn.style.backgroundColor = inputColor.value;
              });
            }
        };
    };
}

sizePicker.addEventListener('submit', makeGrid);
