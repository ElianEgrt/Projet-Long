var path = require('path');
const { genHtml } = require('../../src/index')
const { getCurrentFilenames } = require('../../src/utils')

// Check file age
let serveFilm = async (req, res, next) => {

  // path to static files
  var staticPath = path.join(__dirname, '../../public');

  let fileName = 'film.html'
  let filePath = path.join(staticPath, fileName)

  // let filmName = req.params.filmFile // renvoie REMPLACER_PAR_VRAI_FILM (cf homepage.js)
  let filmNames = getCurrentFilenames(path.join(staticPath, '/assets/films'))
  let filmName = filmNames[0]
  let filmPath = `../assets/films/${filmName}`

  genHtml(fileName, { filmPath }).then(() => res.sendFile(filePath))

}

module.exports = serveFilm;