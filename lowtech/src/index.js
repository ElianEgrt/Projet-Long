const TOKEN = "db901b15ecb34557e221c042836a2359";
const addHomePage = require("./homepage");
const fetch = require("node-fetch");
var http = require('http');
var fs = require("fs");

// Fetch films
// const filmsResponse = require("./seed")
const discoverFilms = async (categories) => {
  let films = []
  for (index in categories) {
    
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=fr&sort_by=${categories[index]}.desc&page=`

    let real_cat
    if (categories[index] === "popularity") {
      real_cat = "Popular"
    }

    else if (categories[index] === "release_date") {
      real_cat = "Latest"
      url = url + `100`
    }

    else {

    }
    
    try {
        let response = await fetch(url)           // wait for api fetch
        let responseJson = await response.json()  // wait for JSON parsing
        films.push([real_cat, responseJson.results.slice(0,3)])
    } catch (error) {
        console.error(error);
    }
  }
  
  addHomePage(films)

};

discoverFilms(["popularity", "release_date"])