var path = require('path');
var cookie = require('localStorage')
const { fileAge, pageManaging } = require('../utils')
const { genHtml } = require('../../src/index')

let numPage = []

let serveHome = async (req, res, next) => {

  // path to static files
  var staticPath = path.join(__dirname, '../../public');
  let fileName = 'index.html'
  let filePath = path.join(staticPath, fileName)
  let age = fileAge(filePath);
  let shouldGen = false
  
  let categories = ["Popular", "Latest"]
  let whichPage = req.query["page"]
  let whichPref = req.query["pref"]
  numPage = pageManaging(whichPage, numPage)

  if (whichPage) {
    shouldGen = true
    if (cookie.getItem('pref') === "Latest Movies First") {
      categories = ["Latest", "Popular"]
    }
  }

  else if (whichPref) {
    shouldGen = true
    cookie.setItem('pref', whichPref)
    if (whichPref === "Latest Movies First") {
      categories = ["Latest", "Popular"]
    }
  }

  else {
    // Check file age to know if we have to generate it again or not
    if (age) {
      if (age > 5 * 60 * 1000) {
        console.log(`${fileName} is too old, re-building it.`)
        shouldGen = true
      } else {
        console.log(`${fileName} is still fresh enough.`)
      }
    } else {
      console.log(`${fileName} doesn't exist yet, building it.`)
      shouldGen = true
    }
  }

  if (shouldGen) {
    genHtml(fileName, { categories, numPage }).then(() => res.sendFile(filePath))
  } else {
    next()
  }

}

module.exports = serveHome;