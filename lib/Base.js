'use strict';

var request = require('request'),
    qs      = require('querystring');
    
var BASE_URL = 'https://api.bufferapp.com/1/';

function Base() {
  if (!(this instanceof Base)) {
    return new Base();
  }
}


Base.prototype._http = function (endpoint, method, params, callback) {
  var opts = {
    url: BASE_URL + endpoint + '?' + qs.stringify(params),
    method: method,
    json: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      'bearer': this.opts.access_token
    }
  };

  request(opts, function(error, response, body) {
    if (response.statusCode != 200)
      throw new Error(body.error + ' | Error Code: ' + body.code + ' | HTTP Code: ' + response.statusCode);
    else
      callback(body);
  });
};

module.exports = Base;
