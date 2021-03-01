var path = require('path');
const { genHtml } = require('../../src/index')
const { getCurrentFilenames } = require('../../src/utils')

// Check file age
let serveFilm = async (req, res, next) => {

  // path to static files
  var staticPath = path.join(__dirname, '../../public');

  let fileName = 'film.html'
  let filePath = path.join(staticPath, fileName)

  let filmNameOrigin = req.query["title"] // On utiliserait cela pour filmName si on utilisait pas une vidéo par défaut
  let filmNames = getCurrentFilenames(path.join(staticPath, '/assets/films'))
  let filmName = filmNames[1]
  let filmCaptions = filmNames[2]
  let filmPath = `../assets/films/${filmName}`
  let filmCaptionsPath = `../assets/films/${filmCaptions}`

  genHtml(fileName, { filmPath, filmCaptionsPath, filmNameOrigin }).then(() => res.sendFile(filePath))

}

module.exports = serveFilm;