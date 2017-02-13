#!/usr/bin/env node

"use strict";

const program = require('commander');
const widget = require('../lib/widget');
const VERSION = require('../package.json').version;

program
  .version(VERSION)
  .option('-c, --create', 'Create command')
  .option('-a, --all', 'Create model, controller, collection, and route')
  .option('-model, --model [name]', 'Model to be created')
  .option('-controller, --controller [name]', 'Controller to be created')
  .option('-collection, --collection [name]', 'Collection to be created')
  .option('-route, --route [name]', 'Route to be created')
  .parse(process.argv)


if (program.create) {
  if (program.model || program.all) {
    let filePath = widget.createModel(program.model);

    console.log(' > New model created: %s', filePath);
  }

  if (program.controller || program.all) {
    let filePath = widget.createController(program.controller);

    console.log(' > New controller created: %s', filePath);
  }

  if (program.collection || program.all) {
    let filePath = widget.createCollection(program.collection);

    console.log(' > New collection created: %s', filePath);
  }

  if (program.route || program.all) {
    let filePath = widget.createRoute(program.route);

    console.log(' > New route created: %s', filePath);
  }

  if (program.widget) {
    let dirPath = widget.createWidget(program.widget);

    console.log(' > New widget created: %s', dirPath);
  }
}
