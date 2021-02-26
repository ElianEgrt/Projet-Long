const fs = require("fs");
const fetch = require("node-fetch");
const TOKEN = "db901b15ecb34557e221c042836a2359";
const homepage = require ('./homepage')

// Fetch films
// const filmsResponse = require("./seed")

const buildHomepage = async (categories, numPage) => {
  let films = []
  let currentDate = getCurrentDate()

  for (index in categories) {

    if (categories[index] === "Popular") {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&sort_by=popularity.desc&page=${numPage[0]}`
    }

    else if (categories[index] === "Latest") {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&primary_release_date.gte=2020-06-01&primary_release_date.lte=${currentDate}&sort_by=primary_release_date.desc&page=${numPage[0]}`
    }

    else {

    }
    
    try {
        let response = await fetch(url)           // wait for api fetch
        let responseJson = await response.json()  // wait for JSON parsing
        films.push([categories[index], responseJson.results.slice(numPage[1] - 10, numPage[1])])
    } catch (error) {
        console.error(error);
    }
  }

  return homepage(films)

};

function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return yyyy+"-"+mm+"-"+dd
} 

module.exports = buildHomepage;