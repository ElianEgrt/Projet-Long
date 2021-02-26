const search = (films, searchedTitle) => `
<!doctype html>
<link href="./assets/stylesheets/search.css" rel="stylesheet">
<link href="./assets/stylesheets/search.css" rel="stylesheet" media="print">
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
    
    <h2>Results of your research : "${searchedTitle}"</h2>

    <div class="gridFilm">
      ${films
        .map(film => ` 
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
    
  </body>
</html>
`;
  

module.exports = search;