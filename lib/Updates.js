'use strict';

var Base = require('./Base.js');

function Updates(opts) {
  if (!(this instanceof Updates)) {
    return new Updates(opts);
  }

  this.opts = opts;
}

Updates.prototype = Object.create(Base.prototype);

Updates.prototype.create = function(params, callback) {
  this._http('updates/create.json', 'POST', params, callback);
};

Updates.prototype.get = function(callback) {
  this._http('updates/' + this.opts.update_id + '.json', 'GET', null, callback);
};

Updates.prototype.interactions = function(params, callback) {
  this._http('updates/' + this.opts.update_id + '/interactions.json', 'GET', params, callback);
};

Updates.prototype.update = function(params, callback) {
  this._http('updates/' + this.opts.update_id + '/update.json', 'POST', params, callback);
};

Updates.prototype.share = function(callback) {
  this._http('updates/' + this.opts.update_id + '/share.json', 'POST', null, callback);
};

Updates.prototype.destroy = function(callback) {
  this._http('updates/' + this.opts.update_id + '/destroy.json', 'POST', null, callback);
};

Updates.prototype.moveTop = function(callback) {
  this._http('updates/' + this.opts.update_id + '/move_to_top.json', 'POST', null, callback);
};

module.exports = Updates;
