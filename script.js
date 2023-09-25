function makeBubble() {

    let bubble = "";
    for (var i = 0; i <= 151; i++) {

        var run = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${run}</div>`

        document.querySelector(".sfoot").innerHTML = bubble;
    }
}
makeBubble();

// -------------------------------------------------------- 

function timerVal() {
    var time = 60;


    var timer = setInterval(function() {
        if (time > 0) {
            time--
        } else {
            clearInterval(timer);
            document.querySelector(".sfoot").innerHTML = `<h1>Game Over!  ${score}</h1>`;
        }

        document.querySelector("#timeValue").innerHTML = time;
    }, 1000);
}
timerVal();

// ------------------------------------------------------------
var Hitrn = 0;

function hitVal() {
    Hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = Hitrn;
}

hitVal();

//--------------------------------------------------------------

var score = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

// --------------------------------------------------------------

document.querySelector(".sfoot").addEventListener("click", function(dets) {
    var clickedNum = (Number(dets.target.textContent))
    if (clickedNum === Hitrn) {
        increaseScore();
        makeBubble();
        hitVal();
    }
});