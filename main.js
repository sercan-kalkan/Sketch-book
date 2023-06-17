//changing background color with mouse clicks
/*
let newColor = document.querySelectorAll(".row");
          for (const color of newColor) {
            color.addEventListener("mouseover",() => {
                color.style.background = 'black';
            });
          }
*/
//create user the number of squares for both sides

const button = document.getElementById('create');
button.addEventListener('click',askSquareNumber);
button.addEventListener('click',createSketch);

let columns;
let rows;


function askSquareNumber() {
    columns = Number(prompt("How many squares do you want?"));
    console.log(typeof(columns));
    if(columns>100) {
    alert('You must choose a number smaller than 100')
 }
const freeSpace = document.getElementById('sketch');
freeSpace.innerHTML=""
sketch.inner
createSketch(columns, rows);
}


function createSketch (columns, rows) {
    const height = `${(640/columns)}px`//define height of square divs
    for (let i = 0; i < columns; ++i) {
        let column = document.createElement('div'); // create column
        column.classList.add('column');
        column.style.setProperty("height", height)
        rows = columns;
        for (let j = 0; j < rows; ++j) {
            let row = document.createElement('div'); // create row
            row.classList.add('row');
            row.style.setProperty("height", height)
            column.appendChild(row); // append row in column
          
        }
        let sketch= document.getElementById('sketch');
        sketch.appendChild(column); // append column inside grid
      }
}
/*

let columns =25;
let rows =25;

const height = `${(640/rows)}px`//define height of square divs

for (let i = 0; i < columns; ++i) {
  let column = document.createElement('div'); // create column
  column.classList.add('column');
  column.style.setProperty("height", height)

  for (let j = 0; j < rows; ++j) {
      let row = document.createElement('div'); // create row
      row.classList.add('row');
      row.style.setProperty("height", height)
      column.appendChild(row); // append row in column
    
  }
  let sketch= document.getElementById('sketch');
  sketch.appendChild(column); // append column inside grid
}
*/

//adding squares to sketch
/*
     for(let j=10; j<16; j++) {
        for(let i=10; i<squareNumber; i++) {
            const container = document.getElementById('container');
            const div = document.createElement('div');
            container.appendChild(div).classList.add('row');
        }
    }
}*/
