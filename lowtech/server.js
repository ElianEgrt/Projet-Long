var http = require('http');
var fs = require("fs");
 
http.createServer(function (request, response) {
    
    if (request.url === "/") {
      sendFileContent(response, "index.html", 'text/html');
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