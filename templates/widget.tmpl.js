"use strict";

/**
 * Module dependencies.
 */


module.exports = function (name) {
  let capitalised = name.charAt(0).toUpperCase() + name.slice(1);
  let tmpl = `
  {{#if collection}}
    {{#each collection}}
      <ul>
        <li>{{title}}</li>
      </ul>
    {{/each}}
  {{/if}}
  `;

  return tmpl;
}
