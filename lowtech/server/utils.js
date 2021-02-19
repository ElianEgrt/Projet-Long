const fs = require('fs')

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    days = Math.floor((duration / (1000 * 60 * 60 * 24)));

  days = (days < 10) ? "0" + days : days;
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return days + ':' + hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function fileAge(filePath) {
  try {
    var stats = fs.statSync(filePath);
    return Math.abs(new Date(stats.ctime) - Date.now());
  } catch (err) {
    // console.error(`${filePath} does not exist`);
    return undefined
  }

}

module.exports = {
  msToTime,
  fileAge
}