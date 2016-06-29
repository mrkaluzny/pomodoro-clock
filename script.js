var sessionLength = 25;
var breakLength = 5;
var countdown;
var timeLeft;
var seconds;
var minutes;

function addSessionTime (){
       sessionLength += 1;
       $("#timer-session").text(sessionLength);
       $("#timeLeft").text(sessionLength);
}

function deduceSessionTime(){
    if (sessionLength > 1){
        sessionLength -= 1;
    } else {
        sessionLength = 1;
    }
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
}

function deduceBreakTime() {
    if (breakLength > 1){
        breakLength -= 1;
    } else {
        breakLength = 1;
    }
    $("#timer-break").text(breakLength);
}

function addBreakTime(){
    breakLength += 1;
    $("#timer-break").text(breakLength);
}

function startTimer() {
    minutes = sessionLength;
    seconds = 0;
    countDown(sessionLength, seconds);
}

function countDown(m,s) {
    var countInt = setInterval(function(){
        var timeLeft;
    if (s == 0) {
        s = 59;
        m -= 1;
        timeLeft = m + ':' + s;
        $('#timeLeft').text(timeLeft);
    } else if (s != 0) {
        s -= 1;
        timeLeft = m + ':' + s;
        $('#timeLeft').text(timeLeft);
    } else if (s == 0 && m == 0) {
        alert('Done!');
        clearInterval(countInt);
    }   
    }, 1000);
}