const profileTitle = document.getElementById('profileTitle');

blinkingText(profileTitle);

const audio = new Audio('../assets/audio/mouse.mp3');

const next = document.getElementById('next');

next.addEventListener('click', (e) => {
  audio.play();
  setTimeout(() => {
    window.location.href = '../missions.html';
  }, 500);
  e.preventDefault();
});
