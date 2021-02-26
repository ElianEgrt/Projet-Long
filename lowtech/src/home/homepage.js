const homepage = films => `
<!doctype html>
<link href="./assets/stylesheets/index.css" rel="stylesheet">
<link href="./assets/stylesheets/index.css" rel="stylesheet" media="print">
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Allo7né</title>
  </head>
  
  <body>
    <header>
      <div id="titre">
        Allo7né
      </div>

      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/tutorial.html">Tutoriel</a></li>
          
          
          <li class="pref">
            <div class="menuPrefDeroulant">
              <button class="dropbtn">Préférences &nbsp;</button>
              <div class="dropdown-content">
                <div id="blankCase"></div>
                <form action="/" method="get">
                  <input name="pref" value="Films récents en premier" type="submit"/>
                  <input name="pref" value="Films populaires en premier" type="submit"/>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="center-div">
        <div id="barreRecherche">
          <form action="/search" method="get">
            <label>Rechercher un film :&ensp;<input class="search" name="title" type="text" placeholder="Nom du film"/></label>
            <input class="search" type="submit" value="Rechercher"/>
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
                <div class="img_film_overlay">
                  <img alt="Poster non disponible dans la base de données" class="img_film"
                  src="https://image.tmdb.org/t/p/w200${film.poster_path}"
                  />
                  <a href="/watch"></a>
                </div>

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
      
      <div id="managePages">
        <div class="buttonPage">
          <form id="prevButton" action="/" method="get">
            <input name="page" id="inButtonLeftPage" type="submit" value="< Précédent"/>
          </form>
        </div>
        <div class="buttonPage">
          <form action="/" method="get">
            <input name="page" id="inButtonNextPage" type="submit" value="Suivant >"/>
          </form>
        </div>
      </div>

    </main>
  </body>
</html>
`;
  

module.exports = homepage;