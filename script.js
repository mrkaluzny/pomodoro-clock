var sessionLength = 25;
var breakLength = 5;

if (changedSth == true) {
  console.log("New branch");
} else {
  alert("Old branch");
}

$(document).ready(function(){
   $(".switchAddSession").on("click", function(){
       sessionLength += 1;
       $("#timer-session").text(sessionLength);
       $("#timeLeft").text(sessionLength);
   });

    $(".switchDeduceSession").on("click", function(){
       if (sessionLength > 1){
            sessionLength -= 1;
        } else {
            sessionLength = 1;
        }
       $("#timer-session").text(sessionLength);
        $("#timeLeft").text(sessionLength);
   });

    $(".switchAddBreak").on("click", function(){
       breakLength += 1;
       $("#timer-break").text(breakLength);
   });

    $(".switchDeduceBreak").on("click", function(){
        if (breakLength > 1){
            breakLength -= 1;
        } else {
            breakLength = 1;
        }
       $("#timer-break").text(breakLength);
   });

    $('.countdown-clock').on('click', function(){

    });

});
