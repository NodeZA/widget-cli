"use strict";

/**
 * Module dependencies.
 */

module.exports = function (name) {
  let capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  let tmpl = `
  {
    "name": "${name}",
    "title": "${capitalised}",
    "version": "1.0.0",
    "routes": ["/"],
    "description": "${capitalised}",
    "author": "",
    "authorEmail": "",
    "position": "",
    "order": 1,
    "active": true,
    "repo": ""
  }
  `;

  return tmpl;
}
