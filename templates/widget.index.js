"use strict";

/**
 * Module dependencies.
 */


module.exports = function (name) {
  let capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  let tmpl = `
  "use strict";

  const config = require('./config.json');
  

  module.exports.config = config;

  module.exports.exec = function (App) {
    return Promise.resolve([{id: 1, title: 'One'}, {id: 2, title: 'Two'}]);
  };
  `;

  return tmpl;
}
