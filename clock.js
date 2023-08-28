let Name = document.getElementById("sec");
let MinDoc = document.getElementById("min");
let Hour = document.getElementById("hr");

// BUTTON

let inter = "";
let seconds = 0;
let min = 0;
let hours = 0;

function Begin() {
  inter = setInterval(Callme, 1000);
}

function Callme() {
  console.log("aaa");
  seconds++;
  if (seconds <= 59) {
    if (seconds <= 9) {
      Name.innerHTML = "0" + seconds;
    } else {
      Name.innerHTML = seconds;
    }
  } else if (seconds > 59) {
    console.log("bbb");
    seconds = 0;
    Name.innerHTML = "00";
    min++;
    if (min <= 9) {
      MinDoc.innerHTML = "0" + min;
    } else {
      MinDoc.innerHTML = min;
    }
  }
  if (min <= 59) {
    if (min <= 9) {
      MinDoc.innerHTML = "0" + min;
    } else {
      MinDoc.innerHTML = min;
    }
  } else if (min > 59) {
    console.log("ccc");
    min = 0;
    MinDoc.innerHTML = "00";
    hours++;
    if (hours <= 9) {
      Hour.innerHTML = "0" + hours;
    } else {
      Hour.innerHTML = hours;
    }
  }
}

function Stopinterval() {
  clearInterval(inter);
}
