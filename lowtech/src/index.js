const path = require('path')
const fs = require('fs'); 

var CleanCSS = require('clean-css');
var minify = require('html-minifier').minify;

const { getCurrentFilenames } = require('./utils')
const buildHomepage = require('./home')
const buildTutorial = require('./tutorial');
const buildFilmPage = require('./film');
const buildSearchPage = require('./search')

// Local source files
var stylesheetPath =          path.join(__dirname, '/stylesheets');
var iconsPath =               path.join(__dirname, '/icons');
var filmsPath =               path.join(__dirname, '/films');
var HOME_FILE = 'index.html'
var TUTORIAL_FILE = 'tutorial.html'
var FILM_FILE = 'film.html'
var SEARCH_FILE = 'search.html'

// Public folders
var staticPath =              path.join(__dirname, '../public');
var staticAssetsPath =        path.join(staticPath, '/assets');
var staticFontsPath =         path.join(staticAssetsPath, '/fonts');
var staticIconsPath =         path.join(staticAssetsPath, '/icons');
var staticImagesPath =        path.join(staticAssetsPath, '/images');
var staticStylesheetPath =    path.join(staticAssetsPath, '/stylesheets');
var staticFilmsPath =         path.join(staticAssetsPath, '/films');

var publicTree = [staticPath, staticAssetsPath, staticFontsPath, staticIconsPath, staticImagesPath, staticStylesheetPath, staticFilmsPath]

// Create public directory tree
const genTree = () => {
  console.log(`\nGenerating public tree...`)
  publicTree.forEach(dir => {
    // console.log(`Trying to create ${dir}`)
    try {
      fs.mkdirSync(dir, {}); 
    } catch (err) {
      if (err.code === 'EEXIST') {
        console.log(`${dir} already exists.`); 
        return
      } else {
        return console.error(err)
      }
    }
    console.log(`${dir} was created successfully`); 
  })
}

// Minifying and copying css files
const genCss = (files) => {

  // console.log(`\nMinifying and copying css files...`)
  
  if (!files) {
    // Scouting for css files
    var files = getCurrentFilenames(stylesheetPath)
  }
  
  var output = new CleanCSS({ batch: true }).minify(files.map(file => path.join(stylesheetPath, file)));
    
  for (const key in output) {
  
    let publicCssFilePath = path.join(staticStylesheetPath, path.basename(key))
    let error = output[key].error;
    let warning = output[key].warning;
    let styles = output[key].styles;
  
    if (error) {
      console.error(`Error minifying ${key} : ${error}`)
      console.log('Copying file as-is...')
      try { fs.copyFileSync(key, publicCssFilePath); } catch (err) {
        console.log("Error Found:", err);
      }
      console.log(file + " was created successfully")
    }
    
    else if (warning) {
      console.error(`Warning minifying ${key} : ${warning}`)
      console.log('Copying file as-is...')
      try { fs.copyFileSync(key, publicCssFilePath); } catch (err) {
        console.log("Error Found:", err);
      }
    }
    
    else {
      console.log(`Writing ${path.basename(publicCssFilePath)}`)
      fs.writeFileSync(publicCssFilePath, styles);
    }
  
  }
}

// Copy icons
const genIcons = () => {
  // Scouting for icons
  var icons = getCurrentFilenames(iconsPath)
  
  icons.forEach(icon => {
    let iconPath = path.join(iconsPath, icon)
    let staticIconPath
    if (icon === 'favicon.ico') {
      staticIconPath = path.join(staticPath, icon)
    } else {
      staticIconPath = path.join(staticIconsPath, icon)
    }
    
    try {
      fs.copyFileSync(iconPath, staticIconPath, fs.constants.COPYFILE_EXCL);
      console.log(staticIconPath, 'was created successfully')
    } catch (err) {
      if (err.code === 'EEXIST') {
        console.log(staticIconPath, 'already exists.');
      } else {
        console.error(err);
      }
    }
  })
}

// Copy films
const genFilms = () => {
  // Scouting for films
  var films = getCurrentFilenames(filmsPath)
  
  films.forEach((film, index) => {
    let filmPath = path.join(filmsPath, film)
    let staticFilmPath = path.join(staticFilmsPath, film)
    
    try {
      fs.copyFileSync(filmPath, staticFilmPath, fs.constants.COPYFILE_EXCL);
      console.log(staticFilmPath, 'was created successfully')
    } catch (err) {
      if (err.code === 'EEXIST') {
        console.log(staticFilmPath, 'already exists.');
      } else {
        console.error(err);
      }
    }
  })
}

// Build and copy html files
const genHtml = async (file, args = {}) => {
  // console.log(`\nBuilding, minifying and copying html files... (async)`)
  
  // https://github.com/kangax/html-minifier#options-quick-reference
  const minifyOptions = {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    html5: true
  }
  
  if (file === HOME_FILE) {
    var homeFilePath = path.join(staticPath, HOME_FILE) 
    let page = await buildHomepage(["popularity", "release_date"], args.page)
    var pageMin = minify(page, minifyOptions);
    console.log(`Writing ${path.basename(HOME_FILE)}`)
    fs.writeFileSync(homeFilePath, pageMin);
  }

  if (file === FILM_FILE && args.filmPath) {
    var tutorialFilePath = path.join(staticPath, FILM_FILE)
    let page = buildFilmPage(args.filmPath)
    // var pageMin = minify(page, minifyOptions);
    console.log(`Writing ${path.basename(FILM_FILE)}`)
    fs.writeFileSync(tutorialFilePath, page);
  }

  if (file === SEARCH_FILE) {
    var searchFilePath = path.join(staticPath, SEARCH_FILE)
    let page = await buildSearchPage(args.filmTitle)
    // var pageMin = minify(page, minifyOptions);
    console.log(`Writing ${path.basename(SEARCH_FILE)}`)
    fs.writeFileSync(searchFilePath, page);
  }
  
}

const genHtmlSync = (file) => {
  // console.log(`\nBuilding, minifying and copying html files... (async)`)
  
  // https://github.com/kangax/html-minifier#options-quick-reference
  const minifyOptions = {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    html5: true
  }
  
  if (file === TUTORIAL_FILE) {
    var tutorialFilePath = path.join(staticPath, TUTORIAL_FILE)
    let page = buildTutorial()
    var pageMin = minify(page, minifyOptions);
    console.log(`Writing ${path.basename(TUTORIAL_FILE)}`)
    fs.writeFileSync(tutorialFilePath, pageMin);
  }
  
}

module.exports = {
  genCss,
  genHtml,
  genHtmlSync,
  genIcons,
  genFilms,
  genTree
}