const search = (films, searchedTitle) => `
<!doctype html>
<link href="./assets/stylesheets/search.css" rel="stylesheet">
<link href="./assets/stylesheets/search.css" rel="stylesheet" media="print">
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
        </ul>
      </nav>
      
      <h2>Résultats de votre recherche : "${searchedTitle}"</h2>
    </header>

    <main>
      <div class="gridFilm">
        ${films
          .map(film => ` 
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
    </main>
  </body>
</html>
`;
  

module.exports = search;