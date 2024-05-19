const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback() {
    if(myVideo.paused || myVideo.ended){
        playPauseImg.src="https://img.icons8.com/ios-glyphs/30/pause--v2.png";
        myVideo.play();
    } else{
        playPauseImg.src="https://img.icons8.com/ios-glyphs/30/pause--v2.png";
        myVideo.pause();
    }

}

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound(){
    if (myVideo.muted)
        {
            muteUnmuteButton.style.backgroundColor="blue";
            myVideo.muted=false;
        } else{
            myVideo.muted=true;
        }
}

myVideo.addEventListener("timeupdate", updateProgressBar )
const progressBarFill = document.querySelector("#progress-bar-fill");
console.log(progressBarFill);

function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    progressBarFill.style.width = progress + "%";
    console.log(progress);
}

const step1Button = document.querySelector("#step-1-button");
console.log(step1Button);
step1Button.addEventListener("click", gotoStep1);

function gotoStep1()
{
    myVideo.currentTime= 16.0;
}

const step2Button = document.querySelector("#step-2-button");
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2);


function gotoStep2()
{
    myVideo.currentTime= 43.0;
}

myVideo.addEventListener("dbclick", goFullscreen);

function goFullScreen()
{
    if(!document.fullscreenElement)
        {
            myVideo.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
}

