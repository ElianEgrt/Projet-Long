const fs = require("fs");
const fetch = require("node-fetch");
const TOKEN = "db901b15ecb34557e221c042836a2359";
const tutorial = require ('./tutorial')

const addTutorial = (staticPath) => {
  fs.writeFile(staticPath, tutorial(), e => {
    if (e) throw e;
    console.log(`tutorial.html was created successfully`);
  });
};

const buildTutorial = async (staticPath) => {

  
  addTutorial(staticPath)

};
  

module.exports = {addTutorial, buildTutorial};