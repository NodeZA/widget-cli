"use strict";

/**
 * Module dependencies.
 */
const pluralize = require('pluralize');


module.exports = function (name) {
  let plural = pluralize(name);
  let capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  let capitalisedPlural = plural.charAt(0).toUpperCase() + plural.slice(1);
  let tmpl = `

  "use strict";

  const App = require('widget-cms');
  // const Auth = App.auth();

  App.get('/${name}/:id', ${capitalisedPlural}Controller.get${capitalised});
  `;

  return tmpl;
}
