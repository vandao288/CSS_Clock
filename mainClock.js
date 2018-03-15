var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');
var secondHand = document.querySelector('.second-hand');

function setTime() {
  var now = new Date();

  var hours = now.getHours();
  var hourDeg = hours * 30 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  var mins = now.getMinutes();
  var minDeg = mins * 6 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  var seconds = now.getSeconds();
  var secDeg = seconds * 6 + 90; // secDeg = (seconds / 60) * 360
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  console.log(hours + ':' + mins + ':' + seconds);
}

setInterval(setTime, 1000);