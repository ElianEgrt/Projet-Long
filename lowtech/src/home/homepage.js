const homepage = films => `
<!doctype html>
<link href="./assets/stylesheets/index.css" rel="stylesheet">
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

    <div class="center-div">
      <div id="barreRecherche">
        <form action="/film.html" id="search" method="get"/>
          <input id="film" type="text"/>
          <input id="buttonSearch" type="submit" value="Rechercher"/>
        </form>
      </div>
    </div>


    ${films
      .map(
      category => ` 
      <div class="categorie">
        ${category[0]}
      </div>

      <div class="grid_film">
        ${category[1]
          .map(
            film => `
            <div class="film">
              <a href="/watch">
                <img class="img_film"
                src="https://image.tmdb.org/t/p/w200${film.poster_path}"
                />
              </a>
              <ul class="carac_film">
                <li> ${film.title} </li>
                <li> Réalisateur </li>
                <li> Genre </li>
                <li> Synopsis </li>
              </ul>
            </div>
          `)
          .join("")}
      </div>
      `)
      .join("")}        
    
  </body>
</html>
`;
  

module.exports = homepage;