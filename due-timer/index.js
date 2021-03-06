const clockContainer = document.querySelector(".js-clock");


function getTime() {
  const xmasEve = new Date(`2021-12-24:00:00:00+0900`);
  const now = new Date();

  const difference = new Date(xmasEve - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);

  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const daysStr = `${days < 10 ? `0${days}` : days}일`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}시`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}분`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}초`;

  clockContainer.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();