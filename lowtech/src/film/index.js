const filmPage = require ('./film')

const buildFilmPage = (file, filmPath, filmCaptionsPath, filmNameOrigin) => {
  
  let cssFile
  file === "film.html" ? cssFile = "film.css" : cssFile = "filmContrast.css"

  return filmPage(filmPath, filmCaptionsPath, filmNameOrigin, cssFile)

};
  

module.exports = buildFilmPage;