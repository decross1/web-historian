var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

exports.handleRequest = function (req, res) {
  var headers = defaultCorsHeaders;
  if ( req.method === 'GET' && req.url === paths.staticFiles) {
    headers['Content-Type'] = 'text/html';
  } else {
    res.writeHead(404, headers);
    res.end('Error');
  }
  res.end(archive.paths.list); //sends url txt to sites.txt?
};


//GET//send static files to server//

//GET//render content from paths.archibedSites 
//throw error 404 if file not in archive

//POST//append submitted sites to paths.list