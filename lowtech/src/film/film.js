const filmPage = (filmPath, filmCaptionsPath, filmNameOrigin, cssFile) => `
<!doctype html>
<link href="./assets/stylesheets/${cssFile}" rel="stylesheet">
<link href="./assets/stylesheets/${cssFile}" rel="stylesheet" media="print">
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Allo7né</title>
  </head>
  
  <body>
    <header>
      <div id="titre">
        <div class="center-div">
          <div id="titreText">
            Allo7né
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/tutorial">Tutoriel</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <h2>Votre film : ${filmNameOrigin}</h2>
      <div id="video">
        <div class="center-div"> 
          <div id="pourTuto">
            <div class="tutorial">
              Une règle d'éco-conception à afficher&nbsp;<a href="/tutorial#captions">ici</a>
            </div>
          </div>
        </div>
        <video width="100%" controls autoplay>
          <source src="${filmPath}" type="video/mp4">
          <track label="English" kind="captions" srclang="en" src="${filmCaptionsPath}" default>
        </video>
      </div>
    </main>
  </body>
</html>
`;
  

module.exports = filmPage;