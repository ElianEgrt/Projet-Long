const fs = require("fs");

const homepage = films => `
<!doctype html>
<link href="./assets/styles/index.css" rel="stylesheet">
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
    <div id="grid_film">

      ${films
        .map(
          film => `
          <div class="film">
            <img class="img_film"
            src="https://image.tmdb.org/t/p/w200${film.poster_path}"
            />
            <ul class="carac_film">
              <li> ${film.title} </li>
              <li> Réalisateur </li>
              <li> Genre </li>
              <li> Synopsis </li>
            </ul>
          </div>
          `
        )
  .join("")}

    </div>
  </body>
</html>
`;
  
const addHomePage = films => {
  fs.writeFile(`public/index.html`, homepage(films), e => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  });
};

module.exports = addHomePage;