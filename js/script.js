const videoURL = "https://www.youtube.com/watch?v=qYsHLUAlH_8";

// Function to open the YouTube video in a new tab or window
function playVideo() {
  window.open(videoURL, "_blank");
}

// Event listener for the "play-button" click
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", playVideo);
const playCursor = document.getElementById("play-cursor");
playCursor.addEventListener("click", playVideo);
