const d = document;
const divTime = d.querySelector("#time");
const resetBtn = d.querySelector(".btn-reset");
const startBtn = d.querySelector(".btn-start");
const spanTime = d.querySelector(".spanTime");
const typingContent = d.querySelector("#typing");
const challenge = d.querySelector(".container-text p");
const pos = d.querySelector(".player-pos");
const val = "Había un niño que tenía muy mal carácter. Un día, su padre le dio una bolsa con clavos y le dijo que cada vez que perdiera la calma, clavase un clavo en la cerca del patio de la casa. El primer día, el niño clavó 37 clavos. Al día siguiente, menos, y así el resto de los días. Él pequeño se iba dando cuenta que era más fácil controlar su genio y su mal carácter que tener que clavar los clavos en la cerca. Finalmente llegó el día en que el niño no perdió la calma ni una sola vez y fue alegre a contárselo a su padre. ¡Había conseguido, finalmente, controlar su mal temperamento! Su padre, muy contento y satisfecho, le sugirió entonces que por cada día que controlase su carácter, sacase un clavo de la cerca. Los días pasaron y cuando el niño terminó de sacar todos los clavos fue a decírselo a su padre.";
var contt = 0;
var conts = 3;

d.addEventListener("DOMContentLoaded", (e) => {

    // Init
    init_box();



    // Function time counter from 0
    function time() {
        let inter = setInterval(() => {

            if (typingContent.value.length === val.length && typingContent.value === val) {
                clearInterval(inter);
                pos.style.display = "block";
                typingContent.disabled = true;
                setTimeout(() => {
                    pos.style.display = "none";
                    contt = 0;
                    conts = 3;
                    typingContent.value = '';
                }, 2000)
                return false;
            } else {

                typingContent.disabled = false;
                typingContent.focus();
                contt++
                divTime.innerHTML = contt;
                console.log("Time: " + contt);
                return inter;
            }
        }, 1000)
    }
    // Function time counter from 0

    // Function start counter from 3
    function start() {
        let interval = setInterval(() => {
            if (conts > 0) {
                conts--;
                spanTime.innerHTML = conts;
                return true;
            } else {
                clearInterval(interval);
                return false;
            }
        }, 1000);
        setTimeout(() => {
            time();
        }, 3000)
    }
    // Function start counter from 3

    // Function init
    function init_box() {
        challenge.innerHTML = val;
        if (contt === 0) {
            typingContent.disabled = true;
            return true;
        }
    }



    // Evntlistener
    startBtn.addEventListener("click", (e) => {
        start();
    })

    d.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
            win();
        }
    })
    // Evntlistener


})