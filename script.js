var sessionLength = 25;
var breakLength = 5;
var alarm = new Audio('alarm.mp3');
var loop = 0;

function btnReset() {
    $('#sessionName').text('Current Session');
    clearInterval(countInt);
}


function addSessionTime() {
    sessionLength += 1;
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
    btnReset();
}

function deduceSessionTime() {
    if (sessionLength > 1){
        sessionLength -= 1;
    } else {
        sessionLength = 1;
    }
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
    btnReset();
}

function deduceBreakTime() {
    if (breakLength > 1){
        breakLength -= 1;
    } else {
        breakLength = 1;
    }
    $("#timer-break").text(breakLength);
    btnReset();
}

function addBreakTime(){
    breakLength += 1;
    $("#timer-break").text(breakLength);
    btnReset();
}

function startTimer() {
    seconds = 0;
    countDown(sessionLength, seconds);
}

function countDown(m,s) {
    countInt = setInterval(function(){
        
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
    sessionLength = 25;
    breakLength = 5;
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
    $("#timer-break").text(breakLength);
    btnReset();
}