const search = require ('./search')
const fetch = require("node-fetch");
const TOKEN = "db901b15ecb34557e221c042836a2359";

const buildSearchPage = async (file, searchedTitle) => {

  let url = `https://api.themoviedb.org/3/search/movie?api_key=${TOKEN}&query=${searchedTitle}`
  
  let film;
  try {
    let response = await fetch(url)           // wait for api fetch
    let responseJson = await response.json()  // wait for JSON parsing
    film = responseJson.results
  } catch (error) {
    console.error(error);
  }

  let cssFile
  file === "search.html" ? cssFile = "search.css" : cssFile = "searchContrast.css"

  return search(film, searchedTitle, cssFile)

};
  

module.exports = buildSearchPage;