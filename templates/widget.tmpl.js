"use strict";

/**
 * Module dependencies.
 */


module.exports = function () {
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
