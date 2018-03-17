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
  const ${capitalised} = App.getModel('${capitalised}');


  const ${capitalisedPlural}Controller = App.Controller.extend({

    /*
     * GET one item
    **/
    get${capitalised}: async function (req, res, next) {
      try {
        let ${name} = await ${capitalised}.where('id', req.params.id).fetch();
        return res.json(${name}.toJSON());
      }
      catch (error) {
        console.error(error);
      }
    },


    /*
     * GET all items
    **/
    getAll: async function (req, res, next) {
      try {
        let ${plural} = ${capitalised}.collection().fetch();
        return res.json(${plural}.toJSON());
      }
      catch(error) {
        console.error(error);
      }
    },


    /*
     * Create one ${name}
    **/
    create: async function (req, res, next) {
      try {
        let ${name} = await ${capitalised}.forge(req.params).save();
        return res.json(${name}.toJSON());
      }
      catch (error) {
        console.error(error);
      }
    },


    /*
     * Update ${name}
    **/
    update: async function (req, res, next) {
      try {
        let ${name} = await ${capitalised}.where('id', req.params.id).fetch();

        return await ${name}.save(req.params);
      }
      catch (error) {
        console.error(error);
      }
    }
  });

  module.exports = App.addController('${capitalisedPlural}', ${capitalisedPlural}Controller);
  `;

  return tmpl;
}
