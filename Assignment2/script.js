// linking my audio to the play and pause button using the resources from week 7

const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playStudyAudio);

function playStudyAudio() {
  if (myAudio.paused || myAudio.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myAudio.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myAudio.pause();
  }
}

// Copy and pasting the first audio button to make the second one and changing ids

const myAudioSec = document.querySelector("#my-audio-sec");
console.log(myAudioSec);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

const playPauseImag = document.querySelector("#play-pause-imag");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", playStudyAudioSec);

function playStudyAudioSec() {
  if (myAudioSec.paused || myAudioSec.ended) {
    playPauseImag.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myAudioSec.play();
  } else {
    playPauseImag.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myAudioSec.pause();
  }
}

// Making another 2 more buttons for the background gifs with separated buttons called "Day" and "Night"
// I followed a simple youtube tutorial: "https://www.google.com/search?q=how+to+make+background+change+with+button+in+html+css+and+javascript&rlz=1C1VDKB_en-GBAU1106AU1106&oq=how+to+make+background+change+with+button+in+html+css&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCTI2MjQxajBqOagCALACAQ&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:b02a5737,vid:BHsnvU5cCFY,st:0"

let dayMode = document.querySelector("#day-time");
let nightMode = document.querySelector("#night-time");
let main = document.querySelector("#main");

dayMode.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('Daytime.gif')";
});

nightMode.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('Nighttime.gif')";
});

main.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('dawn.gif')";
});

let timeLeft = 25 * 60;
let timerInterval;

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  document.getElementById("timer").innerText = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  if (timerInterval) return; // Prevent multiple timers

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      document.getElementById("alarm").play();
      alert("Time's up! Take a break.");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  updateDisplay();
}

updateDisplay();

function openTimer() {
  document.getElementById("timerBox").style.display = "block";
}

function closeTimer() {
  document.getElementById("timerBox").style.display = "none";
}

document.getElementById("close-btn").addEventListener("click", function () {
  // Action to stop the timer and close
});
