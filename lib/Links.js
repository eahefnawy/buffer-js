'use strict';

var Base = require('./Base.js');

function Links(opts) {
  if (!(this instanceof Links)) {
    return new Links(opts);
  }
  
  this.opts = opts;
}

Links.prototype = Object.create(Base.prototype);

Links.prototype.get = function (params, callback) {
  if (!callback || !(callback instanceof Function))
    throw new Error('Please provide a valid callback function.');
    
  this._http('/links/shares.json', 'GET', params, callback);
};

module.exports = Links;
