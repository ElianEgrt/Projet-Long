const TOKEN = "db901b15ecb34557e221c042836a2359";
const addHomePage = require("./homepage");
const fetch = require("node-fetch");

// Fetch films
// const filmsResponse = require("./seed")
const discoverFilms = async () => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=fr&sort_by=popularity.desc&page=1`
  
  try {
      let response = await fetch(url)           // wait for api fetch
      let responseJson = await response.json()  // wait for JSON parsing
      addHomePage(responseJson.results)         // callback function
  } catch (error) {
      console.error(error);
  }
};

discoverFilms()