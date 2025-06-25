const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const numCount = document.getElementById("numCount");
const congratsP = document.getElementById("congratsP");
const bear = document.getElementById("chubbyBear");
let count = 0

increaseBtn.onclick = function() {
    count++;
    numCount.textContent = count;

    if (count >= 100) {
        congratsP.textContent = "Congratulations you win a chibi bear eating a cookie!"
        bear.style.display = "block";
    }
    else {
        congratsP.textContent = "Keep going."
        bear.style.display = "none";
    }
}

decreaseBtn.onclick = function(){
    count--;
    numCount.textContent = count;

    if (count <= -100) {
        congratsP.textContent = "Why would you do that?"
    }
    else {
        congratsP.textContent = "Don't"
    }
}

resetBtn.onclick = function() {
    count = 0
    numCount.textContent = count;
    congratsP.textContent = "Let's start again."
}



