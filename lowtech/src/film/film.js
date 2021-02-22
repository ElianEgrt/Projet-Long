const filmPage = filmPath => `
<!doctype html>
<link href="../assets/stylesheets/film.css" rel="stylesheet">
<html>
  <head>
    <meta charset="utf-8">
    <title>Allo7né</title>
  </head>
  
  <body>
    <div id="titre">
      Allo7né
    </div>
    <div >
      <ul id="nav">
        <li><a href="/">Accueil</a></li>
        <li><a href="/tutorial.html">Tutoriel</a></li>
      </ul>
    </div>
    
    <video width="100%" controls autoplay>
      <source src="${filmPath}" type="video/mp4">
    </video>
    
  </body>
</html>
`;
  

module.exports = filmPage;