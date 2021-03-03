const homepage = (films, cssFile) => `
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
            <div class="tutorial" id="blank">
              <div class="tutorial">
                Une règle d'éco-conception à afficher&nbsp;<a href="/tutorial#firstRule">ici</a>
              </div>
            </div>
          </div>
        </div>
        <div id="visuallyImpaired">
          <form action="/" method="get">
            <input type="checkbox" id="checkVisImp" class="forPointer" name="contrast" value="true">
            <label for="checkVisImp">Changer les contrastes et les tailles de police</label>
            <input class="forPointer" type="submit" value="OK">
          </form>
          <div class="tutorial" id="blank">
            <div class="tutorial">
              Une règle d'éco-conception à afficher&nbsp;<a href="/tutorial#fontContrastIncrease">ici</a>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/tutorial">Tutoriel</a></li>
          
          
          <li class="pref">
            <div class="tutorial" id="blank">
              <div class="tutorial">
                Une règle d'éco-conception à afficher&nbsp;<a href="/tutorial#secondRule">ici</a>
              </div>
            </div>
            <div class="menuPrefDeroulant">
              <button class="dropbtn">
                Préférences &nbsp;
              </button>
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
            <input id="btnSearch" class="search" type="submit" value="Rechercher"/>
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
                  <form action="/watch">
                    <input name="title" value="${film.title}" type="submit"></a>
                  </form>
                </div>

                <div class="carac_film_container">
                  <ul class="carac_film">
                    <li class="titre_film">${film.title}</li>
                    <li class="date_note_film">${film.release_date}</li>
                    <li class="date_note_film">${film.vote_average}/10</li>
                    <li class="overview_film">${film.overview}</li>
                  </ul>
                </div>
              </div>
            `)
            .join("")}
        </div>
        `)
        .join("")}        
      
      <div id="managePages">
        <div class=center-div>
          <div id="pourTuto">
            <div class="tutorial" id="second">
              Une règle d'éco-conception à afficher&nbsp;<a href="/tutorial#page">ici</a>
            </div>
          </div>
        </div>
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