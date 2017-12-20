var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  staticFiles: path.join(__dirname, '../web/public'), //stores the static files
  archivedSites: path.join(__dirname, '../archives/sites'), //stores archived files
  list: path.join(__dirname, '../archives/sites.txt') //stores the urls that were archived

};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};


// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
//read current list of urls from paths.archivedSites
};

exports.isUrlInList = function(url, callback) {
//check for value/url in list => boolean 
};

exports.addUrlToList = function(url, callback) {
//add a value/url to list 
};

exports.isUrlArchived = function(url, callback) {
//check to see if url is archived from paths.archivedSites => boolean
};

exports.downloadUrls = function(urls) {
//download url from archivedSites
};
