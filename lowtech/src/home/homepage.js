const homepage = films => `
<!doctype html>
<link href="./assets/stylesheets/index.css" rel="stylesheet">
<link href="./assets/stylesheets/index.css" rel="stylesheet" media="print">
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
        
        
        <li class="pref"><div class="menuPrefDeroulant">
          <button class="dropbtn">Préférences &nbsp;</button>
          <div class="dropdown-content">
            <div id="blankCase"></div>
            <a href="/" value="actionFirst">Action Movies First</a>
            <a href="/" value="popularFirst">Popular Movies First</a>
          </div>
        </div></li>
      </ul>
    </nav>

    <div class="center-div">
      <div id="barreRecherche">
        <form action="/search" method="get">
          <input class="search" name="title" type="text" placeholder="Nom du film"/>
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
                <img class="img_film"
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
          <input name="prev" id="inButtonLeftPage" type="submit" value="< Previous"/>
        </form>
      </div>
      <div class="buttonPage">
        <form action="/" method="get">
          <input name="next" id="inButtonNextPage" type="submit" value="Next >"/>
        </form>
      </div>
    </div>

  </body>
</html>
`;
  

module.exports = homepage;