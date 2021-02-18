const path = require('path')
const fs = require('fs'); 
var CleanCSS = require('clean-css');

const { getCurrentFilenames } = require('./utils')
const { buildHomepage } = require('./home')
const { buildTutorial } = require('./tutorial')

// Local source files
var stylesheetPath = path.join(__dirname, '/stylesheets');
var homeFile = 'index.html'
var tutorialFile = 'tutorial.html'

// Public folders
var staticPath =              path.join(__dirname, '../public');
var staticAssetsPath =        path.join(staticPath, '/assets');
var staticFontsPath =         path.join(staticAssetsPath, '/fonts');
var staticIconsPath =         path.join(staticAssetsPath, '/icons');
var staticImagesPath =        path.join(staticAssetsPath, '/images');
var staticStylesheetPath =    path.join(staticAssetsPath, '/stylesheets');

var publicTree = [staticPath, staticAssetsPath, staticFontsPath, staticIconsPath, staticImagesPath, staticStylesheetPath]

// Create public directory tree
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

// Scouting for css files
var files = getCurrentFilenames(stylesheetPath)

// Minifying and copying css files
console.log(`\nMinifying and copying css files...`)
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
    fs.writeFileSync(publicCssFilePath, styles, e => {
      if (e) throw e;
      console.log(`${publicCssFilePath} was created successfully`);
    });
  }

}


// Build and copy html files
console.log(`\nBuilding & copying html files... (async)`)
buildHomepage(path.join(staticPath, homeFile), ["popularity", "release_date"])
buildTutorial(path.join(staticPath, tutorialFile))

