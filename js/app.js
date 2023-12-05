const pressX = document.getElementById('pressX');

blinkingText(pressX);
const audio = new Audio('./assets/audio/click.mp3');

document.addEventListener('keypress', (e) => {
  if (e.key.toLocaleLowerCase() === 'x') {
    audio.play();
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 300);
  }
  e.preventDefault();
});
