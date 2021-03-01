const filmPage = require ('./film')

// Fetch films
// const filmsResponse = require("./seed")
const buildFilmPage = (filmPath, filmCaptionsPath, filmNameOrigin) => {
    
  return filmPage(filmPath, filmCaptionsPath, filmNameOrigin)

};
  

module.exports = buildFilmPage;