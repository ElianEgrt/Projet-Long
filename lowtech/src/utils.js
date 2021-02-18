const fs = require('fs');

// Function to get current filenames
// in directory 
function getCurrentFilenames(dirPath) { 
  let files = []
  // console.log(`Current files in: ${dirPath}`); 
  fs.readdirSync(dirPath).forEach(file => { 
    // console.log("  " + file);
    files.push(file)
  });
  return files
} 

module.exports = {
  getCurrentFilenames
}