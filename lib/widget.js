"use strict";


const fs = require('fs');
const path = require('path')
const mkdir = require('mkdirp');
const pluralize = require('pluralize');

const modelTemplate = require('../templates/model');
const schemaTemplate = require('../templates/schema');
const controllerTemplate = require('../templates/controller');
const routeTemplate = require('../templates/route');
const collectionTemplate = require('../templates/collection');
const widgetJsonTemplate = require('../templates/widget.json');
const widgetIndexTemplate = require('../templates/widget.index');
const widgetHbsTemplate = require('../templates/widget.tmpl');


module.exports.createModel = function (name) {
  let dirPath = path.join(process.cwd(), 'models');
  let filePath = path.join(dirPath, `${name}.js`);

  if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  fs.writeFileSync(filePath, modelTemplate(name), 'utf-8');

  this.createSchema(name);

  return filePath;
};


module.exports.createController = function (name) {
  let filemane = pluralize(name);
  let dirPath = path.join(process.cwd(), 'controllers');
  let filePath = path.join(dirPath, `${filemane}.js`);

  if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  fs.writeFileSync(filePath, controllerTemplate(name), 'utf-8');

  return filePath;
};


module.exports.createCollection = function (name) {
  let filemane = pluralize(name);
  let dirPath = path.join(process.cwd(), 'collections');
  let filePath = path.join(dirPath, `${filemane}.js`);

  if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  fs.writeFileSync(filePath, collectionTemplate(name), 'utf-8');

  return filePath;
};


module.exports.createRoute = function (name) {
  let filemane = pluralize(name);
  let dirPath = path.join(process.cwd(), 'routes');
  let filePath = path.join(dirPath, `${filemane}.js`);

  if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  fs.writeFileSync(filePath, routeTemplate(name), 'utf-8');

  return filePath;
};


module.exports.createWidget= function (name) {
  let widgetsDir = path.join(process.cwd(), 'widgets');
  let dirPath = path.join(widgetsDir, `${name}`);

  if(!fs.existsSync(widgetsDir)) {
    fs.mkdirSync(widgetsDir);
  }

  mkdir(dirPath, function (error) {
    if (error) return console.error(error);
    fs.writeFileSync(`${dirPath}/config.json`, widgetJsonTemplate(name), 'utf-8');
    fs.writeFileSync(`${dirPath}/index.js`, widgetIndexTemplate(name), 'utf-8');
    fs.writeFileSync(`${dirPath}/templates.hbs`, widgetHbsTemplate(name), 'utf-8');
  });

  return dirPath;
};


module.exports.createSchema = function (name) {
  let dbPath = path.join(process.cwd(), 'db');
  let dirPath = path.join(dbPath, 'schemas');
  let filePath = path.join(dirPath, `${name}.js`);

  if(!fs.existsSync(dbPath)) {
    fs.mkdirSync(dbPath);
  }

  if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  fs.writeFileSync(filePath, schemaTemplate(name), 'utf-8');

  console.log(' > New schema created: %s', filePath);

  return filePath;
};
