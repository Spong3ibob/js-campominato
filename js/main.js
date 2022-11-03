const bombe = [];
const boardContainer = document.querySelector(".container")
const cella = document.querySelector(".box")

for(let i = 1; i <= 100; i++){
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("box");
    boardCell.addEventListener("click", function() {
        this.classList.add("color")
    })
    boardContainer.append(boardCell);

    for(let i= 1; i <= 16; i++){
        let randomNumber = Math.floor(Math.random()*100);
        bombe.includes(randomNumber);
        bombe.push(randomNumber);
    }

    boardCell.includes(randomNumber).addEventListener("click", function(){
        cella.classList.add("colorsecondary")
    })
}


