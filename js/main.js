let randInt = Math.floor(Math.random()*10);

console.log(randInt);
const boardContainer = document.querySelector(".container")

for(let i = 1; i <= 100; i++){
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("box");
    boardCell.addEventListener("click", function() {
        console.log(this.innerHTML)
        this.classList.add("color")
    })
    boardContainer.append(boardCell);
}
