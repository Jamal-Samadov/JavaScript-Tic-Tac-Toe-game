
let playerText = document.querySelector('#player')
let blocks = document.querySelectorAll('.block')
let error = document.querySelector('#error')
let player = "X"
let gameOver = false;
let winner;

function startGame() {
    playerText.textContent = `${player}'s turn !`
    blocks.forEach(block => block.addEventListener('click', () => chooseArea(block)))
}
startGame()

function chooseArea(block) {
    if(block.textContent === ""){
        block.textContent = player
        if(player === "0"){
            block.style.color="red"
        }
    turnPlayer()
    } else{
        error.textContent="It is not empty. Please choose other area"
        block.style.border = "2px solid red"
        setTimeout(() => {
            error.textContent=""
            block.style.border = "1px solid black"
        }, 1200);
    }
    checkWin()
    checkEqual()

    if(gameOver){
        playerText.textContent=`Game is over. ${winner}'s Won. Congratulations !`
        blocks.forEach(block => block.style.pointerEvents = "none")
    }
}

function turnPlayer() {
    if(player == "X"){
        player = "0"
        playerText.textContent=`${player}'s turn !`
        return;
    }
    else if(player == "0"){
        player = "X"
        playerText.textContent=`${player}'s turn !`
    }

}

function checkWin(){
    checkRows()
    checkColumns()
    checkDiagonals()
    checkEqual()
}

function checkEqual(){

}

function checkRows(){
    let row1 = blocks[0].textContent==blocks[1].textContent && 
    blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    let row2 = blocks[3].textContent==blocks[4].textContent && 
    blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== ""
    let row3 = blocks[6].textContent==blocks[7].textContent && 
    blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== ""

    if(row1 || row2 || row3){
        gameOver = true
    }
    if(row1) return winner = blocks[0].textContent
    if(row2) return winner = blocks[3].textContent
    if(row3) return winner = blocks[6].textContent
}

function checkColumns(){
    let col1 = blocks[0].textContent==blocks[3].textContent && 
    blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== ""
    let col2 = blocks[3].textContent==blocks[0].textContent && 
    blocks[3].textContent == blocks[6].textContent && blocks[3].textContent !== ""
    let col3 = blocks[6].textContent==blocks[3].textContent && 
    blocks[6].textContent == blocks[0].textContent && blocks[6].textContent !== ""

    if(col1 || col2 || col3){
        gameOver = true
    }
    if(col1) return winner = blocks[0].textContent
    if(col2) return winner = blocks[3].textContent
    if(col3) return winner = blocks[6].textContent
}

function checkDiagonals(){
    let diag1 = blocks[0].textContent==blocks[4].textContent && 
    blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== ""
    let diag2 = blocks[4].textContent==blocks[8].textContent && 
    blocks[4].textContent == blocks[0].textContent && blocks[4].textContent !== ""
    let diag3 = blocks[8].textContent==blocks[4].textContent && 
    blocks[8].textContent == blocks[0].textContent && blocks[8].textContent !== ""

    if(diag1 || diag2 || diag3){
        gameOver = true
    }
    if(diag1) return winner = blocks[0].textContent
    if(diag2) return winner = blocks[3].textContent
    if(diag3) return winner = blocks[6].textContent
}
function checkEqual(){
    let value = [];
    blocks.forEach(blocks => value.push(blocks.textContent))
    if(!value.includes("")){
        playerText.textContent = `Equal! Let's a play a new game`
        blocks.forEach(block => block.style.pointerEvents= "none")
    }
}