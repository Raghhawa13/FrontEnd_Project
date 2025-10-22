const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startbtn");
const stopButton = document.getElementById("stopbtn");
const pauseButton = document.getElementById("pausebtn");
const resetButton = document.getElementById("resetbtn");

const lapList = document.getElementById("laplist");

//stopWatch Variabels

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(updateTimer, 10);

  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(interval);
  addLapList();
  resetTimerData();
  startButton.disabled = false;
}

function pauseTimer() {
  clearInterval(interval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(interval);
  resetTimerData();
  startButton.disabled = false;
}

function updateTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    /// 1000 -> 1 second = 1000 millseconds
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTimer();
}

function displayTimer() {
  millisecondsLabel.textContent = padTime(milliseconds);
  secondsLabel.textContent = padTime(seconds);
  minutesLabel.textContent = padTime(minutes);
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function resetTimerData() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTimer();
}

function addLapList() {
  const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(
    milliseconds
  )}`;

  const listItems = document.createElement("li");
  listItems.innerHTML = `<span> Lap${
    lapList.childElementCount + 1
  }:</span> ${lapTime}`;
  lapList.appendChild(listItems);
}
