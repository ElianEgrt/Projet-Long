const search = (films, searchedTitle, cssFile) => `
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
      
      <h2>Résultats pour votre recherche : "${searchedTitle}"</h2>
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
                  <div class="titre_film">
                    <li> ${film.title} </li>
                  <div/>
                  <div class="date_note_film">
                    <li> ${film.release_date} </li>
                    <li> ${film.vote_average}/10 </li>
                  <div/>
                  <div class="overview_film">
                    <li> ${film.overview} </li>
                  <div/>
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