const fs = require('fs');
var path = require('path');
var cookie = require('localStorage')

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

function pageManaging (whichPage, numPage) {

  if (whichPage === "Suivant >") {
  
    if (numPage[1] === 10) {
      numPage[1] = 20
    } else {
      numPage[0] ++
      numPage[1] = 10
    }
  
  } else if (whichPage === "< Précédent" && (numPage[0] > 1 | numPage[1] === 20)) {
  
    if (numPage[1] === 10) {
      numPage[0] -= 1
      numPage[1] = 20
    } else {
      numPage[1] = 10
    }
  
  }

  return numPage
}

function homepageBuildingOrNot(visuallyImpaired) {
  var staticPath = path.join(__dirname, '../public');
  let fileName
  visuallyImpaired ? fileName = 'indexContrast.html' : fileName = 'index.html'
  let filePath = path.join(staticPath, fileName)
  let age = fileAge(filePath);

  if (age) {
    if (age > 5 * 60 * 1000) {
      console.log(`${fileName} is too old, re-building it.`)
    } else {
      console.log(`${fileName} is still fresh enough.`)
      return [false, fileName]
    }
  } else {
    console.log(`${fileName} doesn't exist yet, building it.`)
  }

  return [true, fileName]
}

function fileContrastedOrNot(staticPath) {
  if (cookie.getItem('contrast') === "on") {
    fileName = 'indexContrast.html';
    filePath = path.join(staticPath, fileName)
  
  } else {
    fileName = 'index.html';
    filePath = path.join(staticPath, fileName)
  }

  return [fileName, filePath]
}

module.exports = {
  msToTime,
  pageManaging,
  homepageBuildingOrNot,
  fileContrastedOrNot
}