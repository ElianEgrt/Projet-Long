var path = require('path');
const { genHtml } = require('../../src/index');
var cookie = require('localStorage')

// Check file age
let serveSearch = async (req, res, next) => {

  // path to static files
  var staticPath = path.join(__dirname, '../../public');

  let fileName
  cookie.getItem('contrast') === 'on' ? fileName = 'searchContrast.html' : fileName = 'search.html'
  let filePath = path.join(staticPath, fileName)

  let filmTitle = req.query['title']
  if (filmTitle) {
    genHtml(fileName, { filmTitle }).then(() => res.sendFile(filePath))
  } else {
    res.sendFile(path.join(staticPath, 'index.html'))
  }
  
}

module.exports = serveSearch;