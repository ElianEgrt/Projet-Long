const filmPage = require ('./film')

// Fetch films
// const filmsResponse = require("./seed")
const buildFilmPage = (filmPath, filmCaptionsPath) => {
    
  return filmPage(filmPath, filmCaptionsPath)

};
  

module.exports = buildFilmPage;