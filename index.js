const d = document;
const divTime = d.querySelector("#time");
const resetBtn = d.querySelector(".btn-reset");
const startBtn = d.querySelector(".btn-start");
const spanTime = d.querySelector(".spanTime");
const typingContent = d.querySelector("#typing");
const challenge = d.querySelector(".container-text p");
const pos = d.querySelector(".player-pos");
var clickStart = 0;
const val = "Write this text exactly as fast as you can to know if you're the fastest in this game!.";
var contt = 0;
var conts = 3;
d.addEventListener("DOMContentLoaded", (e) => {

    // Init
    init_box();



    // Function time counter from 0
    function time() {
        let inter = setInterval(() => {
            if (typingContent.value.length != val.length) {
                contt++
                divTime.innerHTML = contt;
                return true;
            } else if (typingContent.value.length == val.length && typingContent.value != val) {
                pos.innerHTML = "Lose";
                pos.style.display = "block";
                typingContent.disabled = true;
                setTimeout(() => {
                    pos.style.display = "none";
                    contt = 0;
                    conts = 3;
                    clickStart = 0;
                    divTime.innerHTML = contt;
                    typingContent.value = '';
                }, 5000)
                clearInterval(inter);
                return false;

            } else if (typingContent.value.length === val.length && typingContent.value === val) {
                pos.style.display = "block";
                typingContent.disabled = true;
                setTimeout(() => {
                    pos.style.display = "none";
                    contt = 0;
                    conts = 3;
                    clickStart = 0;
                    divTime.innerHTML = contt;
                    typingContent.value = '';
                }, 5000)
                clearInterval(inter);
                return false;
            }
        }, 1000)
    }
    // Function time counter from 0

    // Function start counter from 3
    function start() {
        clickStart++;
        if (clickStart <= 1) {

            let interval = setInterval(() => {
                if (conts > 0) {
                    conts--;
                    spanTime.innerHTML = conts;
                    return true;
                } else {
                    conts = 3;
                    spanTime.innerHTML = conts;
                    typingContent.disabled = false;
                    typingContent.focus();
                    clearInterval(interval);
                    return false;
                }
            }, 1000);
            setTimeout(() => {
                time();
            }, 3000)
        } else {

            return false;
        }
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



    // Evntlistener


})