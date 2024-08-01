let boxs = document.querySelectorAll(".card");
let msg = document.querySelector(".result");
let mainBox = document.querySelector(".mainBox");
let turn = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const player1 = "♡",
      player2 = "x"





boxs.forEach((box)=> {
    box.addEventListener("click", ()=> {
        if(turn) {
            box.style.color = "rgb(241, 76, 104)"
            box.innerHTML= "♡";
            turn = false;
            msg.innerText = `Player : ${player2}`
        }
        else {
            box.innerText="x";
            box.style.color = "rgb(68, 15, 26)";
            turn = true;
            msg.innerText = `Player : ${player1}`
        }
        box.disabled = true;
        checkWinner();
    })
});

let noWins = 0;

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="") {
            if(pos1===pos2 && pos2===pos3) {
                newGame(pos1);
            }
        }
    }
    noWins++;

    if(noWins===9) newGame();

}

const newGame = (winner) => {
    let msgText = "";
    if(winner=== '♡') msgText = "Love Wins";
    else msgText = "Hate Wins";

    if(noWins===9) {
        const lose = "Oops! No one wins"
        mainBox.innerHTML = `
        <div  class="resultBox"  id="mainBox">
            <div class="resultMsg">
                ${lose}
            </div>
            <button onClick="reloadTheGame()" class="btn">Guys wanna Play Again!</button>
        </div>
    `;
    }
    else {
    mainBox.innerHTML = `
    <div class="resultBox" id="mainBox">
        <div class="resultMsg">
            ${msgText}
        </div>
        <button onClick="reloadTheGame()" class="btn">Guys wanna Play Again!</button>
    </div>
    `;
    }
}

const reloadTheGame = () => {
    window.location.reload()
}

