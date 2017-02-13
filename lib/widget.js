"use strict";


const fs = require('fs');
const path = require('path')
const mkdir = require('mkdirp');

const modelTemplate = require('../templates/model');
const controllerTemplate = require('../templates/controller');
const routeTemplate = require('../templates/route');
const collectionTemplate = require('../templates/collection');
const widgetJsonTemplate = require('../templates/widget.json');
const widgetIndexTemplate = require('../templates/widget.index');
const widgetHbsTemplate = require('../templates/widget.tmpl');


module.exports.createModel = function (name) {
  let filePath = path.join(process.cwd(), 'models', `${name}.js`);

  fs.writeFileSync(filePath, modelTemplate(name), 'utf-8');

  return filePath;
};


module.exports.createController = function (name) {
  let filePath = path.join(process.cwd(), 'controllers', `${name}s.js`);

  fs.writeFileSync(filePath, controllerTemplate(name), 'utf-8');

  return filePath;
};


module.exports.createCollection = function (name) {
  let filePath = path.join(process.cwd(), 'collections', `${name}s.js`);

  fs.writeFileSync(filePath, collectionTemplate(name), 'utf-8');

  return filePath;
};


module.exports.createRoute = function (name) {
  let filePath = path.join(process.cwd(), 'routes', `${name}s.js`);

  fs.writeFileSync(filePath, routeTemplate(name), 'utf-8');

  return filePath;
};


module.exports.createWidget= function (name) {
  let dirPath = path.join(process.cwd(), 'widgets', `${name}`);

  mkdir(dirPath, function (error) {
    if (error) return console.error(error);
    fs.writeFileSync(`${dirPath}/config.json`, widgetJsonTemplate(name), 'utf-8');
    fs.writeFileSync(`${dirPath}/index.js`, widgetIndexTemplate(name), 'utf-8');
    fs.writeFileSync(`${dirPath}/templates.hbs`, widgetHbsTemplate(name), 'utf-8');
  });

  return dirPath;
};
