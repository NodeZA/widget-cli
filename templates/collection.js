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

  /**
   * ${capitalisedPlural} collection
  **/

  const App = require('widget-cms');
  const ${capitalised} = App.getModel('${capitalised}');

  const ${capitalisedPlural} = App.Collection.extend({

    model: ${capitalised}

  });

  module.exports = App.addCollection('${capitalisedPlural}', ${capitalisedPlural});
  `;

  return tmpl;
}
