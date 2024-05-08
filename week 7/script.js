const airportaudio = document.querySelector("#airport-audio");
console.log(airportaudio);
airportaudio.removeAttribute()
// airportAudio.play();
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAirportAudio );
function playAirportAudio() {
    airportaudio.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAirportAudio);

function pauseAirportAudio() {
    airportAudio.pause();
}


const popButton = document.querySelector("#popButton");
console.log(popButton);

popButton.addEventListener("click",playpop);

function playpop() {
    popAudio.play();
}