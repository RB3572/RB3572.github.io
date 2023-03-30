const myVideo = document.getElementById('myVideo');

myVideo.addEventListener('ended', function() {
  myVideo.pause();
  myVideo.currentTime = 16;
  console.log('Paused!');
});
let timeoutId;

function startArrowMove() {
  document.getElementById("arrow").style.display = "block";
}

function stopArrowMove() {
  document.getElementById("arrow").style.animationDuration = '1s';
}

function resetTimeout() {
  clearTimeout(timeoutId);
  document.getElementById("arrow").style.animationDuration = '0s';
  timeoutId = setTimeout(stopArrowMove, 3000);
}

document.addEventListener("mousemove", resetTimeout);
document.addEventListener("keydown", resetTimeout);

startArrowMove();
resetTimeout();

