const bombe = [];
const boardContainer = document.querySelector(".container")
const cella = document.querySelector(".box")
const boardCell = 0;
let randomNumber;
let i = 1;
let a= 1; 
while( i <= 100 ){
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("box");
    boardCell.addEventListener("click", function() {
        this.classList.add("color")
    })
    boardContainer.append(boardCell);

    while(a <= 16 ){
        let randomNumber = Math.floor(Math.random()*100);
        bombe.includes(randomNumber);
        bombe.push(randomNumber);
        a++;
    }
    
     while (bombe.includes(boardCell)){
        console.log("bomba")
    }

    i++;
}
// cella.includes(bombe(a)).addEventListener("click", function(){
//     cella.classList.add("colorsecondary")
// })
console.log(bombe)

