const TOKEN = "db901b15ecb34557e221c042836a2359";
const addHomePage = require("./homepage");
const fetch = require("node-fetch");
var http = require('http');
var fs = require("fs");

// Fetch films
// const filmsResponse = require("./seed")
const discoverFilms = async () => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=fr&sort_by=popularity.desc&page=1`
  
  try {
      let response = await fetch(url)           // wait for api fetch
      let responseJson = await response.json()  // wait for JSON parsing
      addHomePage(responseJson.results.slice(0,3))         // callback function
  } catch (error) {
      console.error(error);
  }
};

discoverFilms()

http.createServer(function (request, response) {
    
  if (request.url === "/") {
    sendFileContent(response, "./public/index.html", 'text/html');
  }

  if(/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
    sendFileContent(response, request.url.toString().substring(1), "text/css");
  }

}).listen(3000);

function sendFileContent(response, fileName, contentType){
fs.readFile(fileName, function(err, data){
  if(err){
    response.writeHead(404);
    response.write("Not Found!");
  }
  else {
    response.writeHead(200, {'Content-Type': contentType});
    response.write(data);
  }
  
  response.end();
});
}