let container = document.querySelector("#container");




function makeGrids() {
  let sizeUser = Number(prompt("Enter the grid length: "));
  let size = 0;
  if(sizeUser < 100){
    size = sizeUser;
  }else{
    alert("Size must be less than 100, please try again!");
  }
  let screen = document.querySelector(".sketch-screen");
  screen.innerHTML = ""

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");

      row.addEventListener("mouseover", () => {
            let randomColor = "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");

            row.style.backgroundColor = randomColor;
        });

      row.style.border = "1px solid black";
      column.appendChild(row);
    }
    screen.appendChild(column);
  }
}

let btn = document.querySelector("#newSketch");
btn.addEventListener("click", makeGrids)

