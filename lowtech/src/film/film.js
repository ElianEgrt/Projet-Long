const filmPage = (filmPath, filmCaptionsPath) => `
<!doctype html>
<link href="./assets/stylesheets/film.css" rel="stylesheet">
<link href="./assets/stylesheets/film.css" rel="stylesheet" media="print">
<html>
  <head>
    <meta charset="utf-8">
    <title>Allo7né</title>
  </head>
  
  <body>
    <div id="titre">
      Allo7né
    </div>
    <nav>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/tutorial.html">Tutoriel</a></li>
      </ul>
    </nav>
    
    <video width="100%" controls autoplay>
      <source src="${filmPath}" type="video/mp4">
      <track label="English" kind="captions" srclang="en" src="${filmCaptionsPath}" default>
    </video>
    
  </body>
</html>
`;
  

module.exports = filmPage;