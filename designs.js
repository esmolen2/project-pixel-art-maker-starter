//Canvas element variable
const pixelCanvas = document.querySelector('#pixelCanvas');

// Select color input
const inputColor = document.querySelector('#colorPicker');
function colorPixel(event) {
  event.target.style.backgroundColor = inputColor.value;
};
pixelCanvas.addEventListener('mousedown', colorPixel);

// Select size input
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');

// When size is submitted by the user, create appropriate sized grid
function makeGrid(event) {
    event.preventDefault();
    if (pixelCanvas.rows.length === 0) {
      for (let i = 1; i <= inputHeight.value; i++) {
          const newRow = document.createElement('tr');
          pixelCanvas.appendChild(newRow);
          for (let j = 1; j <= inputWidth.value; j++) {
            const newColumn = document.createElement('td');
            newRow.appendChild(newColumn);
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
            }
        };
    };
}

sizePicker.addEventListener('submit', makeGrid);
