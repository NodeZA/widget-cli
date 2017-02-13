"use strict";

/**
 * Module dependencies.
 */


module.exports = function (name) {
  let capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  let tmpl = `
  "use strict";

  
  const App = require('widget-cms');


  const ${capitalised} = App.Model.extend({

    tableName: '${name}s',


    hasTimestamps: true

  });

  module.exports = App.addModel('${capitalised}', ${capitalised});
  `;

  return tmpl;
}
