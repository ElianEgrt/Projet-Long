var path = require('path');
const { genHtml } = require('../../src/index')

// Check file age
let serveSearch = async (req, res) => {

  // path to static files
  var staticPath = path.join(__dirname, '../../public');

  let fileName = 'search.html'
  let filePath = path.join(staticPath, fileName)

  let filmTitle = req.param('title')

  genHtml(fileName, { filmTitle }).then(() => res.sendFile(filePath))

}

module.exports = serveSearch;