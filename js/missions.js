const missions = document.getElementById('missions');

blinkingText(missions);

const selectedMission = document.getElementsByClassName(`${missionCount}`)[0];

selectedMission.setAttribute('id', 'bordered');
