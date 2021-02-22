const filmPage = require ('./film')

// Fetch films
// const filmsResponse = require("./seed")
const buildFilmPage = (filmPath) => {
    
  return filmPage(filmPath)

};
  

module.exports = buildFilmPage;