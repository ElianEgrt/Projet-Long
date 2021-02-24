const fs = require("fs");
const fetch = require("node-fetch");
const TOKEN = "db901b15ecb34557e221c042836a2359";
const homepage = require ('./homepage')

// Fetch films
// const filmsResponse = require("./seed")
let numPageLat = [] 
let numPagePopu = []

const buildHomepage = async (categories, page) => {
  let films = []
  let url
  for (index in categories) {

    let real_cat
    if (categories[index] === "popularity") {
      real_cat = "Popular"
      
      if (page === "next") {
        if (numPagePopu[1] === 10) {
          numPagePopu[1] = 20
        } else {
          numPagePopu[0] ++
          numPagePopu[1] = 10
        }
      } else if (page === "prev" && (numPagePopu[0] > 1 | numPagePopu[1] === 20)) {
        if (numPagePopu[1] === 10) {
          numPagePopu[0] -= 1
          numPagePopu[1] = 20
        } else {
          numPagePopu[1] = 10
        }
      } else {
        numPagePopu.push(1)
        numPagePopu.push(10)
      }
    }

    else if (categories[index] === "release_date") {
      real_cat = "Latest"
      
      if (page === "next") {
        if (numPageLat[1] === 10) {
          numPageLat[0] --
          numPageLat[1] = 20
        } else {
          numPageLat[1] = 10
        }
      } else if (page === "prev" && (numPageLat[0] < 500 | numPageLat[1] === 10)) {
        if (numPageLat[1] === 10) {
          numPageLat[1] = 20
        } else {
          numPageLat[0] ++
          numPageLat[1] = 10
        }
      } else {
        numPageLat.push(500)
        numPageLat.push(20)
      }
    }

    else {

    }
    
    let numPage, numPageDiv
    numPage = categories[index] === "popularity" ? numPagePopu[0] : numPageLat[0]
    numPageDiv = categories[index] === "popularity" ? numPagePopu[1] : numPageLat[1]
    
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=fr&sort_by=${categories[index]}.desc&page=${numPage}`

    try {
        let response = await fetch(url)           // wait for api fetch
        let responseJson = await response.json()  // wait for JSON parsing
        films.push([real_cat, responseJson.results.slice(numPageDiv - 10, numPageDiv)])
    } catch (error) {
        console.error(error);
    }
  }
  
  return homepage(films)

};

function pageManaging (category, numPage) {
// Pour gérer la disjonction de cas au-dessus
}
  

module.exports = buildHomepage;