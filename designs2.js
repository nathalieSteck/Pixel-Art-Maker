// Select color input
var colorPicker = document.getElementById('#colorPicker'); // user selects cell color

// Select size input
var height = document.getElementById(''#inputHeight'); // user defines grid Height
var width = document.getElementById(''#inputwidth'); // user defines grid Width

sizePicker.addEventListener('submit', function(event) { // event listener added to submit button
  event.preventDefault(); // prevent page refresh
  console.log('The submit button was clicked');
makeGrid(); // When size is submitted by the user, call makeGrid()
});


function makeGrid(){
var canvasHeight = document.getElementById('#inputHeight').value;
var canvasWidth = document.getElementById('#inputWidth').value;

for (var i = 0; i < canvasHeight; i++) { // adding new rows acc. to user input
  var newRows = document.createElement('tr');
  pixelCanvas.appendChild(newRows);

    for (var x = 0; x < canvasWidth; x++) { // adding new columns acc. to user input
        var newCells = document.createElement('td');
        newRows.appendChild(newCells);

        newCells.addEventListener('click', function(){ // event listener added to each cell
          var color = colorPicker.value; // adding color acc. to user input
          this.style.backgroundColor = color;
    });
}
  document.body.appendChild(canvas);
  pixelCanvas.addEventListener('click', respondToTheClick)  // event listener added to canvas
}
