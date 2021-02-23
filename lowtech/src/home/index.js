const fs = require("fs");
const fetch = require("node-fetch");
const TOKEN = "db901b15ecb34557e221c042836a2359";
const homepage = require ('./homepage')

// Fetch films
// const filmsResponse = require("./seed")
let pageURLlat, pageURLpopu

const buildHomepage = async (categories, page) => {
  let films = []
  let url
  for (index in categories) {

    let real_cat
    if (categories[index] === "popularity") {
      real_cat = "Popular"
      
      if (page === "next") {
        pageURLpopu += 1
      } else if (page === "prev" && pageURLpopu > 1) {
        pageURLpopu -= 1
      } else {
        pageURLpopu = 1
      }
    }

    else if (categories[index] === "release_date") {
      real_cat = "Latest"
      
      if (page === "next") {
        pageURLlat -= 1
      } else if (page === "prev" && pageURLlat < 500) {
        pageURLlat += 1
      } else {
        pageURLlat = 500
      }
    }

    else {

    }
    
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=fr&sort_by=${categories[index]}.desc&page=${categories[index] === "popularity" ? pageURLpopu : pageURLlat}`

    try {
        let response = await fetch(url)           // wait for api fetch
        let responseJson = await response.json()  // wait for JSON parsing
        films.push([real_cat, responseJson.results])
    } catch (error) {
        console.error(error);
    }
  }
  
  return homepage(films)

};
  

module.exports = buildHomepage;