/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const requireEsm = require('esm')(module);
module.exports = requireEsm('./gatsby-ssr.esm.js');
