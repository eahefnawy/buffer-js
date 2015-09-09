'use strict';

var Base = require('./Base.js');

function Info(opts) {
  if (!(this instanceof Info)) {
    return new Info(opts);
  }

  this.opts = opts;
}

Info.prototype = Object.create(Base.prototype);

Info.prototype.get = function(callback) {
  this._http('/info/configuration.json', 'GET', null, callback);
};

module.exports = Info;
