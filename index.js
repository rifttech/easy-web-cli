#!/usr/bin/env node

//for future use
const program = require('commander');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const projectPath =  process.cwd();

// Project
    // js/context.js
    // css /style.css
    // img /- 
    // index.html
const applyFilter = (src,dest) => {
     //console.log(src);
     //console.log(dest);
     return true;
 };

 //copy files and dirs
fse.copy(__dirname + '/templates/simple', projectPath, {filter: applyFilter })
  .then(() => console.log('success!'))
  .catch(err => console.error(err));

// create empty folder
fse.ensureDir(projectPath + '/img')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})






