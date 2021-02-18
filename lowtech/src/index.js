const path = require('path')
const fs = require('fs'); 
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

// Copy css files
console.log(`\nCopying css files...`)
var files = getCurrentFilenames(stylesheetPath)
files.forEach(file => {
  try {
    fs.copyFileSync(path.join(stylesheetPath, file), path.join(staticStylesheetPath, file)); 
  } catch (err) {
    console.log("Error Found:", err);
  }
  console.log(file + " was created successfully")
})

// Build and copy html files
console.log(`\nBuilding & copying html files... (async)`)
buildHomepage(path.join(staticPath, homeFile), ["popularity", "release_date"])
buildTutorial(path.join(staticPath, tutorialFile))

