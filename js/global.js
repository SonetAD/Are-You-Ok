function blinkingText(tag) {
  let blink = true;
  setInterval(() => {
    if (blink) {
      tag.style.display = 'none';
      blink = false;
    } else {
      tag.style.display = 'block';
      blink = true;
    }
  }, 750);
}

let missionCount = 1;
