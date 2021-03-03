const tutorial = (cssFile) => `
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
      <h2>
       La liste des règles d'éco-conception mises en place sur ce site web
      </h2>
      
      <div id="firstRule">
        <b><h3>Frugalité fonctionnelle</h3></b>
        N’avoir que des fonctionnalités essentielles qui permettent uniquement de remplir l’objectif principal du site :
        <ul>
          <li>La possibilité d’avoir des informations sur les films</li>
          <li>La possibilité de regarder des films à l’aide du lecteur HTML par défaut</li>
          <li>La possibilité de préciser un handicap pour avoir une adaptation du site</li>
          <li>La possibilité de préciser des préférences pour avoir une navigation plus confortable</li>
          <li>La possibilité d'accéder à un tutoriel pour apprendre et mettre en pratique les méthodes d’éco-conception</li>
        </ul>
      
        <b><h3>Ajuster le design pour minimiser l'impact sur les équipements</h3></b>
        <ul id="noMargBot">
          <li>Langages utilisés : uniquement HTML/CSS côté client (pages web statiques) -> on évite d’encourager les utilisateurs à changer d’équipements dans l’optique de charger des pages web gourmandes plus rapidement.</li>
          <li>Adapter la résolution des ressources du site à l’écran de l’appareil qui le visualise (Smartphone ou PC portable par exemple)</li>
          <li>Utiliser que des fonds colorés unis & une police unique standard (Arial)</li>
        </ul>
      </div>
      <ul id="noMargTop">
        <li id="vidImQual">Réduire les qualités des vidéos (films, séries, trailers) / images</li>
        <li id="page">Réduire le nombre de résultats par page & proposer le changement de page pour plus de contenu au lieu d'instaurer un scroll infini</li>
      </ul>     
      
      <b><h3>Prendre en compte le volet éthique ainsi que l'accessibilité sur notre interface H/M</h3></b>
      Gestion d’accessibilité :
      <ul>
        <li id="fontContrastIncrease">Malvoyants : augmentation des contrastes et de la taille de police</li>
        <li id="screenReader">Malvoyants/Aveugles : compatibilité avec l'extension Chrome "Screen Reader" qui permet de lire les pages web</li>
        <li id="captions">Sourds : proposition de sous-titres sur les vidéos (":" en bas à droite du lecteur)</li>
        <li>Personnes possédant un handicap physique ou moteur : design fait pour une navigation au clavier à l'aide de la touche TAB</li>
      </ul>
      <div id="secondRule">
        Volet éthique, notamment dans la gestion des données personnelles : 
        <ul>
          <li>Pas de biais humain donc pas de recommandations en fonction de l’utilisation/expérience de l’utilisateur</li>
          <li>Politique de cookie transparente : on stocke de manière anonyme les préférences utilisateur pour le confort</li>
        </ul>
      </div>
      
      <div id="fourthRule">
        <b><h3>Avoir accès à des métriques permettant de mesurer l'éco-responsabilité de notre site</h3></b>
        Mesure de l’impact environnemental de notre site :
        <ul> 
          <li>Estimation de la consommation du flux vidéo streaming grâce à des données trouvées en ligne</li>
          <li>Sondes à insérer dans le code ?</li>
          <li>Statistiques sur les fonctionnalités utilisées (ou non)</li>
          <li>Page admin de tracking : si des fonctionnalités servent à rien alors les supprimer</li>
        </ul>
      </div>

      <h2 id="intro2">
       La liste des bonnes pratiques (tirées des "115 bonnes pratiques") mises en place sur ce site web
      </h2>

      <ul>
        <li>(n°3) Fluidifier le processus : nombre de pages web proposées faible pour ainsi réduire le temps passé par l'utilisateur sur le site et donc l'impact environnemental + réduire le nombre de sauts possibles depuis la racine (page d'accueil) = uniquement 1 possible</li>
        <li>(n°4) Préférer la saisie assistée à l'autocomplétion : écriture en fond dans le cadre de saisie pour indiquer le champ à renseigner plutôt que des propositions qui terminent le début du mot tapé</li>
        <li>(n°5) Favoriser un design simple, épuré adapté au web : utilisation de HTML5/CSS3 uniquement, côté client</li>
        <li>(n°6) Créer un site responsive : le site adapte sa résolution à tout appareil que l’utilisateur pourrait utiliser pour le consulter</li>
        <li>(n°9) Limiter le nombre de requêtes HTTP par page web pour ne pas monopoliser les ressources du serveur : 1 requête = 1 page HTML statique</li>
        <li>(n°11 & 13) Choisir les technologies les plus adaptées & Favoriser les pages statiques : utilisation de HTML5 / CSS3 uniquement, côté client + code JavaScript exécuté côté serveur</li>
        <li>(n°29) Favoriser les polices standard : une unique police standard utilisée sur tout le site (Arial)</li>
        <li>(n°32) Externaliser les CSS et JavaScript : les codes CSS et JavaScript ne sont pas mêlés au code HTML des pages</li>
        <li>(n°39) Éviter les animations Javascript / CSS coûteuses</li>
        <li>(n°40) N'utilisez que les portions indispensables des librairies Javascript et frameworks CSS : 0 framework CSS utilisé & un minimum de bibliothèques JavaScript</li>
        <li>(n°46) Supprimer les balises images dont l’attribut SRC est vide</li>
        <li>(n°77 & 83) Minifier les fichiers CSS & Compresser la sortie HTML : les fichiers HTML et CSS renvoyés au client ne possèdent aucun saut de ligne et uniquement les espaces nécessaires</li>
      </ul>
      
    </main>
  </body>
</html>
`;
  

module.exports = tutorial;