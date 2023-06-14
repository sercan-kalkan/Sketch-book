//changing background color with mouse clicks
/*
let newColor = document.querySelectorAll(".row");
          for (const color of newColor) {
            color.addEventListener("mouseover",() => {
                color.style.background = 'black';
            });
          }

//ask user the number of squares for both sides
//document.getElementById("clickMe").onclick = function () { alert('hello!'); };
document.getElementById('ask').onclick = function () {
    let squareNumber = Number(prompt("How many squares do you want?"));
    console.log(typeof(squareNumber));
     if(squareNumber>100) {
        alert('You must choose a number smaller than 100')
     }

*/
let columns =50;
let rows =50;
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
