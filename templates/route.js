"use strict";

/**
 * Module dependencies.
 */


module.exports = function (name) {
  let capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  let tmpl = `

  "use strict";

  const App = require('widget-cms');
  // const auth = require('../lib/auth');

  // App.get('/${name}/:id', auth.isAuthenticated, ${capitalised}sController.get${capitalised});
  `;

  return tmpl;
}
