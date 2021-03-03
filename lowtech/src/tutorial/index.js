const tutorial = require ('./tutorial')

const buildTutorial = (file) => {

  let cssFile
  file === 'tutorial.html' ? cssFile = 'tutorial.css' : cssFile = 'tutorialContrast.css'

  return tutorial(cssFile)

};
  

module.exports = buildTutorial;