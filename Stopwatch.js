//Vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Var to hold set Interrval function
let interval = null;

//Var to hold stopwatch status
let status = "stopped";

//Stopwawtch function (Determination of when to increment next value etc.)
function stopWatch(){

  seconds++;

  //Logic to determine when to increment next value
  if (seconds / 60 === 1){
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1){
      minutes = 0;
      hours++;
    }
  }
  // Add leading zero

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  }
  else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  }
  else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  }
  else {
    displayHours = hours;
  }
  
  //Display time values to user

  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


function startStop (){

  if (status === "stopped") {
    //start the stopwatch by calling the setInterval() function
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started";
  }
  else{

    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}

// function to reset the stopwatch
function reset(){

  window.setInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}

