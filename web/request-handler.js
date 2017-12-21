var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');

// require more modules/folders here!
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};


exports.handleRequest = function (req, res) {
  // console.log('inside handleRequest');
  archive.readListOfUrls();
  archive.addUrlToList();
  var headers = defaultCorsHeaders;
  if ( req.method === 'GET' && req.url === '/') {  
    
    fs.readFile(archive.paths.staticFiles + '/index.html', (err, data) => {
      if (err) { throw err; }
      headers['Content-Type'] = 'text/html';
      res.write(data.toString());
      res.end();
    });
    
  } else if (req.method === 'GET' && req.url === '/styles.css') {
    
    fs.readFile(archive.paths.staticFiles + '/styles.css', (err, data) => {
      if (err) { throw err; }
      headers['Content-Type'] = 'text/css';
      res.write(data.toString());
      res.end();
    });

  } else if (req.method === 'POST') {
    // check to see if req.url is in archive
    // if it is
      // serve that site
    
  // } 
  // else if (req.method === 'GET' && req.url === '/www.google.com') {
  //   console.log('working');
  //   // fs.readFile(archive.paths);
  // } 
  } else {
    console.log('requested url', req.url);
    res.writeHead(404, headers);
    res.end('Error');
  }
  // res.end(archive.paths.list); //sends url txt to sites.txt?
};


//GET//send static files to server//

//GET//render content from paths.archibedSites 
//throw error 404 if file not in archive

//POST//append submitted sites to paths.list