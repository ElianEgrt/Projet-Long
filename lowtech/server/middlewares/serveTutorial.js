var path = require('path');
var cookie = require('localStorage')

let serveTutorial = async (req, res) => {

  // path to static files
  var staticPath = path.join(__dirname, '../../public');

  let fileName
  cookie.getItem('contrast') === 'on' ? fileName = 'tutorialContrast.html' : fileName = 'tutorial.html'

  res.sendFile(path.join(staticPath, fileName))
  
}

module.exports = serveTutorial;