"use strict";

/**
 * Module dependencies.
 */

 "use strict";








module.exports = function (name) {
  let capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  let tmpl = `
  "use strict";


  const App = require('widget-cms');
  const ${capitalised} = App.getModel('${capitalised}');


  const ${capitalised}sController = App.Controller.extend({

    /*
     * GET one item
    **/
    get${capitalised}: function (req, res, next) {
      return ${capitalised}.where('id', req.params.id)
      .fetch()
      .then(function (item) {
        return res.json(item.toJSON());
      })
      .catch(function (error) {
        console.error(error);
      });
    },


    /*
     * GET all items
    **/
    getAll: function (req, res, next) {
      return ${capitalised}.collection()
      .fetch()
      .then(function (items) {
        return res.json(items.toJSON());
      })
      .catch(function (error) {
        console.error(error);
      });
    },


    /*
     * Create one item
    **/
    create${capitalised}: function (req, res, next) {
      return ${capitalised}.forge(req.params)
      .save()
      .then(function (item) {
        return res.json(item.toJSON());
      })
      .catch(function (error) {
        console.error(error);
      });
    },


    /*
     * Update one item
    **/
    create${capitalised}: function (req, res, next) {
      return ${capitalised}.where('id', req.params.id)
      .fetch()
      .then(function (item) {
        return item.save(req.params)
      })
      .then(function (updateItem) {
        return res.json(updateItem.toJSON());
      })
      .catch(function (error) {
        console.error(error);
      });
    }
  });

  module.exports = App.addController('${capitalised}s', ${capitalised}sController);
  `;

  return tmpl;
}
