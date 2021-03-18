var path = require('path');
var cookie = require('localStorage')
const { pageManaging, homepageBuildingOrNot, fileContrastedOrNot } = require('../utils')
const { genHtml } = require('../../src/index')

// Managing which page to display (based on a page number system)
let numPage = [1, 10]

let serveHome = async (req, res) => {

  let fileName, filePath;
  let shouldGen = false;
  var staticPath = path.join(__dirname, '../../public');
  
  // Categories displayed on the homepage
  let categories = ["Populaire", "Récent"]
  // To address the request of the next or previous page, we recover the query
  let whichPage = req.query["page"]
  // To address the request to change preferences, we recover the query
  let whichPref = req.query["pref"]
  // To address the request to change font size & contrast, we recover the query
  let visuallyImpaired = req.query["contrast"]

  if (whichPage) {
    numPage = pageManaging(whichPage, numPage)
    shouldGen = true
    if (cookie.getItem('pref') === "Films récents en premier") {
      categories = ["Récent", "Populaire"]
    }
    [fileName, filePath] = fileContrastedOrNot(staticPath)
  }

  else if (whichPref) {
    numPage = pageManaging(whichPage, numPage)
    shouldGen = true
    cookie.setItem('pref', whichPref)
    if (whichPref === "Films récents en premier") {
      categories = ["Récent", "Populaire"]
    }
    [fileName, filePath] = fileContrastedOrNot(staticPath)
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
      [shouldGen, fileName] = homepageBuildingOrNot(true)
    
    } else {
      [shouldGen, fileName] = homepageBuildingOrNot(visuallyImpaired)
    }
    
    filePath = path.join(staticPath, fileName)

  }

  if (shouldGen) {
    genHtml(fileName, { categories, numPage }).then(() => res.sendFile(filePath))
  } else {
    res.sendFile(filePath)
  }

}

module.exports = serveHome;