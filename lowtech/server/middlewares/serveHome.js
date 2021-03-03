var path = require('path');
var cookie = require('localStorage')
const { whichContrast, pageManaging } = require('../utils')
const { genHtml } = require('../../src/index')

let numPage = [1, 10]

let serveHome = async (req, res) => {

  let fileName, filePath;
  let shouldGen = false;
  var staticPath = path.join(__dirname, '../../public');
  
  let categories = ["Populaire", "Récent"]
  let whichPage = req.query["page"]
  let whichPref = req.query["pref"]
  let visuallyImpaired = req.query["contrast"]

  if (whichPage) {
    numPage = pageManaging(whichPage, numPage)
    shouldGen = true
    if (cookie.getItem('pref') === "Films récents en premier") {
      categories = ["Récent", "Populaire"]
    }
    [fileName, filePath] = contrastOrNot(staticPath)
  }

  else if (whichPref) {
    numPage = pageManaging(whichPage, numPage)
    shouldGen = true
    cookie.setItem('pref', whichPref)
    if (whichPref === "Films récents en premier") {
      categories = ["Récent", "Populaire"]
    }
    [fileName, filePath] = contrastOrNot(staticPath)
  }

  else {
    if (cookie.getItem('pref') === "Films récents en premier") {
      categories = ["Récent", "Populaire"]
    }

    shouldGen = true
    if (visuallyImpaired && cookie.getItem('contrast') === "on") {
      cookie.setItem('contrast', "off")
      fileName = 'index.html'
    } else if (visuallyImpaired) {
      cookie.setItem('contrast', "on")
      fileName = 'indexContrast.html'
    } else if (cookie.getItem('contrast') === "on") {
      [shouldGen, fileName] = whichContrast(true)
    } else {
      [shouldGen, fileName] = whichContrast(visuallyImpaired)
    }
    
    filePath = path.join(staticPath, fileName)

  }

  if (shouldGen) {
    genHtml(fileName, { categories, numPage }).then(() => res.sendFile(filePath))
  } else {
    res.sendFile(filePath)
  }

}

function contrastOrNot(staticPath) {
  if (cookie.getItem('contrast') === "on") {
    fileName = 'indexContrast.html';
    filePath = path.join(staticPath, fileName)
  } else {
    fileName = 'index.html';
    filePath = path.join(staticPath, fileName)
  }
  return [fileName, filePath]
}

module.exports = serveHome;