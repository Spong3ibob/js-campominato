
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

const bombe = [];
for(let i= 1; i <= 16; i++){
    let randomNumber = Math.floor(Math.random()*100);
    bombe.includes(randomNumber);
    bombe.push(randomNumber);
}
console.log(bombe)