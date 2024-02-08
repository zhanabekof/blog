const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary("md", markdownIt(options));
};