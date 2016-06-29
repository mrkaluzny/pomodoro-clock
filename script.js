var sessionLength = 25;
var breakLength = 5;
var alarm = new Audio('alarm.mp3');
var loop = 0;


function addSessionTime() {
       sessionLength += 1;
       $("#timer-session").text(sessionLength);
       $("#timeLeft").text(sessionLength);
    clearInterval(countInt);
}

function deduceSessionTime() {
    if (sessionLength > 1){
        sessionLength -= 1;
    } else {
        sessionLength = 1;
    }
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
    clearInterval(countInt);
}

function deduceBreakTime() {
    if (breakLength > 1){
        breakLength -= 1;
    } else {
        breakLength = 1;
    }
    $("#timer-break").text(breakLength);
    clearInterval(countInt);
}

function addBreakTime(){
    breakLength += 1;
    $("#timer-break").text(breakLength);
    clearInterval(countInt);
}

function startTimer() {
    minutes = sessionLength;
    seconds = 0;
    countDown(sessionLength, seconds);
}

function countDown(m,s) {
    countInt = setInterval(function(){
    timeLeft;
        
    if (m == 0 && s == 0) {
        clearInterval(countInt);
        if (loop == 0) {
            timeLeft = breakLength;
            loop += 1;
            $('#sessionName').text('Current Break');
        } else {
            timeLeft = sessionLength;
            loop -= 1;
            $('#sessionName').text('Current Session');
        }
        alarm.play();
        countDown(timeLeft,0);
    } else if (s != 0) {
        if (s <= 10){
            s -= 1;
            timeLeft = m + ':0' + s;
        } else {
            s -= 1;
            timeLeft = m + ':' + s;
        }
    } else if (s == 0) {
        s = 59;
        m -= 1;
        timeLeft = m + ':' + s;
    }
        $('#timeLeft').text(timeLeft);
        
    }, 1000);
}

function reset() {
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
    $("#timer-break").text(breakLength);
    clearInterval(countInt);
}