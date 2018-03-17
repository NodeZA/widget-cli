#!/usr/bin/env node

"use strict";

const program = require('commander');
const widget = require('../lib/widget');
const VERSION = require('../package.json').version;

program
  .version(VERSION, '-v, --version')
  .option('-m, --model [name]', 'Model to be created')
  .option('-c, --collection [name]', 'Collection to be created')
  .option('-ctr, --controller [name]', 'Controller to be created')
  .option('-r, --route [name]', 'Route to be created')
  .option('-w, --widget [name]', 'Widget to be created')
  .option('-a, --all [name]', 'Create model, controller, collection, and route')
  .parse(process.argv)

  console.log();
  console.log(`   Widget-CMS Commandline - widget-cli@${VERSION}`);
  console.log();


  if (program.model || program.all) {
    let filePath = widget.createModel(program.model || program.all);
    console.log(' > New model created: %s', filePath);
  }
  
  if (program.controller || program.all) {
    let filePath = widget.createController(program.controller || program.all);
    console.log(' > New controller created: %s', filePath);
  }

  if (program.collection || program.all) {
    let filePath = widget.createCollection(program.collection || program.all);
    console.log(' > New collection created: %s', filePath);
  }

  if (program.route || program.all) {
    let filePath = widget.createRoute(program.route || program.all);
    console.log(' > New route created: %s', filePath);
  }

  if (program.widget) {
    let dirPath = widget.createWidget(program.widget);
    console.log(' > New widget created: %s', dirPath);
  }


  console.log();
