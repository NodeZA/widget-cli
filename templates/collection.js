"use strict";

/**
 * Module dependencies.
 */


module.exports = function (name) {
  let capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  let tmpl = `
  "use strict";

  /**
   * ${capitalised}s collection
  **/

  const App = require('widget-cms');
  const ${capitalised} = App.getModel('${capitalised}');

  const ${capitalised}s = App.Collection.extend({

    model: ${capitalised}

  });

  module.exports = App.addCollection('${capitalised}s', ${capitalised}s);
  `;

  return tmpl;
}
