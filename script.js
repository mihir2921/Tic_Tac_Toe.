const newGameBtn = document.querySelector(".reset")
const boxes = document.querySelectorAll(".box")
const winnerMsg = document.querySelector(".msg")
const resetBtn =  document.querySelector(".reset")
const winningPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]]
let turnX = true


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked")
        if (turnX) {
            box.innerText = "X"
            turnX = false
            box.style.color="green"
        }
        else {
            box.innerText = "O"
            turnX = true
        }
        box.disabled = true
        box.style.cursor = 'not-allowed'
        checkWinner();
        checkTie();


    })
})

const disableBox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const checkTie = () => {
    let isTie = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isTie = false;
        }
    });
    if (isTie && !winnerMsg.innerText) {
        winnerMsg.innerText = "It's a tie!";
    }
}
const checkWinner = () => {

    for (let pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                winnerMsg.innerText = `Congratulation The Winner is ${pos1} !!`
                disableBox();
                return;
}}}}

resetBtn.addEventListener("click",()=>{
    turnX=true;
    winnerMsg.innerText=""
    boxes.forEach((box)=>{
        box.innerText=""
    })
})