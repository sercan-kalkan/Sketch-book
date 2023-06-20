 
const button = document.getElementById('create');
button.addEventListener('click',askSquareNumber);

let columns;
let rows;

//creating default sketch area 16*16 squares
const height = `${(640/16)}px`//define height of square divs
for (let i = 0; i < 16; ++i) {
    let column = document.createElement('div'); // create column
    column.classList.add('column');
    column.style.setProperty("height", height)
    rows = columns;
    for (let j = 0; j < 16; ++j) {
        let row = document.createElement('div'); // create row
        row.classList.add('row');
        row.style.setProperty("height", height)
        column.appendChild(row); // append row in column
      
    }
    let sketch= document.getElementById('sketch');
    sketch.appendChild(column); // append column inside grid
    painting()
  }



//asking the user square numbers
function askSquareNumber() {
    columns = Number(prompt("How many squares do you want?"));
    console.log(typeof(columns));
    if(columns>100) {
    alert('You must choose a number smaller than 100')
 }
const freeSpace = document.getElementById('sketch');
freeSpace.innerHTML=""
createSketch(columns, rows);
}

//get the square number from user and create the sketch area
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
        painting()
      }
}

//painting the divs in the sketch book when mouse over
function painting () {
    let color = document.querySelectorAll('.row');
    for(let element of color) {
    element.addEventListener('mouseover',() => {
        element.style.background='red';
    });
}
console.log("painting")
}


