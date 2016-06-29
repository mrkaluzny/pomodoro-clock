var sessionLength = 25;
var breakLength = 5;

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