var path = require('path');
const {msToTime, fileAge} = require('../utils')

// Check file age
let fileCheck = (req, res, next) => {
  if (req.method === 'GET' && req.url.slice(-4) !== '.css') {
    // locate file
    let file = req.url === '/' ? '/index.html' : req.url;
    var staticPath = path.join(__dirname, '../../public');
    let filePath = path.join(staticPath, file)
    
    // Compute age
    let age = fileAge(filePath)

    if (age !== undefined) {
      // Log readable age
      console.log(`${file} age is ${msToTime(age)}`);
      if (age > 5 * 60 * 1000) {
        console.log(`${file} is too old, rebuilding it.`);
        require("../../src/index")
      }
    } else {
      console.log("File doesn't exist, you need to build it or 404")
    }
    
  }
  next();
};

module.exports = fileCheck;