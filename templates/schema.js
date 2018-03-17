"use strict";

/**
 * Module dependencies.
 */


module.exports = function () {
  let tmpl = `
  "use strict";


  module.exports = {
    id: {type: 'increments', nullable: false, primary: true}
  };
  `;

  return tmpl;
};
