var path = require('path');
const { fileAge } = require('../utils')
const { genHtml } = require('../../src/index')


// Check file age
let serveHome = async (req, res, next) => {

  // path to static files
  var staticPath = path.join(__dirname, '../../public');

  let fileName = 'index.html'
  let filePath = path.join(staticPath, fileName)
  let age = fileAge(filePath);
  let shouldGen = false
  let page = ""

  if (req.query["next"]) {
    shouldGen = true
    page = "next"
  }

  else if (req.query["prev"]) {
    shouldGen = true
    page = "prev"
  }

  else if (req.query["cookie"]) {
    
  }

  else {
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
    genHtml(fileName, { page }).then(() => res.sendFile(filePath))
  } else {
    next()
  }

}

module.exports = serveHome;